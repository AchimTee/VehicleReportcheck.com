# Connecting Namecheap Domain to Railway

Since you have moved from AWS to Railway, you need to update your DNS records in Namecheap to point to the new deployment.

## Step 1: Get DNS Target from Railway

1. Log in to your **Railway Dashboard**.
2. Open your **Vehicle Report Check** project.
3. Click on the **Vehicle Report Check Service** (the main app, not the database).
4. Go to the **Settings** tab.
5. Scroll down to the **Networking** section.
6. Click **Generate Domain** (to get a `xxx.up.railway.app` domain) OR click **Custom Domain**.
7. Enter your domain (e.g., `www.vehiclereportcheck.com`).
8. Railway will show you a **CNAME** target value (e.g., `vehiclereportcheck.up.railway.app`). **Copy this value.**

## Step 2: Configure Namecheap (Cleaner Method)

*This method uses `www.vehiclereportcheck.com` as your main site and redirects `vehiclereportcheck.com` to it. This is recommended because Railway uses CNAME records which work best with subdomains like `www`.*

1. Log in to **Namecheap**.
2. Go to **Domain List** and click **Manage** next to your domain.
3. Click on the **Advanced DNS** tab.
4. **Delete** any old records pointing to AWS (look for `A` records with IP addresses or `CNAME` records pointing to `amazonaws.com`).
5. Add the following new records:

### Record 1: The Main Site (www)

* **Type**: `CNAME Record`
* **Host**: `www`
* **Value**: `s29ox63s.up.railway.app`
* **TTL**: `Automatic`

### Record 2: Redirect Root to www

* **Type**: `URL Redirect Record`
* **Host**: `@`
* **Value**: `https://www.vehiclereportcheck.com`
* **Type**: `Permanent (301)`

## Verification

1. Save changes in Namecheap.
2. Wait 5-30 minutes for DNS propagation.
3. Visit `vehiclereportcheck.com` - it should redirect to `www.vehiclereportcheck.com` which serves your Railway app.
