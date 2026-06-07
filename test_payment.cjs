
// Node fetch removed 
// If not, I can use https module. But let's try assuming native fetch in node 18+ or just use https.
// Actually, I'll use https to be safe as I don't want to install dependencies.

const https = require('https');

const data = JSON.stringify({
    totalAmount: 1,
    description: "Test Payment",
    callbackUrl: "https://webhook.site/8b4bbd0a-5f98-4b3d-abbe-b9b49767f7d5",
    returnUrl: "http://localhost:5173/payment-callback",
    cancellationUrl: "http://localhost:5173/payment-callback",
    merchantAccountNumber: "2035928",
    clientReference: `test_${Date.now()}`
});

const auth = Buffer.from('ERKLvqK:156bb329818940c681d31aba2f64ee9b').toString('base64');

const options = {
    hostname: 'payproxyapi.hubtel.com',
    port: 443,
    path: '/items/initiate',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
        'Content-Length': data.length
    }
};

const req = https.request(options, (res) => {
    console.log(`StatusCode: ${res.statusCode}`);
    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        console.log('Response Body:');
        console.log(responseBody);
        try {
            JSON.parse(responseBody);
            console.log('Valid JSON received.');
        } catch (e) {
            console.error('Invalid JSON!');
        }
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(data);
req.end();
