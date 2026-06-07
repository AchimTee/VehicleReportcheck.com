import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './db/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, 'data');

const readJson = (filename) => {
    try {
        const filePath = path.join(DATA_DIR, filename);
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
    } catch (e) {
        console.error(`Failed to read ${filename}`, e);
    }
    return [];
};

const setupDatabase = async (shouldExit = true) => {
    try {
        if (!process.env.DATABASE_URL) {
            console.warn('⚠️ SKIPPING MIGRATION: DATABASE_URL not set. Assuming build step or local dev without DB.');
            process.exit(0);
        }

        console.log('Connecting to database...');
        const client = await pool.connect();
        console.log('Connected successfully.');

        // Force Schema Update (since we changed types)
        // WARNING: This clears the DB to import from JSON fresh.
        // CRITICAL FIX: Only drop tables if strictly requested. 
        // Otherwise, preserve existing data (production safe).
        if (process.env.FORCE_RESET === 'true') {
            console.log('FORCE_RESET enabled: Dropping tables...');
            await client.query('DROP TABLE IF EXISTS listings CASCADE');
            await client.query('DROP TABLE IF EXISTS users CASCADE');
            await client.query('DROP TABLE IF EXISTS reports CASCADE');
            await client.query('DROP TABLE IF EXISTS coupons CASCADE');
            await client.query('DROP TABLE IF EXISTS transactions CASCADE');
        } else {
            console.log('Checking schema (Data preserved)...');
        }

        console.log('Applying schema...');
        const schemaPath = path.join(__dirname, 'db', 'schema.sql');
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        await client.query(schemaSql);

        // MIGRATION: Ensure 'status' column exists for legacy data
        try {
            await client.query(`ALTER TABLE listings ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'approved';`);
            console.log("Migration: Checked/Added 'status' column to listings.");
        } catch (e) {
            console.log("Migration warning:", e.message);
        }

        console.log('Schema applied.');

        // 2. Migrate Users
        console.log('Migrating Users...');
        const users = readJson('users.json');
        for (const user of users) {
            // Handle ID: Ensure it's string
            const id = String(user.id || Date.now());

            // Check if user exists by ID or Email
            const existing = await client.query('SELECT id FROM users WHERE id = $1 OR email = $2', [id, user.email]);

            if (existing.rows.length === 0) {
                await client.query(`
                     INSERT INTO users (id, name, email, password, role, status, credits, joined_date, profile_pic, google_auth)
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
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
            }
        }
        console.log(`Migrated ${users.length} users.`);

        // 3. Migrate Listings
        console.log('Migrating Listings...');
        const listings = readJson('listings.json');
        for (const item of listings) {
            // Check if exists
            const existing = await client.query('SELECT id FROM listings WHERE id = $1', [item.id]);
            if (existing.rows.length === 0) {
                await client.query(`
                    INSERT INTO listings (id, title, price, currency, make, model, year, condition, type, mileage, transmission, location, images, description, raw_data)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
                `, [
                    item.id,
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
                    JSON.stringify(item.images || []), // Store images array as JSONB
                    item.description || '',
                    JSON.stringify(item) // Save full object too
                ]);
            }
        }
        console.log(`Migrated ${listings.length} listings.`);

        // 4. Migrate Reports
        console.log('Migrating Reports...');
        const reports = readJson('reports.json');
        for (const r of reports) {
            await client.query(`
                INSERT INTO reports (id, vin, make, model, year, type, status, date, user_email, amount, report_data)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
                ON CONFLICT (id) DO NOTHING
            `, [
                r.id,
                r.vin,
                r.make,
                r.model,
                r.year,
                r.type,
                r.status,
                r.date,
                r.email, // JSON has 'email'
                r.amount,
                JSON.stringify(r)
            ]);
        }
        console.log(`Migrated ${reports.length} reports.`);

        // 5. Migrate Coupons
        console.log('Migrating Coupons...');
        const coupons = readJson('coupons.json');
        for (const c of coupons) {
            await client.query(`
                INSERT INTO coupons (id, code, discount, type, expiry, usage_count, max_uses, status)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                ON CONFLICT (code) DO NOTHING
            `, [
                c.id,
                c.code,
                c.discount,
                c.type,
                c.expiry,
                c.usageCount,
                c.maxUses,
                c.status
            ]);
        }
        console.log(`Migrated ${coupons.length} coupons.`);

        // 6. Migrate Transactions if any
        console.log('Migrating Transactions...');
        const transactions = readJson('transactions.json');
        for (const t of transactions) {
            // Basic de-duplication: Check if checkout_id exists
            const exists = await client.query('SELECT id FROM transactions WHERE checkout_id = $1', [t.Data?.CheckoutId]);
            if (exists.rows.length === 0) {
                await client.query(`
                    INSERT INTO transactions (checkout_id, sales_invoice_id, client_reference, amount, status, customer_phone, payment_details, description, created_at, raw_response)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                 `, [
                    t.Data?.CheckoutId,
                    t.Data?.SalesInvoiceId,
                    t.Data?.ClientReference,
                    t.Data?.Amount,
                    t.Data?.Status,
                    t.Data?.CustomerPhoneNumber,
                    JSON.stringify(t.Data?.PaymentDetails),
                    t.Data?.Description,
                    t.receivedAt || new Date(),
                    JSON.stringify(t)
                ]);
            }
        }
        console.log(`Migrated ${transactions.length} transactions.`);


        console.log('Migration completed successfully!');
        client.release();
        if (shouldExit) process.exit(0);

    } catch (err) {
        console.error('Migration failed:', err);
        if (shouldExit) process.exit(1);
        else throw err;
    }
};

export { setupDatabase };

// Only run if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    setupDatabase();
}
