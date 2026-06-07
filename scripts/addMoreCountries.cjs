const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/data/countryGuidesData.js');

const countriesToAdd = [
  { name: "Italy", code: "IT", currency: "EUR" },
  { name: "Spain", code: "ES", currency: "EUR" },
  { name: "China", code: "CN", currency: "CNY" },
  { name: "South Korea", code: "KR", currency: "KRW" },
  { name: "Russia", code: "RU", currency: "RUB" },
  { name: "Argentina", code: "AR", currency: "ARS" },
  { name: "Turkey", code: "TR", currency: "TRY" },
  { name: "Egypt", code: "EG", currency: "EGP" },
  { name: "Poland", code: "PL", currency: "PLN" },
  { name: "Sweden", code: "SE", currency: "SEK" },
  { name: "Switzerland", code: "CH", currency: "CHF" },
  { name: "Netherlands", code: "NL", currency: "EUR" },
  { name: "Belgium", code: "BE", currency: "EUR" },
  { name: "Vietnam", code: "VN", currency: "VND" },
  { name: "Malaysia", code: "MY", currency: "MYR" },
  { name: "Thailand", code: "TH", currency: "THB" },
  { name: "Indonesia", code: "ID", currency: "IDR" },
  { name: "Philippines", code: "PH", currency: "PHP" },
  { name: "Saudi Arabia", code: "SA", currency: "SAR" },
  { name: "New Zealand", code: "NZ", currency: "NZD" },
  { name: "Ireland", code: "IE", currency: "EUR" },
  { name: "Portugal", code: "PT", currency: "EUR" },
  { name: "Greece", code: "GR", currency: "EUR" },
  { name: "Chile", code: "CL", currency: "CLP" },
  { name: "Colombia", code: "CO", currency: "COP" },
  { name: "Peru", code: "PE", currency: "PEN" },
  { name: "Morocco", code: "MA", currency: "MAD" },
  { name: "Pakistan", code: "PK", currency: "PKR" },
  { name: "Bangladesh", code: "BD", currency: "BDT" },
  { name: "Israel", code: "IL", currency: "ILS" },
  { name: "Norway", code: "NO", currency: "NOK" },
  { name: "Denmark", code: "DK", currency: "DKK" },
  { name: "Finland", code: "FI", currency: "EUR" },
  { name: "Romania", code: "RO", currency: "RON" },
  { name: "Czech Republic", code: "CZ", currency: "CZK" },
  { name: "Hungary", code: "HU", currency: "HUF" },
  { name: "Austria", code: "AT", currency: "EUR" },
  { name: "Singapore", code: "SG", currency: "SGD" },
  { name: "Qatar", code: "QA", currency: "QAR" },
  { name: "Kuwait", code: "KW", currency: "KWD" },
  { name: "Oman", code: "OM", currency: "OMR" },
  { name: "Bahrain", code: "BH", currency: "BHD" },
  { name: "Jordan", code: "JO", currency: "JOD" },
  { name: "Lebanon", code: "LB", currency: "LBP" },
  { name: "Tanzania", code: "TZ", currency: "TZS" },
  { name: "Uganda", code: "UG", currency: "UGX" },
  { name: "Ethiopia", code: "ET", currency: "ETB" },
  { name: "Angola", code: "AO", currency: "AOA" },
  { name: "Senegal", code: "SN", currency: "XOF" },
  { name: "Ivory Coast", code: "CI", currency: "XOF" },
  { name: "Cameroon", code: "CM", currency: "XAF" },
  { name: "Zambia", code: "ZM", currency: "ZMW" },
  { name: "Zimbabwe", code: "ZW", currency: "ZWL" },
  { name: "Botswana", code: "BW", currency: "BWP" },
  { name: "Namibia", code: "NA", currency: "NAD" },
  { name: "Mozambique", code: "MZ", currency: "MZN" },
  { name: "Madagascar", code: "MG", currency: "MGA" },
  { name: "Sri Lanka", code: "LK", currency: "LKR" },
  { name: "Nepal", code: "NP", currency: "NPR" },
  { name: "Myanmar", code: "MM", currency: "MMK" },
  { name: "Cambodia", code: "KH", currency: "KHR" },
  { name: "Laos", code: "LA", currency: "LAK" },
  { name: "Mongolia", code: "MN", currency: "MNT" },
  { name: "Uzbekistan", code: "UZ", currency: "UZS" },
  { name: "Kazakhstan", code: "KZ", currency: "KZT" },
  { name: "Ukraine", code: "UA", currency: "UAH" },
  { name: "Belarus", code: "BY", currency: "BYN" },
  { name: "Serbia", code: "RS", currency: "RSD" },
  { name: "Bulgaria", code: "BG", currency: "BGN" },
  { name: "Croatia", code: "HR", currency: "HRK" },
  { name: "Slovakia", code: "SK", currency: "EUR" },
  { name: "Slovenia", code: "SI", currency: "EUR" },
  { name: "Lithuania", code: "LT", currency: "EUR" },
  { name: "Latvia", code: "LV", currency: "EUR" },
  { name: "Estonia", code: "EE", currency: "EUR" },
  { name: "Iceland", code: "IS", currency: "ISK" },
  { name: "Cyprus", code: "CY", currency: "EUR" },
  { name: "Malta", code: "MT", currency: "EUR" },
  { name: "Jamaica", code: "JM", currency: "JMD" },
  { name: "Trinidad and Tobago", code: "TT", currency: "TTD" },
  { name: "Bahamas", code: "BS", currency: "BSD" },
  { name: "Barbados", code: "BB", currency: "BBD" },
  { name: "Uruguay", code: "UY", currency: "UYU" },
  { name: "Paraguay", code: "PY", currency: "PYG" },
  { name: "Bolivia", code: "BO", currency: "BOB" },
  { name: "Ecuador", code: "EC", currency: "USD" },
  { name: "Venezuela", code: "VE", currency: "VES" },
  { name: "Costa Rica", code: "CR", currency: "CRC" },
  { name: "Panama", code: "PA", currency: "USD" },
  { name: "Guatemala", code: "GT", currency: "GTQ" },
  { name: "Honduras", code: "HN", currency: "HNL" },
  { name: "El Salvador", code: "SV", currency: "USD" },
  { name: "Nicaragua", code: "NI", currency: "NIO" },
  { name: "Dominican Republic", code: "DO", currency: "DOP" },
  { name: "Cuba", code: "CU", currency: "CUP" },
  { name: "Haiti", code: "HT", currency: "HTG" }
];

let fileContent = fs.readFileSync(targetPath, 'utf8');
const closingBraceIndex = fileContent.lastIndexOf('};');

if (closingBraceIndex === -1) {
    console.error("Could not find the end of the countryGuides object.");
    process.exit(1);
}

let newContent = "";

countriesToAdd.forEach(country => {
    const slug = country.name.toLowerCase().replace(/\s+/g, '-');
    
    // Check if it already exists
    if (fileContent.includes(`"${slug}":`)) return;

    const template = `
    "${slug}": {
        name: "${country.name}",
        code: "${country.code}",
        currency: "${country.currency}",
        intro: "Navigating the used car market in ${country.name} can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: \`### 1. Research and Market Overview
Before making a purchase in ${country.name}, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ${country.currency} and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect ${country.name}. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Carkasa. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in ${country.name}, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to ${country.name}
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.\`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in ${country.name}." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },`;
    
    newContent += template;
});

// Insert new content right before the final };
const finalFileContent = fileContent.slice(0, closingBraceIndex) + "," + newContent + "\n};\n";

fs.writeFileSync(targetPath, finalFileContent);
console.log(`Successfully added ${countriesToAdd.length} new countries to the database!`);
