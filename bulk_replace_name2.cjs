const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', 'dist', 'dev-dist', '.git', '.github'];
const includeExts = ['.js', '.jsx', '.css', '.html', '.json', '.md', '.txt', '.xml'];

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Replace CamelCase variations
    content = content.replace(/CarKasa/g, 'Vehicle Report Check');
    content = content.replace(/carkasa-app/g, 'vehiclereportcheck-app'); // just in case

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
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
      const ext = path.extname(file);
      if (includeExts.includes(ext) || file === 'Dockerfile') {
        replaceInFile(fullPath);
      }
    }
  }
}

traverseDir(__dirname);
