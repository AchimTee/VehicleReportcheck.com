
// Native fetch used
const BASE_URL = 'http://localhost:3001/api/users';
const ADMIN_USER = {
    id: 4,
    name: 'Super Admin',
    email: 'Admin@vehiclereportcheck.com',
    role: 'Admin',
    status: 'Active',
    joined: '2022-11-05',
    password: '02413',
    credits: 999
};

async function verify() {
    console.log('Testing/Verifying API...');

    try {
        // 1. GET Users
        let res = await fetch(BASE_URL);
        if (!res.ok) throw new Error(`GET failed: ${res.statusText}`);
        let users = await res.json();
        console.log(`Current users count: ${users.length}`);

        // 2. Check for Admin
        let admin = users.find(u => u.email.toLowerCase() === ADMIN_USER.email.toLowerCase());

        if (!admin) {
            console.log('Admin not found. Creating via API...');
            const postRes = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ADMIN_USER)
            });

            if (!postRes.ok) throw new Error(`POST failed: ${postRes.statusText}`);
            const savedUser = await postRes.json();
            console.log('Admin created:', savedUser);
        } else {
            console.log('Admin already exists.');
            if (admin.password !== ADMIN_USER.password) {
                console.log('Password mismatch. Updating...');
                // Updating...
                await fetch(BASE_URL + '/update', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: admin.id, password: ADMIN_USER.password })
                });
                console.log('Password updated.');
            } else {
                console.log('Password OK.');
            }
        }

        // 3. Verify Persistence
        res = await fetch(BASE_URL);
        users = await res.json();
        admin = users.find(u => u.email.toLowerCase() === ADMIN_USER.email.toLowerCase());

        if (admin && admin.password === ADMIN_USER.password) {
            console.log('✅ SUCCESS: Admin user matches requirements.');
        } else {
            console.error('❌ FAILURE: Admin user not found or incorrect after sync.');
        }

    } catch (error) {
        console.error('❌ Error during verification:', error);
    }
}

verify();
