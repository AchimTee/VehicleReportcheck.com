// Native fetch is available in Node 22
// import fetch from 'node-fetch';

const MERCHANT_ACCOUNT = '2035928';
// Credentials from Checkout.jsx
const CLIENT_ID = 'ERKLvqK'; // API Key?
const CLIENT_SECRET = '156bb329818940c681d31aba2f64ee9b';
const AUTH_TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
// const AUTH_TOKEN = 'QmdfaWghe2Jhc2U2NU6bXVhaHdpYW8pfQ=='; // OLD INCORRECT ONE
const CHECKOUT_ID = '7938d1d6951f48edace406ecb1055e5b'; // From user screenshot

// Endpoint based on search result
// https://rmsc.hubtel.com/v1/merchantaccount/merchants/{accountnumber}/transactions/status
const URL = `https://rmsc.hubtel.com/v1/merchantaccount/merchants/${MERCHANT_ACCOUNT}/transactions/status?hubtelTransactionId=${CHECKOUT_ID}`;

console.log('Testing Hubtel API Status Check...');
console.log('URL:', URL);

async function checkStatus() {
    try {
        const response = await fetch(URL, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${AUTH_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response Status:', response.status);
        const text = await response.text();
        console.log('Response Body:', text);

        try {
            const json = JSON.parse(text);
            console.log('Parsed JSON:', json);
        } catch (_error) {
            console.log('Body is not JSON');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

checkStatus();
