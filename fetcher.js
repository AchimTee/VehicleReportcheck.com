const https = require('https');
const fs = require('fs');

function fetchFile(path, filename) {
  const options = {
    hostname: 'www.autocheck.com',
    port: 443,
    path: path,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };

  https.get(options, res => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      fs.writeFileSync(filename, data);
      console.log('Saved', filename);
    });
  }).on('error', err => console.log(err));
}

fetchFile('/vehiclehistory/static/js/main.2a6a98f3.js', 'autocheck_main.js');
fetchFile('/vehiclehistory/static/css/main.d6bb2bfd.css', 'autocheck_main.css');
