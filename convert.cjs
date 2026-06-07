const fs = require('fs');
const html = fs.readFileSync('goodcar_dump.html', 'utf8');

// Extract body or a big chunk to see structure
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
    fs.writeFileSync('goodcar_body.html', bodyMatch[1]);
    console.log("Wrote body to goodcar_body.html, length: ", bodyMatch[1].length);
} else {
    console.log("No body found");
}

// Extract styles
const styleMatches = html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi);
let allStyles = "";
for (const match of styleMatches) {
    allStyles += match[1] + "\n";
}

// Extract external stylesheet links
const linkMatches = html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi);
for (const match of linkMatches) {
    console.log("CSS URL: ", match[1]);
}

fs.writeFileSync('goodcar_styles.css', allStyles);
console.log("Wrote styles");
