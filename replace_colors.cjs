const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', 'dist', 'dev-dist', '.git', '.github'];

const replacements = {
  // Replace old Blue variables with new Green/Navy in css
  '#0047ab': '#16a34a', // Dark blue to green
  '#3b82f6': '#22c55e', // Blue-500 to Green-500
  '#2563eb': '#16a34a', // Blue-600 to Green-600
  '#1d4ed8': '#15803d', // Blue-700 to Green-700
  '#06b6d4': '#4ade80', // Cyan-500 to Green-400
  '#0891b2': '#22c55e', // Cyan-600 to Green-500
  '#1e293b': '#0f172a', // Old slate to Navy
  '#0f172a': '#0f172a', // Leave alone if already changed
};

function replaceColorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    for (const [oldColor, newColor] of Object.entries(replacements)) {
      // Case-insensitive replace for hex codes
      const regex = new RegExp(oldColor, 'gi');
      content = content.replace(regex, newColor);
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated colors in: ${filePath}`);
    }
  } catch(e) {
    console.error(`Error reading ${filePath}: ${e.message}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        traverseDir(fullPath);
      }
    } else {
      if (file.endsWith('.css') || file.endsWith('.jsx')) {
        replaceColorsInFile(fullPath);
      }
    }
  }
}

traverseDir(__dirname + '/src');
console.log('Color replacement complete.');
