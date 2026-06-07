const fs = require('fs');

let css = fs.readFileSync('src/pages/SampleReportPage.css', 'utf8');

// Global Font
css = css.replace("font-family: 'Arial', sans-serif;", "font-family: 'Inter', system-ui, sans-serif;");

// Backgrounds to Gradients
css = css.replace("background-color: #0056b3;", "background: linear-gradient(135deg, #0056b3 0%, #891b7d 100%);"); // .report-section-title
css = css.replace("background-color: #891b7d;", "background: linear-gradient(135deg, #0056b3 0%, #891b7d 100%);"); // .glance-header
css = css.replace("background-color: #0074c8;", "background: linear-gradient(135deg, #0056b3 0%, #891b7d 100%);"); // .ac-blue-header

// Header font sizes and paddings
css = css.replace("padding: 12px 20px;\n    font-size: 18px;", "padding: 10px 15px;\n    font-size: 15px;"); // .report-section-title
css = css.replace("padding: 12px;\n    font-size: 18px;", "padding: 10px;\n    font-size: 15px;"); // .glance-header
css = css.replace("padding: 10px 20px;\n    display: flex;", "padding: 8px 15px;\n    display: flex;"); // .ac-blue-header
css = css.replace("padding: 10px 15px;\n    border-top: 2px solid #ccc;\n    font-size: 16px;", "padding: 8px 12px;\n    border-top: 2px solid #ccc;\n    font-size: 14px;"); // .vi-header

// Tables spacing and fonts
// .vehicle-info-table td
css = css.replace("padding: 8px 20px;\n    border-top: 1px solid #e0e0e0;\n    font-size: 12px;", "padding: 6px 15px;\n    border-top: 1px solid #e0e0e0;\n    font-size: 11px;");
// .report-table th
css = css.replace("padding: 12px 20px;\n    border-bottom: 2px solid #d1d9e0;\n    font-size: 12px;", "padding: 8px 15px;\n    border-bottom: 2px solid #d1d9e0;\n    font-size: 11px;");
// .report-table td
css = css.replace("padding: 12px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    font-size: 13px;", "padding: 8px 15px;\n    border-bottom: 1px solid #e0e0e0;\n    font-size: 12px;");
// .ac-light-table th
css = css.replace("padding: 10px 15px;\n    font-size: 14px;", "padding: 8px 12px;\n    font-size: 12px;");
// .ac-light-table td
css = css.replace("padding: 12px 15px;\n    font-size: 13px;", "padding: 8px 12px;\n    font-size: 12px;");
// .recall-table th
css = css.replace("padding: 15px 20px;\n    font-size: 14px;", "padding: 10px 15px;\n    font-size: 12px;");
// .recall-table td
css = css.replace("padding: 15px 20px;\n    font-size: 13px;", "padding: 10px 15px;\n    font-size: 12px;");
// .check-item
css = css.replace("padding: 15px 20px;\n    border-bottom", "padding: 10px 15px;\n    border-bottom");
// .glance-grid
css = css.replace("gap: 15px;\n    padding: 20px;", "gap: 10px;\n    padding: 15px;");
// .glance-card-body
css = css.replace("padding: 15px 20px;\n    align-items: center;\n    min-height: 85px;", "padding: 10px 15px;\n    align-items: center;\n    min-height: 70px;");
// .box-header h2
css = css.replace("font-size: 24px;", "font-size: 20px;");
// .section-title
css = css.replace("font-size: 22px;", "font-size: 18px;");

// Box and Section margins
css = css.replace(/margin-bottom: 20px;/g, "margin-bottom: 15px;");

// Gradient Class
const gradientClass = `
.gradient-text {
    background: linear-gradient(135deg, #0056b3 0%, #891b7d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}
`;
if (!css.includes('.gradient-text')) {
    css += gradientClass;
}

fs.writeFileSync('src/pages/SampleReportPage.css', css);
console.log('CSS updated successfully');
