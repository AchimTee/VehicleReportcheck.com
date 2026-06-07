import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { sendWelcomeEmail, sendPaymentReceipt, sendMarketingBlast } from './services/emailService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable Trust Proxy for Railway
app.enable('trust proxy');

// Redirect vehiclereportcheck.com -> www.vehiclereportcheck.com
app.use((req, res, next) => {
    const host = req.get('Host') || '';
    // Normalize host (remove port if present for checking)
    const hostname = host.split(':')[0].toLowerCase();

    // Debug Log (To filter: grep for [Middleware])
    console.log(`[Middleware] Host: '${host}', Parsed: '${hostname}', Method: ${req.method}, URL: ${req.originalUrl}`);

    if (hostname === 'vehiclereportcheck.com') {
        console.log(`[Middleware] Redirecting to www.vehiclereportcheck.com`);
        // Use 308 for POST/PUT/PATCH/DELETE to preserve body, 301 for GET (SEO)
        const status = (req.method === 'GET' || req.method === 'HEAD') ? 301 : 308;
        return res.redirect(status, `https://www.vehiclereportcheck.com${req.originalUrl}`);
    }
    next();
});


// Proxies for Hubtel and Vehicle Databases
// Note: We use the same paths as in vite.config.js
app.use('/hubtel-api', createProxyMiddleware({
    target: 'https://payproxyapi.hubtel.com',
    changeOrigin: true,
    secure: false, // Matches vite config
    pathRewrite: { '^/hubtel-api': '' },
    logLevel: 'debug',
    onProxyReq: (proxyReq, req, _res) => {
        console.log(`[Hubtel Proxy] Proxying ${req.method} request to: ${proxyReq.host}${proxyReq.path}`);
        // Important: If body-parser was used before this, we might need to restream. 
        // But by placing this BEFORE body-parser, we avoid that issue entirely.
    },
    onProxyRes: (proxyRes, _req, _res) => {
        console.log(`[Hubtel Proxy] Received response: ${proxyRes.statusCode}`);
    },
    onError: (err, req, res) => {
        console.error('[Hubtel Proxy] Error:', err);
        res.status(502).json({ status: 'error', message: 'Proxy Error', error: err.message });
    }
}));

// MOCK ENDPOINT FOR TESTING (Requested by User)
app.get('/hubtel-status/v1/merchantaccount/merchants/2035928/transactions/status', (req, res, next) => {
    if (req.query.clientReference === '1sc2rc8nwmchngs9ds2f1dmn') {
        console.log('Serving PASCAL-CASE DYNAMIC MOCK Hubtel response');

        // Generate pseudo-random hex strings
        const randHex = (len) => Array(len).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        const checkoutId = `${randHex(8)}-${randHex(4)}-${randHex(4)}-${randHex(4)}-${randHex(12)}`;
        const invoiceId = randHex(32);

        return res.json({
            "ResponseCode": "0000",
            "Status": "Success",
            "Data": {
                "CheckoutId": checkoutId,
                "SalesInvoiceId": invoiceId,
                "ClientReference": "1sc2rc8nwmchngs9ds2f1dmn", // Matches query
                "Status": "Success",
                "Amount": 150.00,
                "CustomerPhoneNumber": "233242825109",
                "PaymentDetails": {
                    "MobileMoneyNumber": "233242825109",
                    "PaymentType": "mobilemoney",
                    "Channel": "mtn-gh"
                },
                "Description": "The MTN Mobile Money payment has been approved and processed successfully."
            }
        });
    }
    next();
});

app.use('/hubtel-status', createProxyMiddleware({
    target: 'https://rmsc.hubtel.com',
    changeOrigin: true,
    secure: false, // Matches vite config
    pathRewrite: { '^/hubtel-status': '' }
}));

// SMART VIN DECODE (Multi-Region Scraper + NHTSA)
// Solves "Unknown" reports by aggregating data
app.get('/api/vin-decode/:vin', async (req, res) => {
    const { vin } = req.params;
    try {
        console.log(`Smart Decoding VIN: ${vin}`);

        // 1. Fetch from NHTSA (Reliable YMM for Global/US/EU)
        let nhtsaInfo = {};
        try {
            const nhtsa = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
            const nData = await nhtsa.json();
            if (nData.Results) {
                nhtsaInfo = {
                    year: nData.Results.find(r => r.VariableId === 29)?.Value,
                    make: nData.Results.find(r => r.VariableId === 26)?.Value,
                    model: nData.Results.find(r => r.VariableId === 28)?.Value,
                    type: nData.Results.find(r => r.VariableId === 39)?.Value,
                    fuel: nData.Results.find(r => r.VariableId === 24)?.Value,
                    manufacturer: nData.Results.find(r => r.VariableId === 27)?.Value,
                };
            }
        } catch (err) { console.error('NHTSA fetch failed', err); }

        // Fallback for Year from 10th char if missing
        const yearMap = {
            'A': 2010, 'B': 2011, 'C': 2012, 'D': 2013, 'E': 2014, 'F': 2015, 'G': 2016, 'H': 2017,
            'J': 2018, 'K': 2019, 'L': 2020, 'M': 2021, 'N': 2022, 'P': 2023, 'R': 2024, 'S': 2025,
            'T': 2026, 'V': 2027, 'W': 2028, 'X': 2029, 'Y': 2030,
            '1': 2001, '2': 2002, '3': 2003, '4': 2004, '5': 2005, '6': 2006, '7': 2007, '8': 2008, '9': 2009,
            'Y': 2000, 'X': 1999, 'W': 1998, 'V': 1997, 'T': 1996, 'S': 1995, 'R': 1994, 'P': 1993, 'N': 1992
        };
        const tenthChar = vin.charAt(9)?.toUpperCase();
        if ((!nhtsaInfo.year || nhtsaInfo.year === 'Not Applicable') && yearMap[tenthChar]) {
            nhtsaInfo.year = yearMap[tenthChar].toString();
        }

        // Fallback for Make from WMI (first 3 chars)
        const wmiDb = {
            '1C4':'Jeep','1C6':'RAM','1C3':'Chrysler','1C8':'Chrysler','1FA':'Ford','1FB':'Ford','1FC':'Ford','1FD':'Ford','1FM':'Ford','1FT':'Ford',
            '1G1':'Chevrolet','1G2':'Pontiac','1G3':'Oldsmobile','1G4':'Buick','1G6':'Cadillac','1G8':'Saturn','1GC':'Chevrolet','1GD':'GMC','1GE':'GMC','1GH':'Hummer','1GK':'GMC','1GM':'Pontiac','1GT':'GMC','1GY':'Cadillac',
            '1HG':'Honda','1HF':'Honda','1J4':'Jeep','1J8':'Jeep','1L1':'Lincoln','1LN':'Lincoln','1ME':'Mercury','1MR':'Mitsubishi',
            '1N4':'Nissan','1N6':'Nissan','1NX':'Toyota','1P3':'Plymouth','1VW':'Volkswagen','1YV':'Mazda','1ZV':'Ford','19U':'Acura','19X':'Honda',
            '2C3':'Chrysler','2C8':'Chrysler','2D3':'Dodge','2FA':'Ford','2G1':'Chevrolet','2HG':'Honda','2HK':'Honda','2T1':'Toyota','2T2':'Lexus',
            '3C6':'RAM','3FA':'Ford','3FE':'Ford','3G1':'Chevrolet','3N1':'Nissan','3N6':'Nissan','3VW':'Volkswagen',
            '4T1':'Toyota','4T3':'Toyota','4T4':'Toyota','4US':'BMW','5CD':'Volkswagen','5FN':'Honda','5J6':'Honda','5N1':'Nissan','5TD':'Toyota','5UX':'BMW','5YJ':'Tesla',
            'WBA':'BMW','WBD':'Mercedes-Benz','WBF':'BMW','WBS':'BMW M','WDB':'Mercedes-Benz','WDD':'Mercedes-Benz','WDC':'Mercedes-Benz','WF0':'Ford','WMW':'MINI',
            'WP0':'Porsche','WAU':'Audi','WV1':'Volkswagen','WV2':'Volkswagen','WVG':'Volkswagen','WVW':'Volkswagen','VF1':'Renault','VF3':'Peugeot','VF7':'Citroen',
            'SAJ':'Jaguar','SAL':'Land Rover','SBM':'McLaren','SCB':'Bentley','ZAM':'Maserati','ZAR':'Alfa Romeo','ZCG':'Ferrari','ZFF':'Ferrari','ZHW':'Lamborghini',
            'ZFA':'Fiat','ZLA':'Lancia','YV1':'Volvo','YV2':'Volvo','YS3':'Saab','JA3':'Mitsubishi','JF1':'Subaru','JHM':'Honda','JM1':'Mazda','JN1':'Nissan','JN8':'Nissan',
            'JT2':'Toyota','JT3':'Toyota','JT4':'Toyota','JT6':'Lexus','JT8':'Lexus','JTE':'Toyota','JTK':'Toyota','JTM':'Toyota','JTN':'Toyota','JS1':'Suzuki',
            'KL8':'Chevrolet','KMH':'Hyundai','KMJ':'Kia','KNA':'Kia','KNC':'Kia','KND':'Kia'
        };
        const wmi3 = vin.substring(0, 3).toUpperCase();
        const wmi2 = vin.substring(0, 2).toUpperCase();
        const offlineMake = wmiDb[wmi3] || wmiDb[wmi2];

        // 2. Fetch from Upstream (VehicleDatabases)
        let upstreamJson = {};
        try {
            const upstream = await fetch(`https://api.vehicledatabases.com/vin-decode/${vin}`, {
                headers: { 'x-AuthKey': process.env.VITE_API_AUTH_KEY || '958b5a58801e11f0946e0242ac120002' }
            });
            if (upstream.ok) {
                upstreamJson = await upstream.json();
            }
        } catch(e) { console.error('Upstream fetch failed', e); }

        // 3. Merge Strategies
        const merged = { ...upstreamJson };
        
        // Find the basic info object
        let target = merged;
        if (merged.data && merged.data.basic) target = merged.data.basic;
        else if (merged.basic) target = merged.basic;
        
        const isUnknown = (val) => !val || String(val).toLowerCase() === 'unknown' || val === 'Not Applicable';

        if (isUnknown(target.year) && nhtsaInfo.year) target.year = nhtsaInfo.year;
        
        if (isUnknown(target.make)) {
            if (nhtsaInfo.make && !isUnknown(nhtsaInfo.make)) target.make = nhtsaInfo.make;
            else if (offlineMake) target.make = offlineMake;
            else if (nhtsaInfo.manufacturer && !isUnknown(nhtsaInfo.manufacturer)) target.make = nhtsaInfo.manufacturer.split(' ')[0]; // Fallback to Manufacturer Name (e.g. "RENAULT GROUP" -> "RENAULT")
        }
        
        if (isUnknown(target.model) && nhtsaInfo.model) target.model = nhtsaInfo.model;

        // Ensure Specs map correctly
        if (!target.specs) target.specs = {};
        if (nhtsaInfo.fuel) target.specs.fuel_type = nhtsaInfo.fuel;
        if (nhtsaInfo.type) target.specs.body_type = nhtsaInfo.type;

        res.json(merged);
    } catch (e) {
        console.error('Smart Decode Error:', e);
        res.status(500).json({ error: 'Decode failed' });
    }
});

// CACHED & BRANDED REPORT ENDPOINT
app.get('/api/reports/:vin', async (req, res) => {
    const { vin } = req.params;
    try {
        // 1. Check Cache in DB
        // 1. Check Cache in DB (Try/Catch to allow fallback)
        try {
            const cached = await query('SELECT report_data FROM reports WHERE vin = $1', [vin]);
            if (cached.rows.length > 0) {
                const reportData = cached.rows[0].report_data;
                // VALIDATION: Ensure it's actual HTML content, not metadata JSON or null
                if (reportData && typeof reportData === 'string' && reportData.trim().startsWith('<')) {
                    console.log(`Serving cached report for ${vin}`);
                    return res.json({ status: 'success', data: { html: reportData } });
                }
                console.log(`Cached data for ${vin} is invalid/incomplete (likely metadata). Fetching fresh report.`);
            }
        } catch (dbErr) {
            console.warn(`DB Cache Lookup Failed for ${vin}, fetching from provider directly:`, dbErr.message);
        }

        // 2. Fetch Fresh from Provider
        console.log(`Fetching fresh report for ${vin}`);
        const response = await fetch(`https://api.vehicledatabases.com/vin-auction-html/${vin}`, {
            headers: { 'x-AuthKey': process.env.VITE_API_AUTH_KEY || '958b5a58801e11f0946e0242ac120002' }
        });
        const json = await response.json();

        if (json.status === 'success' && json.data?.html) {
            let html = json.data.html;

            // 3. Inject Branding & Fix Layout
            const branding = `
                <style>
                    /* Vehicle Report Check Branding Overrides */
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                    body, html, .report-content { font-family: 'Inter', sans-serif !important; background: #fff !important; }
                    
                    /* Headings */
                    h1, h2, h3, h4, .section-title { color: #0047ab !important; font-weight: 700 !important; }
                    
                    /* Tables */
                    table { width: 100% !important; border-collapse: collapse; margin-top: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                    th { background: #f1f5f9; color: #0047ab; padding: 12px; text-align: left; font-size: 14px; border: 1px solid #e2e8f0; }
                    td { padding: 12px; border: 1px solid #e2e8f0; color: #334155; }
                    
                    /* Hide Provider Logos */
                    img[src*="vehicledatabases"], .provider-logo { display: none !important; }
                    
                    /* Sections */
                    .report-section { background: white; padding: 20px; margin-bottom: 30px; border-radius: 8px; border: 1px solid #e2e8f0; }
                </style>
                <div style="text-align:center; padding: 20px; border-bottom: 4px solid #0047ab; margin-bottom: 20px; background: #f8fafc;">
                    <h1 style="margin:0; color: #0047ab; font-size: 24px;">Vehicle History Report</h1>
                    <p style="margin:5px 0; color: #64748b; font-weight: 500;">VIN: ${vin}</p>
                </div>
            `;
            html = branding + html;

            // 4. Cache in DB
            // 4. Cache in DB (Non-blocking / Log Error only)
            try {
                await query(`
                    INSERT INTO reports (id, vin, report_data, date, status)
                    VALUES ($1, $1, $2, NOW(), 'Completed')
                    ON CONFLICT (id) DO UPDATE SET report_data = $2, date = NOW()
                `, [vin, html]);
            } catch (saveErr) {
                console.warn(`Failed to cache report for ${vin} in DB:`, saveErr.message);
            }

            res.json({ status: 'success', data: { html } });
        } else {
            res.status(404).json({ error: 'Report not available' });
        }
    } catch (e) {
        console.error('Report Error:', e);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Fallback Proxy for other vehicle-api routes
app.use('/vehicle-api', createProxyMiddleware({
    target: 'https://api.vehicledatabases.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/vehicle-api': '' },
    on: {
        proxyReq: (proxyReq, req, res) => {
            const apiKey = process.env.VITE_API_AUTH_KEY || 'e9694f64e00e46348041989c0fab704a';
            proxyReq.setHeader('x-authkey', apiKey);
            proxyReq.setHeader('Ocp-Apim-Subscription-Key', apiKey);
            proxyReq.setHeader('subscription-key', apiKey);
            proxyReq.setHeader('api-key', apiKey);
        }
    }
}));

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Increased limit for images

// Helper functions readData and writeData removed as they were unused.

import { query } from './db/index.js';
import { setupDatabase } from './init_postgres.js';

// --- API ROUTES ---

// Health Check (Database independent)
app.get('/api/health', async (req, res) => {
    try {
        await query('SELECT 1');
        res.json({ status: 'ok', db: 'connected', timestamp: new Date() });
    } catch (e) {
        console.error('Health Check Failed:', e);
        res.status(500).json({ status: 'error', db: 'disconnected', error: e.message, timestamp: new Date() });
    }
});

// Admin: Manual Seed Trigger
app.post('/api/admin/seed-data', async (req, res) => {
    try {
        console.log('Admin triggered manual seeding...');
        await setupDatabase(false); // Can throw
        res.json({ message: 'Seeding completed successfully.' });
    } catch (e) {
        console.error('Manual seed failed:', e);
        res.status(500).json({ error: e.message });
    }
});

// USERS
app.get('/api/users', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const search = req.query.search || '';
        const role = req.query.role || '';
        const offset = (page - 1) * limit;

        let queryText = 'SELECT * FROM users';
        let countText = 'SELECT COUNT(*) FROM users';
        const params = [];
        const conditions = [];

        if (search) {
            params.push(`%${search}%`);
            conditions.push(`(name ILIKE $${params.length} OR email ILIKE $${params.length})`);
        }

        if (role && role !== 'all') {
            params.push(role);
            conditions.push(`role = $${params.length}`);
        }

        if (conditions.length > 0) {
            const whereClause = ' WHERE ' + conditions.join(' AND ');
            queryText += whereClause;
            countText += whereClause;
        }

        queryText += ` ORDER BY joined_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;

        const countRes = await query(countText, params);
        const total = parseInt(countRes.rows[0].count);

        const { rows } = await query(queryText, [...params, limit, offset]);

        res.json({
            data: rows,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const user = req.body;
        // Check if exists
        const check = await query('SELECT * FROM users WHERE email = $1', [user.email]);
        if (check.rows.length > 0) {
            return res.status(200).json(check.rows[0]);
        }

        const id = String(user.id || Date.now());
        const { rows } = await query(`
            INSERT INTO users (id, name, email, password, role, status, credits, joined_date, profile_pic, google_auth)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *
        `, [
            id,
            user.name || '',
            user.email,
            user.password || '',
            user.role || 'User',
            user.status || 'Active',
            user.credits || 0,
            user.joined || new Date(),
            user.profilePic || null,
            user.google || false
        ]);
        
        // Send Welcome Email
        sendWelcomeEmail(user.email, user.name || 'User');

        res.json(rows[0]);
    } catch (err) {
        console.error('DB Error in create user, attempting fallback:', err.message);
        // Fallback: Return a mock user object so checkout can proceed
        if (err.code === '28P01' || err.code === 'ECONNREFUSED' || err.message.includes('password')) {
            const mockUser = {
                id: "fallback-" + Date.now(),
                name: req.body.name || 'Guest User',
                email: req.body.email,
                role: 'user',
                status: 'active',
                credits: 0
            };
            res.json(mockUser);
            return;
        }
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/users/update', async (req, res) => {
    try {
        const { id, ...updates } = req.body;

        // Construct dynamic update query
        const fields = [];
        const values = [];
        let idx = 1;

        for (const [key, value] of Object.entries(updates)) {
            // Map frontend field names to DB columns if necessary
            let col = key;
            if (key === 'profilePic') col = 'profile_pic';
            if (key === 'joined') col = 'joined_date';

            fields.push(`${col} = $${idx}`);
            values.push(value);
            idx++;
        }
        values.push(String(id)); // ID is last param

        if (fields.length === 0) return res.json({ success: true });

        const sql = `UPDATE users SET ${fields.join(', ')} WHERE id = $${idx}`;
        await query(sql, values);

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});


app.post('/api/users/delete', async (req, res) => {
    try {
        const { id } = req.body;
        // Optional: Admin check here in real app
        await query('DELETE FROM users WHERE id = $1', [String(id)]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// REPORTS
app.get('/api/reports', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM reports ORDER BY date DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/reports', async (req, res) => {
    try {
        const r = req.body;
        // Ensure ID is set
        const id = r.id || `R-${Math.floor(Math.random() * 10000)}`;

        // FIX: Do NOT store metadata as report_data. Store NULL until we have the HTML content.
        // If the report content (HTML) is sent in the body (unlikely based on current usage), use it.
        const reportContent = r.reportContent || null;

        await query(`
            INSERT INTO reports (id, vin, make, model, year, type, status, date, user_email, amount, report_data)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `, [
            id,
            r.vin,
            r.make,
            r.model,
            r.year,
            r.type,
            r.status,
            r.date || new Date(),
            r.email, // Assuming frontend sends 'email'
            r.amount,
            reportContent // Storing NULL is correct here. Do NOT store JSON.stringify(r)!
        ]);
        res.json({ ...r, id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// LISTINGS
app.get('/api/listings', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 50;
        const search = req.query.search || '';
        const status = req.query.status || '';
        const offset = (page - 1) * limit;

        let queryText = `
            SELECT id, title, price, currency, make, model, year, condition, type, mileage, transmission, location, status, description, user_id, created_at,
            CASE 
                WHEN jsonb_typeof(images) = 'array' AND jsonb_array_length(images) > 0 
                THEN jsonb_build_array(images->0) 
                ELSE '[]'::jsonb 
            END as images
            FROM listings
        `;
        let countText = 'SELECT COUNT(*) FROM listings';

        const params = [];
        const conditions = [];

        if (search) {
            params.push(`%${search}%`);
            conditions.push(`(title ILIKE $${params.length} OR make ILIKE $${params.length} OR model ILIKE $${params.length})`);
        }

        if (status && status !== 'all' && status !== 'pending') {
            // For general filtering status
            // Note: AdminPortal uses 'pending' filter explicitly
            params.push(status);
            conditions.push(`status = $${params.length}`);
        } else if (status === 'pending') {
            params.push('pending');
            conditions.push(`status = $${params.length}`);
        }

        if (conditions.length > 0) {
            const whereClause = ' WHERE ' + conditions.join(' AND ');
            queryText += whereClause;
            countText += whereClause;
        }

        queryText += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;

        const countRes = await query(countText, params);
        const total = parseInt(countRes.rows[0].count);

        const { rows } = await query(queryText, [...params, limit, offset]);

        res.json({
            data: rows,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/listings', async (req, res) => {
    try {
        const item = req.body;
        const id = item.id || Date.now(); // Simple numeric ID generation if missing

        await query(`
             INSERT INTO listings (id, title, price, currency, make, model, year, condition, type, mileage, transmission, location, images, description, status, raw_data)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        `, [
            id,
            item.title,
            item.price,
            item.currency,
            item.make,
            item.model,
            item.year,
            item.condition,
            item.type,
            item.mileage,
            item.transmission,
            item.location,
            JSON.stringify(item.images || []),
            item.description || '',
            item.status || 'pending',
            JSON.stringify(item)
        ]);
        res.json({ ...item, id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/listings/update', async (req, res) => {
    try {
        const { id, ...updates } = req.body;

        // This is a complex update because we have explicit columns AND raw_data.
        // For simplicity, we'll update specific columns if provided.
        // Since frontend might send partial updates, we build query dynamically.

        const fields = [];
        const values = [];
        let idx = 1;

        for (const [key, value] of Object.entries(updates)) {
            if (['title', 'price', 'currency', 'make', 'model', 'year', 'condition', 'type', 'mileage', 'transmission', 'location', 'description', 'status'].includes(key)) {
                fields.push(`${key} = $${idx}`);
                values.push(value);
                idx++;
            } else if (key === 'images') {
                fields.push(`images = $${idx}`);
                values.push(JSON.stringify(value));
                idx++;
            }
        }

        // Also update raw_data to keep it in sync (optional but good)
        fields.push(`raw_data = raw_data || $${idx}`);
        values.push(JSON.stringify(updates));
        idx++;

        values.push(id);

        if (fields.length > 0) {
            const sql = `UPDATE listings SET ${fields.join(', ')} WHERE id = $${idx}`;
            await query(sql, values);
        }

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/listings/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await query('DELETE FROM listings WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }

});

// SAVED LISTINGS
app.post('/api/saved-listings/toggle', async (req, res) => {
    try {
        const { userId, listingId } = req.body;

        // Check if exists
        const check = await query('SELECT * FROM saved_listings WHERE user_id = $1 AND listing_id = $2', [userId, listingId]);

        if (check.rows.length > 0) {
            // Remove
            await query('DELETE FROM saved_listings WHERE user_id = $1 AND listing_id = $2', [userId, listingId]);
            return res.json({ saved: false });
        } else {
            // Add
            await query('INSERT INTO saved_listings (user_id, listing_id) VALUES ($1, $2)', [userId, listingId]);
            return res.json({ saved: true });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.get('/api/saved-listings/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        // Join with listings to get full details
        const sql = `
            SELECT l.* 
            FROM listings l
            JOIN saved_listings s ON l.id = s.listing_id
            WHERE s.user_id = $1
            ORDER BY s.saved_at DESC
        `;
        const { rows } = await query(sql, [userId]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// PAYMENTS
app.get('/api/payments', async (req, res) => {
    try {
        // Return transactions log
        const { rows } = await query('SELECT * FROM transactions ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// COUPONS
app.get('/api/coupons', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM coupons ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/coupons', async (req, res) => {
    try {
        const c = req.body;
        const check = await query('SELECT * FROM coupons WHERE code = $1', [c.code]);
        if (check.rows.length > 0) {
            return res.status(400).json({ error: 'Coupon code already exists' });
        }

        const id = Date.now(); // or c.id
        await query(`
            INSERT INTO coupons (id, code, discount, type, expiry, usage_count, max_uses, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [
            id,
            c.code,
            c.discount,
            c.type,
            c.expiry || null,
            0,
            c.maxUses,
            'active'
        ]);

        res.json({ ...c, id });
    } catch (err) {
        console.error('Coupon Add Error:', err);
        res.status(500).json({ error: `Database error: ${err.message}` });
    }
});

app.post('/api/coupons/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await query('DELETE FROM coupons WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Coupon validation
app.post('/api/validate-coupon', async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) return res.status(400).json({ valid: false, message: 'Code required' });

        const { rows } = await query('SELECT * FROM coupons WHERE code = $1', [code]);
        if (rows.length === 0) {
            return res.status(404).json({ valid: false, message: 'Invalid coupon' });
        }

        const coupon = rows[0];
        if (coupon.status !== 'active') return res.status(400).json({ valid: false, message: 'Inactive coupon' });

        if (new Date() > new Date(coupon.expiry)) {
            return res.status(400).json({ valid: false, message: 'Expired coupon' });
        }

        if (coupon.usage_count >= coupon.max_uses) {
            return res.status(400).json({ valid: false, message: 'Max usage reached' });
        }

        res.json({ valid: true, coupon: { ...coupon, usageCount: coupon.usage_count + 1 } }); // Sending +1 as preview
    } catch (err) {
        console.error('DB Error in validate-coupon, attempting fallback:', err.message);
        try {
            const dataPath = path.join(__dirname, 'data', 'coupons.json');
            if (fs.existsSync(dataPath)) {
                const coupons = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
                const coupon = coupons.find(c => c.code === req.body.code); // Use req.body.code directly since it's in scope but 'code' var is block scoped in try

                if (coupon) {
                    if (coupon.status !== 'active') return res.status(400).json({ valid: false, message: 'Inactive coupon' });
                    // Simple checks for fallback
                    res.json({ valid: true, coupon: { ...coupon, usage_count: coupon.usageCount, max_uses: coupon.maxUses } });
                    return;
                }
            }
        } catch (e) {
            console.error('Fallback failed:', e);
        }
        res.status(500).json({ error: 'Database error' });
    }
});

// Coupon usage (Increment)
app.post('/api/coupons/use', async (req, res) => {
    try {
        const { code } = req.body;
        await query('UPDATE coupons SET usage_count = usage_count + 1 WHERE code = $1', [code]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});


// BOLGS API
app.get('/api/blogs', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM blogs ORDER BY date DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/blogs', async (req, res) => {
    try {
        const b = req.body;
        // If ID provided, maybe update? No, let's stick to explicit add/update separation for clarity,
        // or handle upsert if ID is present but not in DB (unlikely for SERIAL).

        await query(`
            INSERT INTO blogs (title, author, category, date, status, image, content)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `, [
            b.title,
            b.author,
            b.category,
            b.date || new Date(),
            b.status || 'Draft',
            b.image,
            b.content
        ]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/blogs/update', async (req, res) => {
    try {
        const { id, ...updates } = req.body;
        const fields = [];
        const values = [];
        let idx = 1;

        for (const [key, value] of Object.entries(updates)) {
            fields.push(`${key} = $${idx}`);
            values.push(value);
            idx++;
        }
        values.push(id);

        if (fields.length > 0) {
            const sql = `UPDATE blogs SET ${fields.join(', ')} WHERE id = $${idx}`;
            await query(sql, values);
        }
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/blogs/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await query('DELETE FROM blogs WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// LOANS API
app.get('/api/loans', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM loans ORDER BY date_applied DESC');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/loans', async (req, res) => {
    try {
        const app = req.body;

        // Use JSONB or Columns? 
        // For simplicity with existing schema, stick to columns + ensure validation.
        // We'll trust frontend sends 'fullName', 'email' etc.
        // MAPPING: 
        // fullName -> full_name
        // monthlyIncome -> monthly_income
        // loanAmount -> loan_amount
        // loanPurpose -> loan_purpose
        // employmentStatus -> employment_status

        const { rows } = await query(`
            INSERT INTO loans (full_name, email, phone, employment_status, monthly_income, loan_amount, loan_purpose, message, status)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
        `, [
            app.fullName,
            app.email,
            app.phone,
            app.employmentStatus,
            app.monthlyIncome,
            app.loanAmount,
            app.loanPurpose,
            app.message,
            'pending'
        ]);
        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/loans/update', async (req, res) => {
    try {
        const { id, ...updates } = req.body;
        const fields = [];
        const values = [];
        let idx = 1;

        for (const [key, value] of Object.entries(updates)) {
            // Map keys
            let col = key;
            if (key === 'fullName') col = 'full_name';
            if (key === 'employmentStatus') col = 'employment_status';
            if (key === 'monthlyIncome') col = 'monthly_income';
            if (key === 'loanAmount') col = 'loan_amount';
            if (key === 'loanPurpose') col = 'loan_purpose';

            fields.push(`${col} = $${idx}`);
            values.push(value);
            idx++;
        }
        values.push(id);

        if (fields.length > 0) {
            const sql = `UPDATE loans SET ${fields.join(', ')} WHERE id = $${idx}`;
            await query(sql, values);
        }
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/loans/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await query('DELETE FROM loans WHERE id = $1', [id]);
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});


// SYSTEM SETTINGS / PRICING
app.get('/api/settings', async (req, res) => {
    try {
        // Ensure table exists (lazy init)
        await query(`
            CREATE TABLE IF NOT EXISTS app_settings (
                key VARCHAR(50) PRIMARY KEY,
                value JSONB NOT NULL
            )
        `);

        const { rows } = await query('SELECT value FROM app_settings WHERE key = $1', ['pricing']);
        if (rows.length > 0) {
            res.json(rows[0].value);
        } else {
            // Return defaults (and maybe save them?)
            const defaultSettings = {
                loanProcessingFee: 100,
                listingPackages: [
                    { id: 1, name: 'Basic', price: 50, listings: 1, features: ['1 Listing', 'Standard Visibility', '30 Days Active'] },
                    { id: 2, name: 'Standard', price: 300, listings: 10, features: ['10 Listings', 'Priority Support', '60 Days Active'], popular: true },
                    { id: 3, name: 'Unlimited', price: 1000, listings: 9999, features: ['Unlimited Listings', 'Featured Listings', 'Dedicated Account Manager'] }
                ],
                reportPackages: [
                    { id: 1, name: 'Single Report', credits: 1, price: 14.00, perReport: 14.00 },
                    { id: 2, name: '2 Reports', credits: 2, price: 24.00, perReport: 12.00, popular: true },
                    { id: 3, name: '5 Reports', credits: 5, price: 45.00, perReport: 9.00, bestValue: true },
                    { id: 4, name: '10 Reports', credits: 10, price: 70.00, perReport: 7.00 }
                ]
            };
            res.json(defaultSettings);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

app.post('/api/settings', async (req, res) => {
    try {
        const settings = req.body;

        // Upsert
        await query(`
            INSERT INTO app_settings (key, value) VALUES ($1, $2)
            ON CONFLICT (key) DO UPDATE SET value = $2
        `, ['pricing', JSON.stringify(settings)]);

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Create Pending Transaction (Before Gateway Redirect)
app.post('/api/payments/initiate', async (req, res) => {
    try {
        const { checkoutId, clientReference, amount, description, phone, user } = req.body;

        // Check duplication
        const check = await query('SELECT id FROM transactions WHERE checkout_id = $1', [checkoutId]);
        if (check.rows.length > 0) return res.json({ success: true, message: 'Already exists' });

        await query(`
             INSERT INTO transactions (checkout_id, client_reference, amount, status, customer_phone, description, created_at, raw_response, payment_details)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        `, [
            checkoutId,
            clientReference,
            amount,
            'Pending',
            phone || (user && user.phone) || 'N/A',
            description,
            new Date(),
            JSON.stringify(req.body),
            JSON.stringify({ initiatedBy: user?.email || 'Guest' })
        ]);
        res.json({ success: true });
    } catch (e) {
        console.error("Pending Payment Error", e);
        res.status(500).json({ error: e.message });
    }
});

// Callback Endpoint
app.post('/api/payment-callback', async (req, res) => {
    console.log('Received Payment Callback:', req.body);

    try {
        const isHubtel = !!req.body.Data;
        const data = req.body.Data || req.body;

        const checkoutId = data.CheckoutId || data.checkoutId || data.checkout_id;
        const salesInvoiceId = data.SalesInvoiceId || data.salesInvoiceId;
        const clientRef = data.ClientReference || data.clientReference;
        const amount = data.Amount || data.amount;
        const status = data.Status || data.status;
        const phone = data.CustomerPhoneNumber || data.customerPhoneNumber || 'N/A';
        const description = data.Description || data.description;

        let paymentDetails = isHubtel ? data.PaymentDetails : { type: data.paymentType };

        const check = await query('SELECT id FROM transactions WHERE checkout_id = $1 OR client_reference = $2', [checkoutId, clientRef]);

        if (check.rows.length > 0) {
            // Update existing
            await query(`
                UPDATE transactions 
                SET status = $1, sales_invoice_id = $2, payment_details = $3, raw_response = $4
                WHERE id = $5
            `, [
                status,
                salesInvoiceId,
                JSON.stringify(paymentDetails),
                JSON.stringify(req.body),
                check.rows[0].id
            ]);
            console.log('Transaction updated to Success.');
        } else {
            // Insert new
            await query(`
                INSERT INTO transactions (checkout_id, sales_invoice_id, client_reference, amount, status, customer_phone, payment_details, description, raw_response)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            `, [
                checkoutId,
                salesInvoiceId,
                clientRef,
                amount,
                status,
                phone,
                JSON.stringify(paymentDetails),
                description,
                JSON.stringify(req.body)
            ]);
            console.log('Transaction saved to DB.');
        }

        // Send Payment Receipt Email if status is Success
        if (status && status.toLowerCase() === 'success') {
            const customerEmail = data.customerEmail || data.CustomerEmail;
            const customerName = data.customerName || data.CustomerName;
            if (customerEmail && customerEmail !== 'N/A') {
                sendPaymentReceipt(customerEmail, customerName, amount, description);
            }
        }

        res.status(200).json({ status: 'success', message: 'Callback received' });

    } catch (error) {
        console.error('Error saving transaction:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

// Verify Paystack Transaction
app.get('/api/payments/verify/:reference', async (req, res) => {
    try {
        const reference = req.params.reference;
        const secretKey = process.env.PAYSTACK_SECRET_KEY;
        
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${secretKey}`
            }
        });
        
        const data = await response.json();
        
        if (data.status === true && data.data.status === 'success') {
            res.json({ success: true, data: data.data });
        } else {
            res.json({ success: false, message: data.message || 'Verification failed', data: data.data });
        }
    } catch (e) {
        console.error("Paystack verify error", e);
        res.status(500).json({ error: e.message });
    }
});

// Serve Static Files only in production or if not using Vite dev server
// But for "hosting" validation, we assume we might run this.
// Check if dist exists
// Serve Static Files only in production or if not using Vite dev server
// Robust path resolution for Railway/Nixpacks
let productionDistPath = path.join(rootDir, 'dist');
if (!fs.existsSync(productionDistPath)) {
    // Fallback: try relative to CWD (common in container starts)
    productionDistPath = path.join(process.cwd(), 'dist');
}

if (fs.existsSync(productionDistPath)) {
    console.log('Serving static files from:', productionDistPath);
    try {
        // Deep Debug: Check index.html references
        const indexPath = path.join(productionDistPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            const indexContent = fs.readFileSync(indexPath, 'utf8');
            console.log('Index.html found. Length:', indexContent.length);

            // Extract script src
            const scriptMatch = indexContent.match(/src="\/assets\/(.*?)"/);
            if (scriptMatch) {
                const scriptName = scriptMatch[1];
                const scriptPath = path.join(productionDistPath, 'assets', scriptName);
                if (fs.existsSync(scriptPath)) {
                    console.log(`VERIFIED: index.html references ${scriptName} AND IT EXISTS on disk.`);
                } else {
                    console.error(`MISMATCH: index.html references ${scriptName} BUT IT IS MISSING from disk!`);
                    console.log('Actual Assets:', fs.readdirSync(path.join(productionDistPath, 'assets')));
                }
            }
        }
    } catch (e) { console.log('Error deep debugging dist:', e); }

    app.use(express.static(productionDistPath));

    // Explicitly handle assets to prevent fallthrough/MIME errors
    // If an asset is requested but missing, 404 instead of returning index.html
    app.use('/assets', (req, res) => res.status(404).send('Asset not found'));

    // SITEMAP GENERATOR
    app.get('/sitemap.xml', async (req, res) => {
        try {
            const baseUrl = 'https://vehiclereportcheck.com';

            // Fetch dynamic data
            const blogs = await query('SELECT id, date FROM blogs WHERE status = \'Published\'');
            const listings = await query('SELECT id, created_at FROM listings WHERE status = \'approved\'');

            let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Static Pages -->
    <url>
        <loc>${baseUrl}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${baseUrl}/report</loc>
        <changefreq>always</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/buy</loc>
        <changefreq>hourly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>${baseUrl}/sell</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/blogs</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>${baseUrl}/pricing</loc>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    <url>
        <loc>${baseUrl}/login</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>${baseUrl}/signup</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>${baseUrl}/about</loc>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
    </url>
    <url>
        <loc>${baseUrl}/contact</loc>
        <changefreq>yearly</changefreq>
        <priority>0.4</priority>
    </url>
`;

            // Dynamic Blogs
            blogs.rows.forEach(blog => {
                const date = new Date(blog.date || Date.now()).toISOString().split('T')[0];
                xml += `    <url>
        <loc>${baseUrl}/blogs/${blog.id}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
`;
            });

            // Dynamic Listings
            listings.rows.forEach(car => {
                const date = new Date(car.created_at || Date.now()).toISOString().split('T')[0];
                xml += `    <url>
        <loc>${baseUrl}/buy/${car.id}</loc>
        <lastmod>${date}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
`;
            });

            xml += '</urlset>';

            res.header('Content-Type', 'application/xml');
            res.send(xml);
        } catch (err) {
            console.error('Sitemap generation error:', err);
            res.status(500).send('Error generating sitemap');
        }
    });

    // Catch-all for SPA
    // Note: Express 5 requires regex for wildcards or specific syntax. '*' string causes PathError.
    app.get(/(.*)/, (req, res) => {
        if (req.path.startsWith('/api') || req.path.startsWith('/hubtel') || req.path.startsWith('/vehicle')) {
            return res.status(404).send('Not Found');
        }
        res.sendFile(path.join(productionDistPath, 'index.html'));
    });
} else {
    console.error(`CRITICAL: DIST folder not found at ${productionDistPath}. Build failed?`);
    console.log('CWD:', process.cwd());
    try {
        console.log('Dir contents:', fs.readdirSync(process.cwd()));
    } catch (e) { console.error('Cannot list CWD:', e); }
}

// Marketing Email Blast Endpoint
app.post('/api/admin/blast-email', async (req, res) => {
    try {
        const { subject, message, customEmails } = req.body;
        
        let emails = [];
        if (customEmails && customEmails.length > 0) {
            emails = customEmails;
        } else {
            // Fetch all user emails
            const { rows } = await query('SELECT email FROM users WHERE email IS NOT NULL');
            emails = rows.map(r => r.email).filter(e => e.includes('@'));
        }
        
        if (emails.length === 0) {
            return res.json({ success: false, message: 'No users found to send email to.' });
        }

        const result = await sendMarketingBlast(emails, subject, message);
        res.json(result);
    } catch (error) {
        console.error('Marketing blast error:', error);
        res.status(500).json({ success: false, error: 'Failed to send marketing blast' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Dist Path Checked:', productionDistPath);
});
