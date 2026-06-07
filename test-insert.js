import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://postgres:ywdibZcrvBtUAZElPiFwJLQqQittDlxx@caboose.proxy.rlwy.net:54625/railway',
  ssl: false
});

async function testInsert() {
  try {
    await client.connect();
    console.log('Connected to Railway Postgres!');
    const id = Date.now();
    await client.query(`
      INSERT INTO coupons (id, code, discount, type, expiry, usage_count, max_uses, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [
        id,
        'TESTCODE2',
        NaN,
        'fixed',
        '2026-12-31',
        0,
        null,
        'active'
    ]);
    console.log('Insert success');
  } catch (err) {
    console.error('Error inserting:', err.message);
  } finally {
    await client.end();
  }
}

testInsert();
