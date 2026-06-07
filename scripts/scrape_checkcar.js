import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

async function scrapeImages() {
  try {
    const response = await fetch('https://checkcar.vin/');
    const html = await response.text();

    const regex = /src=["'](\/?[^"']+\.(?:png|jpg|jpeg|svg|webp))["']/gi;
    let match;
    const urls = new Set();
    while ((match = regex.exec(html)) !== null) {
      urls.add(match[1]);
    }
    
    // Also try to find background-image urls
    const bgRegex = /url\(['"]?(\/?[^'"\)]+\.(?:png|jpg|jpeg|svg|webp))['"]?\)/gi;
    while ((match = bgRegex.exec(html)) !== null) {
      urls.add(match[1]);
    }

    console.log(`Found ${urls.size} unique image URLs`);

    for (const imgUrl of urls) {
      const fullUrl = imgUrl.startsWith('http') ? imgUrl : `https://checkcar.vin${imgUrl.startsWith('/') ? '' : '/'}${imgUrl}`;
      const fileName = path.basename(imgUrl.split('?')[0]);
      const filePath = path.join(ASSETS_DIR, fileName);

      try {
        console.log(`Downloading ${fullUrl} to ${fileName}`);
        const imgRes = await fetch(fullUrl);
        if (!imgRes.ok) throw new Error(`HTTP ${imgRes.status}`);
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));
      } catch (err) {
        console.error(`Failed to download ${fullUrl}: ${err.message}`);
      }
    }
    console.log('Scraping complete.');
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

scrapeImages();
