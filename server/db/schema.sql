-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255),
    name VARCHAR(255),
    role VARCHAR(50) DEFAULT 'User',
    status VARCHAR(50) DEFAULT 'Active',
    credits INTEGER DEFAULT 0,
    joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profile_pic TEXT,
    google_auth BOOLEAN DEFAULT FALSE
);

-- Listings Table
CREATE TABLE IF NOT EXISTS listings (
    id BIGINT PRIMARY KEY,
    title VARCHAR(255),
    price NUMERIC,
    currency VARCHAR(10),
    make VARCHAR(100),
    model VARCHAR(100),
    year VARCHAR(10),
    condition VARCHAR(50),
    type VARCHAR(50),
    mileage VARCHAR(50),
    transmission VARCHAR(50),
    location VARCHAR(100),
    status VARCHAR(50) DEFAULT 'pending',
    images JSONB,
    description TEXT,
    user_id VARCHAR(255), -- Link to user if known
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    raw_data JSONB -- Store original JSON just in case
);

-- Reports Table
CREATE TABLE IF NOT EXISTS reports (
    id VARCHAR(50) PRIMARY KEY,
    vin VARCHAR(50) NOT NULL,
    make VARCHAR(100),
    model VARCHAR(100),
    year VARCHAR(10),
    type VARCHAR(50),
    status VARCHAR(50),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_email VARCHAR(255),
    amount NUMERIC,
    report_data JSONB
);

-- Coupons Table
CREATE TABLE IF NOT EXISTS coupons (
    id BIGINT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    discount NUMERIC,
    type VARCHAR(20),
    expiry TIMESTAMP,
    usage_count INTEGER DEFAULT 0,
    max_uses INTEGER,
    status VARCHAR(20) DEFAULT 'active'
);

-- Transactions/Payments Log
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    checkout_id VARCHAR(100),
    sales_invoice_id VARCHAR(100),
    client_reference VARCHAR(100),
    amount NUMERIC,
    status VARCHAR(50),
    customer_phone VARCHAR(50),
    payment_details JSONB,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    raw_response JSONB
);

-- Saved Listings Table (Favorites)
CREATE TABLE IF NOT EXISTS saved_listings (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    listing_id BIGINT NOT NULL,
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, listing_id)
);

-- Blogs Table
CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    category VARCHAR(100),
    date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(50) DEFAULT 'Draft',
    image TEXT,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Loans Table
CREATE TABLE IF NOT EXISTS loans (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    employment_status VARCHAR(100),
    monthly_income VARCHAR(100),
    loan_amount VARCHAR(100),
    loan_purpose VARCHAR(255),
    message TEXT,
    status VARCHAR(50) DEFAULT 'pending',
    date_applied TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
