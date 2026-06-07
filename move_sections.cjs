const fs = require('fs');
let content = fs.readFileSync('src/pages/SampleReportPage.jsx', 'utf8');

// 1. Resize logo
content = content.replace("width: '40px'", "width: '120px'");

// Extract Sales History
const salesHistoryStart = content.indexOf('                    {/* Sales Listing History */}');
const salesHistoryEnd = content.indexOf('                </div>\n            </div>\n        </div>\n    );\n};');
const salesHistoryContent = content.substring(salesHistoryStart, salesHistoryEnd);

// Extract Tech Specs
const techSpecsStart = content.indexOf('                    {/* Technical Specifications */}');
const techSpecsEnd = content.indexOf('                    {/* Auctions History */}');
const techSpecsContent = content.substring(techSpecsStart, techSpecsEnd);

// Remove Sales History from its current place
content = content.replace(salesHistoryContent, '');

// Remove Tech Specs from its current place
content = content.replace(techSpecsContent, '');

// Insert Sales History after Owner History
const ownerHistoryEndMarker = '                    {/* Accident & Damage Section */}';
content = content.replace(ownerHistoryEndMarker, salesHistoryContent + '\n' + ownerHistoryEndMarker);

// Insert Tech Specs at the bottom (before the closing tags)
const closingTagsMarker = '                </div>\n            </div>\n        </div>\n    );\n};';
content = content.replace(closingTagsMarker, techSpecsContent + '\n' + closingTagsMarker);

fs.writeFileSync('src/pages/SampleReportPage.jsx', content);
console.log('Successfully rearranged sections and resized logo.');
