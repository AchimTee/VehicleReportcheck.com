const fs = require('fs');

let jsx = fs.readFileSync('src/pages/SampleReportPage.jsx', 'utf8');

// Remove json import
jsx = jsx.replace(/import sampleReportData from '\.\.\/data\/sampleReportData\.json';\n?/g, '');

// Rename component and accept prop
jsx = jsx.replace(/const SampleReportPage = \(\) => {/g, 'const ReportTemplate = ({ data }) => {\n    if (!data) return <p>No data available</p>;\n');

// Remove local data definition
jsx = jsx.replace(/const data = sampleReportData\.data;\n?/g, '');

// Update CSS import
jsx = jsx.replace(/import '\.\/SampleReportPage\.css';/g, "import './ReportTemplate.css';");

// Update export
jsx = jsx.replace(/export default SampleReportPage;/g, 'export default ReportTemplate;');

// Save as new component
if (!fs.existsSync('src/components')) {
    fs.mkdirSync('src/components');
}
fs.writeFileSync('src/components/ReportTemplate.jsx', jsx);

// Copy CSS
const css = fs.readFileSync('src/pages/SampleReportPage.css', 'utf8');
fs.writeFileSync('src/components/ReportTemplate.css', css);

console.log('Component refactored successfully');
