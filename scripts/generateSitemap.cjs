const fs = require('fs');

async function generate() {
  const m = await import('../src/data/countryGuidesData.js');
  const slugs = Object.keys(m.countryGuides);
  const staticRoutes = [
    '', '/pricing', '/sample-report', '/global-guides', '/blogs',
    '/login', '/signup', '/contact', '/careers', '/privacy', '/terms', '/cookies'
  ];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Static Routes
  staticRoutes.forEach(route => {
    xml += `  <url>\n    <loc>https://carkasa.com${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
  });
  
  // Dynamic Routes
  slugs.forEach(slug => {
    xml += `  <url>\n    <loc>https://carkasa.com/guide/${slug}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
  });
  
  xml += '</urlset>';
  
  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully at public/sitemap.xml');
}

generate();
