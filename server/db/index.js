import pg from 'pg';
const { Pool } = pg;

// Use DATABASE_URL if available (Railway/Heroku/etc)
let connectionString = process.env.DATABASE_URL;

// Fix: Strip "Type " prefix if present (common copy-paste error)
if (connectionString && connectionString.startsWith('Type ')) {
    console.log('⚠️ Fixing malformed DATABASE_URL (removing "Type " prefix)...');
    connectionString = connectionString.replace(/^Type\s+/, '');
}

if (!connectionString) {
    console.warn("⚠️ WARNING: DATABASE_URL is not set! Attempting to connect to localhost...");
} else {
    // Mask password for logging
    const masked = connectionString.replace(/:([^:@]+)@/, ':****@');
    console.log(`🔌 DB Connection String detected: ${masked}`);
}

const config = {
    connectionString: connectionString || 'postgresql://postgres:password@localhost:5432/vehiclereportcheck',
    connectionTimeoutMillis: 30000, // Fail after 30 seconds if cannot connect
    idleTimeoutMillis: 30000,      // Close idle clients after 30 seconds
};

// Enable SSL for cloud databases (Railway requires this)
if (connectionString) {
    config.ssl = { rejectUnauthorized: false };
}

const pool = new Pool(config);

// Prevent crash on idle client errors
pool.on('error', (err, _client) => {
    console.error('Unexpected error on idle client', err);
    // process.exit(-1); // Don't crash, let the app run in degraded mode
});

export const query = (text, params) => pool.query(text, params);
export default pool;
