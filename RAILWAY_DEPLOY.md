# Deploying Vehicle Report Check to Railway

This guide outlines how to deploy the Vehicle Report Check application to [Railway.app](https://railway.app/).

## Prerequisites

1. A GitHub repository containing this code.
2. A Railway account.

## deployment Steps

1. **Push to GitHub**: Ensure all your local changes (including `railway.toml` and `package.json` updates) are committed and pushed to your GitHub repository.
2. **New Project on Railway**:
    * Log in to Railway.
    * Click **+ New Project**.
    * Select **Deploy from GitHub repo**.
    * Choose your repository (e.g., `Achtrex-LLC/Vehicle Report Check`).
    * Click **Deploy Now**.
3. **Configuration**:
    * Railway should automatically detect the `railway.toml` file and use the `nixpacks` builder.
    * It will run `npm run build` during the build phase and `npm start` to launch the app.

## Environment Variables

You may need to set the following environment variables in the Railway project settings ("Variables" tab) if your app relies on them:

* `PORT`: (Railway sets this automatically, but standard is `3001` or `8080`)
* `API_KEY`: (If you have external API keys)
* `DATABASE_URL`: (If you switch to a real database)

## ✅ Data Persistence Configured

**Your application has been successfully migrated to use PostgreSQL.**

* The code is configured to check for a `DATABASE_URL` environment variable.
* **Automatic Migrations**: The deployment command (`npm run migrate && npm start`) will automatically:
    1. Connect to your Railway PostgreSQL database.
    2. Create the necessary tables (Users, Listings, Reports, etc.) if they don't exist.
    3. **Import all your existing data** from the local JSON files (`server/data/*.json`) into the live database.

### Final Verification

1. Ensure your Railway project has a PostgreSQL database service added.
2. Railway should automatically inject `DATABASE_URL` into your Vehicle Report Check service variables.
3. Deploy the project. The build logs will show the migration importing your users and listings.
