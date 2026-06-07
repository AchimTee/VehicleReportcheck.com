
// verify_edit_api.cjs
const http = require('http');

function makeRequest(path, method, data) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: 3001,
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => resolve(JSON.parse(body)));
        });

        req.on('error', (e) => reject(e));
        if (data) req.write(JSON.stringify(data));
        req.end();
    });
}

async function verifyEdit() {
    console.log("1. Fetching current listings...");
    const listings = await makeRequest('/api/listings', 'GET');
    if (!listings || listings.length === 0) {
        console.error("No listings found!");
        return;
    }

    const firstListing = listings[0];
    const originalPrice = firstListing.price;
    console.log(`Target Listing ID: ${firstListing.id}, Current Price: ${originalPrice}`);

    const newPrice = originalPrice + 500;
    console.log(`2. Updating price to ${newPrice}...`);

    const updateRes = await makeRequest('/api/listings/update', 'POST', {
        id: firstListing.id,
        price: newPrice
    });

    if (updateRes.success) {
        console.log("Update reported success.");
    } else {
        console.error("Update failed:", updateRes);
        return;
    }

    console.log("3. Verifying update...");
    const updatedListings = await makeRequest('/api/listings', 'GET');
    const updatedListing = updatedListings.find(l => l.id == firstListing.id);

    if (updatedListing.price === newPrice) {
        console.log("SUCCESS: Price was updated correctly!");
    } else {
        console.error(`FAILURE: Price mismatch. Expected ${newPrice}, got ${updatedListing.price}`);
    }
}

verifyEdit();
