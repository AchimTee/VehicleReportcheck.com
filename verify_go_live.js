
const BASE_URL = process.argv[2] || 'https://www.vehiclereportcheck.com';

async function runTest() {
    console.log('🔄 Starting Go-Live Verification...');
    let errors = 0;

    // 1. Check Homepage
    try {
        const res = await fetch(BASE_URL);
        if (res.ok) console.log('✅ Homepage is accessible (200 OK)');
        else { console.error('❌ Homepage failed:', res.status); errors++; }
    } catch (e) { console.error('❌ Homepage unreachable:', e.message); errors++; }

    // 2. Check Admin Login (Data Existence)
    try {
        const res = await fetch(`${BASE_URL}/api/users`);
        const response = await res.json();
        const users = response.data || response; // Handle both formats

        if (!Array.isArray(users)) throw new Error('Invalid users response format');

        const admin = users.find(u => u.email.toLowerCase() === 'admin@vehiclereportcheck.com');
        if (admin && admin.password === '02413') console.log('✅ Admin User confirmed: Admin@vehiclereportcheck.com');
        else { console.error('❌ Admin User missing or malformed'); errors++; }
    } catch (e) { console.error('❌ User API failed:', e.message); errors++; }

    // 3. Listings API
    try {
        const res = await fetch(`${BASE_URL}/api/listings`);
        if (res.ok) {
            const response = await res.json();
            const listings = response.data || response;
            console.log(`✅ Listings API accessible. Count: ${listings.length}`);
        } else { console.error('❌ Listings API failed:', res.status); errors++; }
    } catch (e) { console.error('❌ Listings API unreachable:', e.message); errors++; }

    // 4. Reports API
    try {
        const res = await fetch(`${BASE_URL}/api/reports`);
        if (res.ok) {
            const reports = await res.json(); // Reports might still be array, check if paginated later
            console.log(`✅ Reports API accessible. Count: ${reports.length}`);
        } else { console.error('❌ Reports API failed:', res.status); errors++; }
    } catch (e) { console.error('❌ Reports API unreachable:', e.message); errors++; }

    // 5. Simulate User Signup
    const testUser = {
        name: 'GoLive Test',
        email: `test_${Date.now()}@vehiclereportcheck.com`,
        password: 'password123',
        role: 'user'
    };
    try {
        const res = await fetch(`${BASE_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testUser)
        });
        if (res.ok) {
            const user = await res.json();
            if (user.email === testUser.email) console.log('✅ User Signup API confirmed working');
            else { console.error('❌ User Signup returned invalid data'); errors++; }
        } else { console.error('❌ User Signup API failed:', res.status); errors++; }
    } catch (e) { console.error('❌ User Signup API unreachable:', e.message); errors++; }

    console.log('---');
    if (errors === 0) console.log('🚀 SYSTEM READY FOR LIVE (All Background Checks Passed)');
    else console.error(`⚠️ SYSTEM HAS ${errors} ISSUES. CHECK LOGS.`);
}

runTest();
