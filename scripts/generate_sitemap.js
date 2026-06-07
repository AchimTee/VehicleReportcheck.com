const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://vehiclereportcheck.com';
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Static Routes with priorities
const staticRoutes = [
    { path: '/', priority: '1.0' },
    { path: '/buy', priority: '0.9' },
    { path: '/sell', priority: '0.9' },
    { path: '/report', priority: '0.9' },
    { path: '/vin-check', priority: '0.9' },
    { path: '/car-loan', priority: '0.8' },
    { path: '/pricing', priority: '0.8' },
    { path: '/blogs', priority: '0.7' },
    { path: '/about', priority: '0.6' },
    { path: '/contact', priority: '0.6' },
    { path: '/careers', priority: '0.5' },
    { path: '/privacy', priority: '0.5' },
    { path: '/terms', priority: '0.5' },
    { path: '/cookies', priority: '0.5' }
];

// Function to generate XML
const generateSitemap = (routes) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

    return xml;
};

// Main execution
const main = async () => {
    console.log('Generating sitemap...');

    // TODO: Connect to DB here to fetch dynamic routes if needed
    // const cars = await db.query('SELECT id FROM listings');
    // const carRoutes = cars.map(c => ({ path: `/buy/${c.id}`, priority: '0.8' }));

    // For now, using static routes only
    const allRoutes = [...staticRoutes];

    const xmlContent = generateSitemap(allRoutes);

    fs.writeFileSync(OUTPUT_FILE, xmlContent);
    console.log(`Sitemap generated at ${OUTPUT_FILE} with ${allRoutes.length} URLs.`);
};

main().catch(console.error);
