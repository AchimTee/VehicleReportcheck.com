import https from 'https';

const data = JSON.stringify({
    "totalAmount": 100,
    "description": "Test Transaction",
    "callbackUrl": "https://webhook.site/8b4bbd0a-5f98-4b3d-abbe-b9b49767f7d5",
    "returnUrl": "http://hubtel.com/online",
    "merchantAccountNumber": "2035928",
    "cancellationUrl": "http://hubtel.com/online",
    "clientReference": "test-" + Date.now()
});

const options = {
    hostname: 'payproxyapi.hubtel.com',
    path: '/items/initiate',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from('ERKLvqK:156bb329818940c681d31aba2f64ee9b').toString('base64'),
        'Cache-Control': 'no-cache',
        'Content-Length': data.length
    }
};

console.log('Sending request to Hubtel...');

const req = https.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    let responseBody = '';

    res.on('data', (chunk) => {
        responseBody += chunk;
    });

    res.on('end', () => {
        try {
            const json = JSON.parse(responseBody);
            console.log('Response Body:', JSON.stringify(json, null, 2));
        } catch (_error) {
            console.log('Response Body (Raw):', responseBody);
        }
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(data);
req.end();
