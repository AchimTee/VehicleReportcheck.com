const fs = require('fs');
let jsx = fs.readFileSync('src/pages/SampleReportPage.jsx', 'utf8');

// 1. Replace glance icon
jsx = jsx.replace(
    `<img src={\`https://www.autocheck.com/reportservice/report/fullReport/img/\${iconSrc}\`} className="glance-icon" alt={titleName} onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-additional-history-issue-found.svg'}} />`,
    `<i className={"fa-solid fa-clipboard-list gradient-text"} style={{ fontSize: '40px', marginRight: '20px' }}></i>`
);

// 2. Replace status icon
jsx = jsx.replace(
    `<img src={\`https://www.autocheck.com/reportservice/report/fullReport/img/\${statusIcon}\`} className="status-icon" alt="Status" />`,
    `<i className={\`fa-solid \${item.status === '0 records' ? 'fa-check-circle' : 'fa-triangle-exclamation'}\`} style={{ color: item.status === '0 records' ? '#28a745' : '#f0ad4e', marginRight: '10px', fontSize: '18px' }}></i>`
);

// 3. Replace section headers
const headers = [
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-vehicle-specification.svg" className="title-icon" alt="Vehicle Specifications" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-cpo-universal.svg'}} />`,
        new: `<i className="fa-solid fa-car title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-vehicle-usage.svg" className="title-icon" alt="Vehicle Usage" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-service-repair-universal.svg'}} />`,
        new: `<i className="fa-solid fa-briefcase title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-owner-history.svg" className="title-icon" alt="Owner History" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/owner-icon-3.svg'}} />`,
        new: `<i className="fa-solid fa-users title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-auction-sales.svg" className="title-icon" alt="Sales Listing & Auction Photos" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-auction-universal.svg'}} />`,
        new: `<i className="fa-solid fa-store title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img className="header-icon" src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-accident-damage.svg" alt="Damage" style={{width: 24, height: 24}} />`,
        new: `<i className="fa-solid fa-car-burst gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img className="header-icon" src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-open-recall-check.svg" alt="Recall" style={{width: 24, height: 24}} />`,
        new: `<i className="fa-solid fa-triangle-exclamation gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-title-brand-check.svg" className="title-icon" alt="Title Checks" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-title-brand-issue-found.svg'}} />`,
        new: `<i className="fa-solid fa-file-contract title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-accident-damage.svg" className="title-icon" alt="Damage & Issue Verification" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-accident-damage-issue-found.svg'}} />`,
        new: `<i className="fa-solid fa-screwdriver-wrench title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-event-verification.svg" className="title-icon" alt="Event Verification" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/calendar.svg'}} />`,
        new: `<i className="fa-solid fa-calendar-check title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-detailed-vehicle-history.svg" className="title-icon" alt="Detailed Vehicle History" />`,
        new: `<i className="fa-solid fa-list-ul title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-odometer-check.svg" className="title-icon" alt="Odometer & Mileage Records" />`,
        new: `<i className="fa-solid fa-gauge-high title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    },
    {
        old: `<img src="https://www.autocheck.com/reportservice/report/fullReport/img/title-icon-auction-sales.svg" className="title-icon" alt="Auction Records" onError={(e)=>{e.target.src='https://www.autocheck.com/reportservice/report/fullReport/img/vhg-auction-universal.svg'}} />`,
        new: `<i className="fa-solid fa-gavel title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i>`
    }
];

headers.forEach(h => {
    jsx = jsx.replace(h.old, h.new);
});

// 4. Recall Banners
jsx = jsx.replace(
    `<img className="recall-banner-icon" src="https://www.autocheck.com/reportservice/report/fullReport/img/icon-more-information.svg" alt="Warning" />`,
    `<i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '36px', color: '#f0ad4e' }}></i>`
);
jsx = jsx.replace(
    `<img className="recall-banner-icon" src="https://www.autocheck.com/reportservice/report/fullReport/img/icon-success-pass.svg" alt="Pass" />`,
    `<i className="fa-solid fa-check-circle" style={{ fontSize: '36px', color: '#28a745' }}></i>`
);

// We need to fix the title-icon class in CSS because we changed img to i, 
// so the class might have width/height that stretches the icon.
// Let's remove className="title-icon" or adjust it inline.
// I added style={{ fontSize: '24px', marginRight: '12px' }} directly above.

fs.writeFileSync('src/pages/SampleReportPage.jsx', jsx);
console.log('JSX updated successfully');
