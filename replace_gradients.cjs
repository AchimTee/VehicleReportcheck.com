const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', 'dist', 'dev-dist', '.git', '.github'];

const gradientRegexes = [
  /linear-gradient\(135deg,\s*#003478,\s*#891b7d\)/gi,
  /linear-gradient\(135deg,\s*#0056b3\s*0%,\s*#891b7d\s*100%\)/gi,
  /linear-gradient\(135deg,\s*#003478\s*0%,\s*#1e3a8a\s*100%\)/gi,
  /linear-gradient\(135deg,\s*#003478\s*0%,\s*#891b7d\s*100%\)/gi,
  /linear-gradient\(90deg,\s*#007FFF,\s*#00C6FF\)/gi
];

function replaceGradientsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    for (const regex of gradientRegexes) {
      content = content.replace(regex, 'var(--gradient-primary)');
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated gradients in: ${filePath}`);
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
      if (file.endsWith('.css') || file.endsWith('.jsx') || file.endsWith('.js')) {
        replaceGradientsInFile(fullPath);
      }
    }
  }
}

traverseDir(__dirname + '/src');
console.log('Gradient replacement complete.');
