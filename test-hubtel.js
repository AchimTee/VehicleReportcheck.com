const targets = [
    { name: 'Google', host: 'www.google.com' },
    { name: 'Hubtel', host: 'payproxyapi.hubtel.com' }
];

async function testConnectivity() {
    console.log('--- Starting Network Diagnostics ---\n');

    for (const target of targets) {
        console.log(`Testing ${target.name} (${target.host})...`);

        // 2. Test Connection (Fetch)
        try {
            const start = Date.now();
            const res = await fetch(`https://${target.host}`, { method: 'HEAD', signal: AbortSignal.timeout(10000) });
            const duration = Date.now() - start;
            console.log(`  [HTTP] Connect Success: ${res.status} (${duration}ms)`);
        } catch (err) {
            console.error(`  [HTTP] Connect Failed: ${err.message}`);
            if (err.cause) console.error(`    Cause: ${err.cause.code || err.cause}`);
        }
        console.log('');
    }

    console.log('--- Diagnostics Complete ---');
}

testConnectivity();
