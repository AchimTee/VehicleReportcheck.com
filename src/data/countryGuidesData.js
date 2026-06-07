export const countryGuides = {
    "united-states": {
        name: "United States",
        code: "US",
        currency: "USD",
        intro: "The United States is the second-largest vehicle market in the world, heavily skewed towards used cars. Buying a used car in the US requires navigating dealership networks, private sellers, and a myriad of financing options.",
        howToBuy: `
### 1. Research and Set a Budget
The first step is determining your budget. Don't forget to factor in state sales tax, registration fees, and car insurance, which vary wildly from state to state (e.g., California vs. Texas).

### 2. Dealership vs. Private Seller
- **Dealerships**: Offer warranties (CPO - Certified Pre-Owned), easier financing, and handle DMV paperwork. However, they are generally more expensive.
- **Private Sellers**: Found on Craigslist or Facebook Marketplace. You can negotiate better deals but there is a higher risk of fraud and you must handle DMV paperwork yourself.

### 3. Run a VIN Check (Crucial in the US)
Before ever test driving, run a VIN Check. In the US, "Title Washing" (moving a flooded or salvaged car to a state with lax title laws) is a massive issue. Vehicle Report Check checks the National Motor Vehicle Title Information System (NMVTIS) to ensure the title is clean.

### 4. Pre-Purchase Inspection (PPI)
Never buy a used car without an independent mechanic looking at it. A standard PPI in the US costs $100-$200 but saves thousands in hidden repairs.

### 5. Finalize the Sale
Sign the title, get a Bill of Sale, and take it to your local Department of Motor Vehicles (DMV) to register it and pay taxes.
        `,
        platforms: [
            { name: "Cars.com", url: "https://cars.com", desc: "One of the largest databases of dealer and private used car listings." },
            { name: "CarGurus", url: "https://cargurus.com", desc: "Excellent for price analysis, showing you if a car is a 'Great Deal' or 'Overpriced'." },
            { name: "Facebook Marketplace", url: "https://facebook.com/marketplace", desc: "The go-to modern platform for private-party sales." },
            { name: "Carvana", url: "https://carvana.com", desc: "A fully online dealership that delivers the car to your door." }
        ]
    },
    "united-kingdom": {
        name: "United Kingdom",
        code: "GB",
        currency: "GBP",
        intro: "The UK has a massive, highly regulated used car market. Because the UK is an island and cars are Right-Hand Drive (RHD), the market is largely insulated from mainland Europe.",
        howToBuy: `
### 1. The MOT Test
Every car over 3 years old in the UK must pass an annual MOT test to check road safety and environmental standards. Never buy a car without checking its MOT history online (which is public).

### 2. Dealerships vs. Private Sales
- **Franchised Dealers**: Best for 'Approved Used' cars with warranties.
- **Independent Dealers**: Cheaper, but research their reputation on Trustpilot.
- **Private Sales**: Often found on AutoTrader or eBay. You have fewer legal protections (Consumer Rights Act 2015 doesn't fully apply).

### 3. HPI/VIN Check
In the UK, an "HPI Check" or VIN Check is vital to ensure the car has no outstanding finance. If you buy a car with outstanding finance, the finance company legally owns it and can repossess it from you!

### 4. Logbook (V5C)
Ensure the seller has the V5C logbook in their name. You will fill out the 'new keeper' slip and the seller must notify the DVLA. 

### 5. Tax and Insurance
You cannot legally drive the car home without Tax (Vehicle Excise Duty) and Insurance. Both must be arranged before you turn the key.
        `,
        platforms: [
            { name: "AutoTrader UK", url: "https://autotrader.co.uk", desc: "The undisputed king of UK car classifieds." },
            { name: "Motors.co.uk", url: "https://motors.co.uk", desc: "A strong alternative with a great search interface." },
            { name: "Cinch", url: "https://cinch.co.uk", desc: "The UK's largest online-only used car retailer." },
            { name: "eBay Motors", url: "https://ebay.co.uk/motors", desc: "Popular for cheap runarounds and classic cars." }
        ]
    },
    "canada": {
        name: "Canada",
        code: "CA",
        currency: "CAD",
        intro: "Canada's used car market is robust but heavily influenced by harsh winters, making vehicle history reports and rust inspections absolutely critical.",
        howToBuy: `
### 1. The Rust Factor
Canadian winters involve heavily salted roads. When buying a used car, a physical inspection underneath the chassis for structural rust is non-negotiable. 

### 2. Provincial Regulations
Every province has different rules. For example, Ontario requires a 'Safety Standards Certificate' and a 'Used Vehicle Information Package' (UVIP) for private sales. 

### 3. VIN Check & CarProof
A full VIN check is required to ensure the car wasn't written off in another province and brought over. Checking for out-of-province registrations is key.

### 4. Private vs Dealership
Dealerships must register with provincial regulators (like OMVIC in Ontario), offering you legal protection. Private sellers (Curbsiders) posing as individuals but acting as unregistered dealers are a major scam to watch out for.

### 5. Taxes
If buying privately, you'll still pay sales tax (HST/PST) at the ServiceOntario or equivalent registry office when you transfer the ownership.
        `,
        platforms: [
            { name: "AutoTrader.ca", url: "https://autotrader.ca", desc: "The largest automotive marketplace in Canada." },
            { name: "Kijiji Autos", url: "https://kijijiautos.ca", desc: "Extremely popular for private sales and local classifieds." },
            { name: "Canada Drives", url: "https://canadadrives.ca", desc: "A popular platform for online buying and financing." }
        ]
    },
    "australia": {
        name: "Australia",
        code: "AU",
        currency: "AUD",
        intro: "Australia's sheer size makes reliable transport essential. The used car market is massive, heavily skewed towards reliable Japanese imports and rugged 4x4s.",
        howToBuy: `
### 1. The PPSR Check (Crucial)
In Australia, the Personal Property Securities Register (PPSR) check is the equivalent of a deep VIN check. It tells you if the car is stolen, written off, or has outstanding finance. Never buy a car without it.

### 2. Roadworthy Certificate (RWC)
In states like Victoria and Queensland, the seller must provide a Roadworthy Certificate before the car can be transferred. In NSW, it's called an eSafety Check (Pink Slip).

### 3. State Registrations (Rego)
Cars are registered by state. Buying a car registered interstate means you have to surrender the old plates, get an inspection, and pay for new registration in your state, which adds significant cost.

### 4. Dealerships vs Private
Licensed Motor Car Traders (LMCT) must offer a statutory warranty on vehicles under 10 years old and under 160,000km. Private sales are "buyer beware."

### 5. Stamp Duty
When you transfer the registration into your name, you must pay Stamp Duty to the state government, calculated based on the purchase price.
        `,
        platforms: [
            { name: "Carsales.com.au", url: "https://carsales.com.au", desc: "The dominant market leader in Australia." },
            { name: "CarsGuide", url: "https://carsguide.com.au", desc: "Excellent editorial reviews and a large classifieds section." },
            { name: "Gumtree", url: "https://gumtree.com.au", desc: "The ultimate platform for cheap, private car sales." }
        ]
    },
    "germany": {
        name: "Germany",
        code: "DE",
        currency: "EUR",
        intro: "As the home of BMW, Mercedes, Audi, and Volkswagen, Germany has arguably the highest-quality used car market in Europe, exporting heavily to surrounding countries.",
        howToBuy: `
### 1. The TÜV (Hauptuntersuchung)
Every car in Germany must pass a rigorous safety and emissions inspection called the TÜV (or HU/AU) every two years. A car with "TÜV neu" (new TÜV) is highly desirable and signifies it is roadworthy.

### 2. Dealerships vs. Private (Privat)
When buying from a commercial dealer (Händler), you automatically get a 1-year statutory warranty (Gewährleistung). Private sales explicitly exclude this via the clause "gekauft wie gesehen" (bought as seen).

### 3. The Paperwork
You need the Zulassungsbescheinigung Teil I (Fahrzeugschein - small green booklet) and Teil II (Fahrzeugbrief - large green paper). Whoever holds Teil II legally owns the car.

### 4. Exporting
Because German cars are well-maintained, many buyers come from Eastern Europe or Africa. You will need special Export Plates (Ausfuhrkennzeichen) if driving it out of the EU.

### 5. Scheckheftgepflegt
Look for this word in listings! It means the car has a fully stamped, verifiable dealer service history book, which is highly prized in Germany.
        `,
        platforms: [
            { name: "Mobile.de", url: "https://mobile.de", desc: "The largest vehicle marketplace in Germany and Europe." },
            { name: "AutoScout24", url: "https://autoscout24.de", desc: "A massive pan-European platform heavily utilized in Germany." },
            { name: "eBay Kleinanzeigen", url: "https://kleinanzeigen.de", desc: "The go-to for localized, private used car sales." }
        ]
    },
    "united-arab-emirates": {
        name: "United Arab Emirates",
        code: "AE",
        currency: "AED",
        intro: "The UAE (especially Dubai) is famous for its luxury car market. High depreciation rates mean you can find incredible deals on slightly used luxury vehicles.",
        howToBuy: `
### 1. GCC Specs vs. Imported
Always look for "GCC Specs" (Gulf Cooperation Council). These cars have upgraded air conditioning and radiators to handle the extreme 50°C heat. Imported cars (especially from the US) are cheaper but often have salvaged titles and struggle in the heat.

### 2. RTA Inspection
Before ownership can be transferred, the car must pass a mandatory testing center inspection run by the RTA (Roads and Transport Authority) or Tasjeel. This checks emissions, brakes, and chassis integrity.

### 3. Clear Fines
In the UAE, traffic fines are tied to the vehicle, not just the driver. The seller must clear all fines before the RTA will allow the transfer.

### 4. VIN Checking
Because many US salvage cars are exported to Dubai, running a US/Global VIN check is absolutely critical to avoid buying a flood-damaged imported car.

### 5. Transferring Ownership
Both buyer and seller must be present at the RTA office. You'll need your Emirates ID, passport, driving license, and a new insurance policy in your name to complete the transfer.
        `,
        platforms: [
            { name: "Dubizzle", url: "https://dubizzle.com", desc: "The absolute dominant classifieds site in the UAE for cars." },
            { name: "YallaMotor", url: "https://yallamotor.com", desc: "Great for reviews, prices, and finding dealer listings." },
            { name: "Cars24 UAE", url: "https://cars24.com/ae", desc: "Growing platform for buying inspected cars entirely online." }
        ]
    },
    "nigeria": {
        name: "Nigeria",
        code: "NG",
        currency: "NGN",
        intro: "Nigeria has a booming used car market, heavily reliant on imported used vehicles (Tokunbo) from the USA, Canada, and Europe.",
        howToBuy: `
### 1. Tokunbo vs. Nigerian Used
- **Tokunbo**: Foreign-used cars imported into Nigeria. They are more expensive but generally in much better condition due to better roads and maintenance abroad.
- **Nigerian Used**: Cars that have been driven in Nigeria. They are cheaper but require intense inspection of the suspension and engine.

### 2. Customs Duty Papers (Extremely Important)
For Tokunbo cars, you MUST verify the customs duty papers. If the importer smuggled the car or underpaid duties, Nigerian Customs can seize the vehicle from you years later. Verify the papers via the Customs portal.

### 3. The VIN Check (Life Saver)
Since over 70% of Tokunbo cars come from North American auctions (often as salvage, accident, or flood cars), running a Vehicle Report Check VIN check is mandatory. Sellers will fix severe damage locally and sell it as 'clean'. The VIN check shows you the true auction photos.

### 4. Physical Inspection
Bring a trusted "Rewire" (electrician) and Mechanic. Use an OBD2 scanner. Mileage rollbacks are rampant; do not trust the odometer, trust the physical wear and the VIN report.

### 5. Police CMR & Registration
After purchase, you must register the vehicle with the FRSC (Federal Road Safety Corps) and get a Police CMR (Central Motor Registry) certificate to prove the car is not stolen.
        `,
        platforms: [
            { name: "Cars45", url: "https://cars45.com", desc: "Nigeria's premier verified used car buying and selling platform." },
            { name: "Jiji Nigeria", url: "https://jiji.ng", desc: "The largest classifieds board for private sellers." },
            { name: "Carmart Nigeria", url: "https://carmart.ng", desc: "A growing dedicated automotive marketplace." },
            { name: "Cheki", url: "https://cheki.com.ng", desc: "A well-established portal for dealer inventory." }
        ]
    },
    "ghana": {
        name: "Ghana",
        code: "GH",
        currency: "GHS",
        intro: "Ghana's automotive market is dominated by imported used vehicles (Home Used) and locally driven ones. Reliability is prized above all.",
        howToBuy: `
### 1. Home Used vs. Local Used
- **Home Used**: Cars imported directly from the US, Canada, Korea, or Europe. They are highly sought after.
- **Local Used**: Cars driven on Ghanaian roads. Be wary of suspension wear and tear.

### 2. Verifying Customs Duty
Ensure the vehicle has been properly cleared through the Tema or Takoradi ports. Ask for the Customs Declaration documents. Uncustomed vehicles will be impounded by the GRA (Ghana Revenue Authority).

### 3. VIN Checks (Crucial for Home Used)
Most 'Home Used' cars are bought from salvage auctions (Copart, IAAI) abroad. A VIN check is critical to see the auction photos and ensure the car wasn't structurally compromised or flooded.

### 4. DVLA Registration
To transfer ownership, both parties must engage the Driver and Vehicle Licensing Authority (DVLA). Ensure the seller's name matches the logbook. Use the DVLA shortcode to verify the number plate.

### 5. Mechanic Inspection
Always use a trusted mechanic to check the transmission and engine. Many modern cars suffer locally due to improper oil usage or mechanics deleting warning lights.
        `,
        platforms: [
            { name: "Tonaton", url: "https://tonaton.com", desc: "One of the most popular general classifieds for cars in Ghana." },
            { name: "Jiji Ghana", url: "https://jiji.com.gh", desc: "A massive marketplace for private car listings." },
            { name: "Cheki Ghana", url: "https://cheki.com.gh", desc: "Dedicated car portal connecting buyers to dealers." },
            { name: "Autochek Africa", url: "https://autochek.africa/gh", desc: "Offers verified cars with financing options." }
        ]
    },
    "south-africa": {
        name: "South Africa",
        code: "ZA",
        currency: "ZAR",
        intro: "South Africa has a massive, highly structured used car market. Because imports of second-hand cars are largely banned to protect local manufacturing, the market consists of locally driven vehicles.",
        howToBuy: `
### 1. The Ban on Grey Imports
You cannot legally import and register a used car from Japan or the UK for personal use in South Africa. Therefore, you are buying a car that was originally sold new in SA.

### 2. Roadworthy Certificate (COR)
To register a car in your name, it must have a valid Certificate of Roadworthiness. Usually, the seller provides this, but if you buy "voetstoots" (as-is), you must pay for the test yourself at a testing station.

### 3. Dealerships vs Private
Buying from a dealership offers protection under the Consumer Protection Act (CPA). Private sales do not, meaning if the engine blows up the next day, you have very little legal recourse.

### 4. Outstanding Finance & Police Clearance
A deep VIN/HPI check is essential. If the previous owner owes the bank money, the bank owns the car. Furthermore, ensure the Engine Number and VIN match the NATIS document exactly to avoid stolen cars.

### 5. NATIS Document (Logbook)
The seller must provide the original RC1 NATIS document and a signed yellow Notice of Change of Ownership (NCO) form to take to the Traffic Department.
        `,
        platforms: [
            { name: "AutoTrader SA", url: "https://autotrader.co.za", desc: "The definitive marketplace for cars in South Africa." },
            { name: "Cars.co.za", url: "https://cars.co.za", desc: "Excellent platform with highly trusted dealer networks." },
            { name: "WeBuyCars", url: "https://webuycars.co.za", desc: "Massive warehouses where you can buy cars directly." }
        ]
    },
    "japan": {
        name: "Japan",
        code: "JP",
        currency: "JPY",
        intro: "Japan has one of the most unique car markets in the world. Due to strict inspections (Shaken), cars depreciate rapidly, leading to incredibly high-quality, low-mileage used cars.",
        howToBuy: `
### 1. The Shaken (Vehicle Inspection)
The 'Shaken' is a rigorous, expensive inspection required every 2 years. Because it costs so much, many Japanese citizens sell their cars rather than put them through Shaken. Buying a car with 'Shaken remaining' saves you a lot of money.

### 2. Parking Space Certificate (Shako-shomei-sho)
Before you can even buy a car in Japan, you must prove to the local police that you have a registered, dedicated parking space. You cannot register the car without this certificate.

### 3. Dealerships vs Auctions
Most foreigners and locals buy from dealerships (Gulliver, Big Motor). However, millions of cars flow through massive auction houses (USS), which are generally strictly for registered exporters and dealers.

### 4. Low Mileage but City Driven
A 10-year-old car in Japan might only have 40,000km on it. However, this is largely stop-and-go city traffic. Check the transmission and oil carefully.

### 5. Inkan/Hanko (Personal Seal)
To sign the registration documents at the Land Transport Office, you will need your registered personal stamp (Inkan) and a certificate proving its authenticity from the city hall.
        `,
        platforms: [
            { name: "Goo-net", url: "https://goo-net.com", desc: "The largest domestic portal for buying used cars in Japan." },
            { name: "Carsensor", url: "https://carsensor.net", desc: "A massive database of dealer listings with detailed grading." },
            { name: "Gulliver", url: "https://221616.com", desc: "Japan's largest chain of used car dealerships." }
        ]
    },
    "kenya": {
        name: "Kenya",
        code: "KE",
        currency: "KES",
        intro: "Kenya is the hub of the East African automotive market, relying heavily on high-quality imported right-hand drive vehicles primarily from Japan.",
        howToBuy: `
### 1. The 8-Year Rule
Kenya strictly prohibits the importation of vehicles older than 8 years from the year of manufacture. If you are importing, ensure the manufacturing month/year is within this limit, or the car will be destroyed/exported at your cost.

### 2. QISJ Inspection
All vehicles imported from Japan must pass a rigorous roadworthiness inspection by QISJ (Quality Inspection Services Japan) before they leave the origin country.

### 3. Ex-Japan vs Locally Used
- **Ex-Japan**: Fresh imports. High quality, low mileage, but expensive due to KRA (Kenya Revenue Authority) taxes.
- **Locally Used**: Cheaper, but Kenyan roads are tough on suspensions. Thorough mechanical inspection is vital.

### 4. Logbook Verification
Car ownership is tracked digitally via the NTSA (National Transport and Safety Authority) TIMS portal. Do not pay for a car until you verify the chassis number on TIMS and initiate a transfer online.

### 5. VIN Checks & Mileage
For Ex-Japan cars, get the auction sheet (using a Japanese VIN checker) to verify the auction grade and ensure the mileage wasn't tampered with in Mombasa.
        `,
        platforms: [
            { name: "SBT Kenya", url: "https://sbtjapan.com/kenya", desc: "Massive importer allowing you to buy stock already in Mombasa or Nairobi." },
            { name: "Cheki Kenya (Autochek)", url: "https://autochek.africa/ke", desc: "The premier local marketplace for verified vehicles." },
            { name: "Jiji Kenya", url: "https://jiji.co.ke", desc: "The most popular general classifieds for local private sales." }
        ]
    },
    "india": {
        name: "India",
        code: "IN",
        currency: "INR",
        intro: "India's used car market is growing exponentially, shifting from unorganized local mechanics to highly structured, venture-backed digital platforms.",
        howToBuy: `
### 1. The RC Book (Registration Certificate)
The RC is the most important document. Ensure the seller is the 'First Owner' on the RC. A car with multiple previous owners drops significantly in value. Also check if the RC lists 'Hypothecation' (meaning a bank loan is unpaid).

### 2. NOC from the RTO
If you buy a car registered in a different state (e.g., buying an MH plate in DL), you need a No Objection Certificate (NOC) from the original Regional Transport Office (RTO) to re-register it. This is a massive headache—buy locally if possible.

### 3. CNG vs Petrol vs Diesel
Diesel cars older than 10 years and petrol cars older than 15 years are banned in Delhi-NCR. Many buyers opt for factory-fitted CNG cars for fuel economy.

### 4. Dealerships vs C2B2C Platforms
Buying private is risky. Platforms like Spinny or Cars24 buy cars, refurbish them, and sell them with a warranty, removing the risk of buying a lemon.

### 5. Insurance Transfer
Ensure the comprehensive insurance policy is transferred to your name. If the car is in a crash and the policy is still in the old owner's name, the claim will be rejected.
        `,
        platforms: [
            { name: "Spinny", url: "https://spinny.com", desc: "Premium online platform offering fully inspected cars with warranties." },
            { name: "Cars24", url: "https://cars24.com", desc: "Massive inventory of refurbished used cars delivered to your door." },
            { name: "CarWale", url: "https://carwale.com", desc: "The best place to research pricing, reviews, and dealer listings." },
            { name: "OLX Autos", url: "https://olx.in", desc: "The standard for localized private-party sales." }
        ]
    },
    "mexico": {
        name: "Mexico",
        code: "MX",
        currency: "MXN",
        intro: "Mexico has a massive domestic used car market, significantly supplemented by 'Autos Chocolate'—used cars driven across the border from the United States.",
        howToBuy: `
### 1. Factura Original (Original Invoice)
In Mexico, the title of the car is proven by the "Factura Original" from the dealership when the car was first sold. The seller signs the back of it to transfer ownership. Never buy a car without the original Factura.

### 2. Tarjeta de Circulación and Tenencia
Ensure the seller provides the Tarjeta de Circulación (Registration Card) and proof that the 'Tenencia' (annual vehicle tax) has been paid for the last 5 years. Unpaid taxes transfer to the new buyer.

### 3. REPUVE Check
You MUST check the VIN on the REPUVE (Registro Público Vehicular) government portal. This is a free database that tells you instantly if the car has been reported stolen in Mexico.

### 4. Autos Chocolate (American Imports)
Millions of American cars exist in Mexico. A recent government decree allows for the legalization of these vehicles, but you MUST run a US VIN Check. Many of these cars are salvage, flooded, or stolen in the US.

### 5. Safe Transactions
Due to security concerns, never carry large amounts of cash to buy a car. Do the transaction inside a bank, via wire transfer (SPEI), and inspect the car in a safe, public plaza.
        `,
        platforms: [
            { name: "Kavak", url: "https://kavak.com/mx", desc: "Mexico's first tech unicorn, offering refurbished cars with warranties and financing." },
            { name: "Mercado Libre Autos", url: "https://vehiculos.mercadolibre.com.mx", desc: "The largest classifieds platform for private and dealer sales." },
            { name: "SoloAutos", url: "https://soloautos.mx", desc: "A great portal for dealership inventory across the country." }
        ]
    },
    "brazil": {
        name: "Brazil",
        code: "BR",
        currency: "BRL",
        intro: "Brazil's used car market is the largest in Latin America. Due to high taxes on new cars, the used market is incredibly active, heavily favoring 'Flex-Fuel' vehicles.",
        howToBuy: `
### 1. Flex-Fuel Dominance
Over 80% of cars in Brazil are 'Flex'. They run on either Petrol (Gasolina) or Ethanol (Álcool). When buying, check the engine health as poor quality fuel can degrade injectors over time.

### 2. CRV and CRLV
You will deal with the CRV (Certificado de Registro de Veículo) which is the ownership document, and the CRLV (Certificado de Registro e Licenciamento de Veículo) which is the annual licensing. The seller must sign the CRV and have it notarized (Reconhecimento de Firma) at a Cartório.

### 3. Check for Multas (Fines) and IPVA
Before buying, check the Detran (Department of Transit) website of your state using the Renavam number and License Plate. Ensure all traffic fines (Multas) and the annual tax (IPVA) are fully paid.

### 4. Laudo Cautelar
Never buy a car without a 'Laudo Cautelar' (Precautionary Report) from an accredited company like Dekra or SuperVisão. They check the chassis structure, paint originality, engine numbers, and theft history.

### 5. Transfer Timeline
Once the CRV is signed and notarized, you have exactly 30 days to transfer the car to your name at the Detran, or you will face a fine and points on your license.
        `,
        platforms: [
            { name: "Webmotors", url: "https://webmotors.com.br", desc: "The undisputed giant of car listings in Brazil." },
            { name: "Kavak Brazil", url: "https://kavak.com/br", desc: "Growing rapidly, offering inspected cars, warranties, and easy financing." },
            { name: "OLX Brasil", url: "https://olx.com.br", desc: "Extremely popular for direct private-to-private negotiations." }
        ]
    },
    "france": {
        name: "France",
        code: "FR",
        currency: "EUR",
        intro: "The French used car market favors domestic brands like Peugeot, Renault, and Citroën, and is heavily shifting towards low-emission vehicles due to stringent city regulations.",
        howToBuy: `
### 1. The Contrôle Technique (CT)
For any car over 4 years old, the seller MUST provide a 'Contrôle Technique' certificate dated within the last 6 months. Without this, you cannot register the car. If it failed with 'major defects', do not buy it unless you plan to fix it immediately.

### 2. Certificat de Non-Gage
The seller must provide a 'Certificat de Situation Administrative' (Non-Gage). This proves the car isn't stolen, hasn't been written off, and has no outstanding fines or finance blocking the sale.

### 3. Crit'Air Sticker
France uses emissions stickers (Crit'Air 1 through 5). Paris and other major cities have ZFE zones (Low Emission Zones) that ban older diesel and petrol cars. Check the Crit'Air rating before buying, or you won't be allowed to drive in the city!

### 4. Certificat de Cession
Both buyer and seller must fill out and sign the official 'Certificat de Cession' (Cerfa 15776*02). The seller registers the sale online, providing a transfer code you will use to get your new registration.

### 5. Carte Grise (Registration)
The seller crosses out the old 'Carte Grise', writes "Vendu le [Date and Time]", and signs it. You then have 1 month to apply for the new Carte Grise online via the ANTS portal.
        `,
        platforms: [
            { name: "LeBonCoin", url: "https://leboncoin.fr", desc: "The absolute go-to classifieds site in France for private car sales." },
            { name: "La Centrale", url: "https://lacentrale.fr", desc: "The premier platform for verified dealership listings and price guides." },
            { name: "Aramisauto", url: "https://aramisauto.com", desc: "A major online retailer offering reconditioned cars with strong guarantees." }
        ]
    }
,
    "italy": {
        name: "Italy",
        code: "IT",
        currency: "EUR",
        intro: "Navigating the used car market in Italy can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Italy, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Italy. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Italy, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Italy
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Italy." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "spain": {
        name: "Spain",
        code: "ES",
        currency: "EUR",
        intro: "Navigating the used car market in Spain can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Spain, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Spain. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Spain, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Spain
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Spain." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "china": {
        name: "China",
        code: "CN",
        currency: "CNY",
        intro: "Navigating the used car market in China can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in China, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CNY and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect China. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in China, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to China
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in China." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "south-korea": {
        name: "South Korea",
        code: "KR",
        currency: "KRW",
        intro: "Navigating the used car market in South Korea can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in South Korea, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in KRW and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect South Korea. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in South Korea, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to South Korea
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in South Korea." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "russia": {
        name: "Russia",
        code: "RU",
        currency: "RUB",
        intro: "Navigating the used car market in Russia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Russia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in RUB and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Russia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Russia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Russia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Russia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "argentina": {
        name: "Argentina",
        code: "AR",
        currency: "ARS",
        intro: "Navigating the used car market in Argentina can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Argentina, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ARS and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Argentina. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Argentina, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Argentina
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Argentina." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "turkey": {
        name: "Turkey",
        code: "TR",
        currency: "TRY",
        intro: "Navigating the used car market in Turkey can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Turkey, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in TRY and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Turkey. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Turkey, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Turkey
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Turkey." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "egypt": {
        name: "Egypt",
        code: "EG",
        currency: "EGP",
        intro: "Navigating the used car market in Egypt can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Egypt, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EGP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Egypt. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Egypt, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Egypt
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Egypt." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "poland": {
        name: "Poland",
        code: "PL",
        currency: "PLN",
        intro: "Navigating the used car market in Poland can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Poland, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in PLN and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Poland. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Poland, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Poland
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Poland." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "sweden": {
        name: "Sweden",
        code: "SE",
        currency: "SEK",
        intro: "Navigating the used car market in Sweden can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Sweden, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in SEK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Sweden. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Sweden, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Sweden
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Sweden." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "switzerland": {
        name: "Switzerland",
        code: "CH",
        currency: "CHF",
        intro: "Navigating the used car market in Switzerland can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Switzerland, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CHF and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Switzerland. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Switzerland, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Switzerland
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Switzerland." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "netherlands": {
        name: "Netherlands",
        code: "NL",
        currency: "EUR",
        intro: "Navigating the used car market in Netherlands can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Netherlands, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Netherlands. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Netherlands, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Netherlands
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Netherlands." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "belgium": {
        name: "Belgium",
        code: "BE",
        currency: "EUR",
        intro: "Navigating the used car market in Belgium can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Belgium, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Belgium. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Belgium, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Belgium
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Belgium." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "vietnam": {
        name: "Vietnam",
        code: "VN",
        currency: "VND",
        intro: "Navigating the used car market in Vietnam can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Vietnam, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in VND and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Vietnam. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Vietnam, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Vietnam
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Vietnam." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "malaysia": {
        name: "Malaysia",
        code: "MY",
        currency: "MYR",
        intro: "Navigating the used car market in Malaysia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Malaysia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MYR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Malaysia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Malaysia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Malaysia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Malaysia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "thailand": {
        name: "Thailand",
        code: "TH",
        currency: "THB",
        intro: "Navigating the used car market in Thailand can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Thailand, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in THB and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Thailand. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Thailand, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Thailand
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Thailand." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "indonesia": {
        name: "Indonesia",
        code: "ID",
        currency: "IDR",
        intro: "Navigating the used car market in Indonesia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Indonesia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in IDR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Indonesia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Indonesia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Indonesia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Indonesia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "philippines": {
        name: "Philippines",
        code: "PH",
        currency: "PHP",
        intro: "Navigating the used car market in Philippines can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Philippines, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in PHP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Philippines. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Philippines, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Philippines
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Philippines." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "saudi-arabia": {
        name: "Saudi Arabia",
        code: "SA",
        currency: "SAR",
        intro: "Navigating the used car market in Saudi Arabia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Saudi Arabia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in SAR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Saudi Arabia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Saudi Arabia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Saudi Arabia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Saudi Arabia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "new-zealand": {
        name: "New Zealand",
        code: "NZ",
        currency: "NZD",
        intro: "Navigating the used car market in New Zealand can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in New Zealand, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in NZD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect New Zealand. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in New Zealand, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to New Zealand
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in New Zealand." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "ireland": {
        name: "Ireland",
        code: "IE",
        currency: "EUR",
        intro: "Navigating the used car market in Ireland can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Ireland, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Ireland. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Ireland, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Ireland
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Ireland." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "portugal": {
        name: "Portugal",
        code: "PT",
        currency: "EUR",
        intro: "Navigating the used car market in Portugal can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Portugal, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Portugal. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Portugal, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Portugal
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Portugal." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "greece": {
        name: "Greece",
        code: "GR",
        currency: "EUR",
        intro: "Navigating the used car market in Greece can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Greece, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Greece. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Greece, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Greece
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Greece." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "chile": {
        name: "Chile",
        code: "CL",
        currency: "CLP",
        intro: "Navigating the used car market in Chile can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Chile, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CLP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Chile. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Chile, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Chile
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Chile." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "colombia": {
        name: "Colombia",
        code: "CO",
        currency: "COP",
        intro: "Navigating the used car market in Colombia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Colombia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in COP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Colombia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Colombia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Colombia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Colombia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "peru": {
        name: "Peru",
        code: "PE",
        currency: "PEN",
        intro: "Navigating the used car market in Peru can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Peru, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in PEN and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Peru. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Peru, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Peru
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Peru." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "morocco": {
        name: "Morocco",
        code: "MA",
        currency: "MAD",
        intro: "Navigating the used car market in Morocco can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Morocco, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MAD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Morocco. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Morocco, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Morocco
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Morocco." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "pakistan": {
        name: "Pakistan",
        code: "PK",
        currency: "PKR",
        intro: "Navigating the used car market in Pakistan can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Pakistan, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in PKR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Pakistan. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Pakistan, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Pakistan
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Pakistan." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "bangladesh": {
        name: "Bangladesh",
        code: "BD",
        currency: "BDT",
        intro: "Navigating the used car market in Bangladesh can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Bangladesh, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BDT and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Bangladesh. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Bangladesh, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Bangladesh
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Bangladesh." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "israel": {
        name: "Israel",
        code: "IL",
        currency: "ILS",
        intro: "Navigating the used car market in Israel can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Israel, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ILS and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Israel. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Israel, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Israel
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Israel." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "norway": {
        name: "Norway",
        code: "NO",
        currency: "NOK",
        intro: "Navigating the used car market in Norway can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Norway, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in NOK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Norway. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Norway, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Norway
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Norway." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "denmark": {
        name: "Denmark",
        code: "DK",
        currency: "DKK",
        intro: "Navigating the used car market in Denmark can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Denmark, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in DKK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Denmark. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Denmark, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Denmark
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Denmark." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "finland": {
        name: "Finland",
        code: "FI",
        currency: "EUR",
        intro: "Navigating the used car market in Finland can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Finland, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Finland. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Finland, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Finland
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Finland." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "romania": {
        name: "Romania",
        code: "RO",
        currency: "RON",
        intro: "Navigating the used car market in Romania can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Romania, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in RON and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Romania. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Romania, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Romania
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Romania." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "czech-republic": {
        name: "Czech Republic",
        code: "CZ",
        currency: "CZK",
        intro: "Navigating the used car market in Czech Republic can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Czech Republic, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CZK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Czech Republic. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Czech Republic, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Czech Republic
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Czech Republic." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "hungary": {
        name: "Hungary",
        code: "HU",
        currency: "HUF",
        intro: "Navigating the used car market in Hungary can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Hungary, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in HUF and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Hungary. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Hungary, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Hungary
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Hungary." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "austria": {
        name: "Austria",
        code: "AT",
        currency: "EUR",
        intro: "Navigating the used car market in Austria can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Austria, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Austria. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Austria, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Austria
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Austria." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "singapore": {
        name: "Singapore",
        code: "SG",
        currency: "SGD",
        intro: "Navigating the used car market in Singapore can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Singapore, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in SGD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Singapore. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Singapore, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Singapore
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Singapore." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "qatar": {
        name: "Qatar",
        code: "QA",
        currency: "QAR",
        intro: "Navigating the used car market in Qatar can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Qatar, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in QAR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Qatar. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Qatar, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Qatar
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Qatar." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "kuwait": {
        name: "Kuwait",
        code: "KW",
        currency: "KWD",
        intro: "Navigating the used car market in Kuwait can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Kuwait, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in KWD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Kuwait. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Kuwait, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Kuwait
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Kuwait." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "oman": {
        name: "Oman",
        code: "OM",
        currency: "OMR",
        intro: "Navigating the used car market in Oman can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Oman, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in OMR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Oman. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Oman, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Oman
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Oman." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "bahrain": {
        name: "Bahrain",
        code: "BH",
        currency: "BHD",
        intro: "Navigating the used car market in Bahrain can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Bahrain, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BHD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Bahrain. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Bahrain, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Bahrain
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Bahrain." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "jordan": {
        name: "Jordan",
        code: "JO",
        currency: "JOD",
        intro: "Navigating the used car market in Jordan can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Jordan, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in JOD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Jordan. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Jordan, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Jordan
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Jordan." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "lebanon": {
        name: "Lebanon",
        code: "LB",
        currency: "LBP",
        intro: "Navigating the used car market in Lebanon can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Lebanon, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in LBP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Lebanon. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Lebanon, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Lebanon
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Lebanon." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "tanzania": {
        name: "Tanzania",
        code: "TZ",
        currency: "TZS",
        intro: "Navigating the used car market in Tanzania can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Tanzania, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in TZS and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Tanzania. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Tanzania, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Tanzania
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Tanzania." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "uganda": {
        name: "Uganda",
        code: "UG",
        currency: "UGX",
        intro: "Navigating the used car market in Uganda can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Uganda, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in UGX and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Uganda. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Uganda, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Uganda
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Uganda." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "ethiopia": {
        name: "Ethiopia",
        code: "ET",
        currency: "ETB",
        intro: "Navigating the used car market in Ethiopia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Ethiopia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ETB and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Ethiopia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Ethiopia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Ethiopia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Ethiopia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "angola": {
        name: "Angola",
        code: "AO",
        currency: "AOA",
        intro: "Navigating the used car market in Angola can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Angola, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in AOA and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Angola. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Angola, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Angola
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Angola." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "senegal": {
        name: "Senegal",
        code: "SN",
        currency: "XOF",
        intro: "Navigating the used car market in Senegal can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Senegal, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in XOF and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Senegal. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Senegal, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Senegal
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Senegal." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "ivory-coast": {
        name: "Ivory Coast",
        code: "CI",
        currency: "XOF",
        intro: "Navigating the used car market in Ivory Coast can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Ivory Coast, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in XOF and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Ivory Coast. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Ivory Coast, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Ivory Coast
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Ivory Coast." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "cameroon": {
        name: "Cameroon",
        code: "CM",
        currency: "XAF",
        intro: "Navigating the used car market in Cameroon can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Cameroon, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in XAF and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Cameroon. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Cameroon, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Cameroon
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Cameroon." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "zambia": {
        name: "Zambia",
        code: "ZM",
        currency: "ZMW",
        intro: "Navigating the used car market in Zambia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Zambia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ZMW and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Zambia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Zambia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Zambia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Zambia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "zimbabwe": {
        name: "Zimbabwe",
        code: "ZW",
        currency: "ZWL",
        intro: "Navigating the used car market in Zimbabwe can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Zimbabwe, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ZWL and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Zimbabwe. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Zimbabwe, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Zimbabwe
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Zimbabwe." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "botswana": {
        name: "Botswana",
        code: "BW",
        currency: "BWP",
        intro: "Navigating the used car market in Botswana can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Botswana, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BWP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Botswana. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Botswana, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Botswana
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Botswana." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "namibia": {
        name: "Namibia",
        code: "NA",
        currency: "NAD",
        intro: "Navigating the used car market in Namibia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Namibia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in NAD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Namibia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Namibia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Namibia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Namibia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "mozambique": {
        name: "Mozambique",
        code: "MZ",
        currency: "MZN",
        intro: "Navigating the used car market in Mozambique can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Mozambique, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MZN and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Mozambique. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Mozambique, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Mozambique
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Mozambique." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "madagascar": {
        name: "Madagascar",
        code: "MG",
        currency: "MGA",
        intro: "Navigating the used car market in Madagascar can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Madagascar, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MGA and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Madagascar. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Madagascar, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Madagascar
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Madagascar." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "sri-lanka": {
        name: "Sri Lanka",
        code: "LK",
        currency: "LKR",
        intro: "Navigating the used car market in Sri Lanka can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Sri Lanka, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in LKR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Sri Lanka. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Sri Lanka, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Sri Lanka
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Sri Lanka." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "nepal": {
        name: "Nepal",
        code: "NP",
        currency: "NPR",
        intro: "Navigating the used car market in Nepal can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Nepal, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in NPR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Nepal. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Nepal, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Nepal
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Nepal." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "myanmar": {
        name: "Myanmar",
        code: "MM",
        currency: "MMK",
        intro: "Navigating the used car market in Myanmar can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Myanmar, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MMK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Myanmar. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Myanmar, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Myanmar
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Myanmar." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "cambodia": {
        name: "Cambodia",
        code: "KH",
        currency: "KHR",
        intro: "Navigating the used car market in Cambodia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Cambodia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in KHR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Cambodia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Cambodia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Cambodia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Cambodia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "laos": {
        name: "Laos",
        code: "LA",
        currency: "LAK",
        intro: "Navigating the used car market in Laos can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Laos, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in LAK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Laos. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Laos, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Laos
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Laos." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "mongolia": {
        name: "Mongolia",
        code: "MN",
        currency: "MNT",
        intro: "Navigating the used car market in Mongolia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Mongolia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in MNT and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Mongolia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Mongolia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Mongolia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Mongolia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "uzbekistan": {
        name: "Uzbekistan",
        code: "UZ",
        currency: "UZS",
        intro: "Navigating the used car market in Uzbekistan can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Uzbekistan, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in UZS and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Uzbekistan. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Uzbekistan, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Uzbekistan
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Uzbekistan." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "kazakhstan": {
        name: "Kazakhstan",
        code: "KZ",
        currency: "KZT",
        intro: "Navigating the used car market in Kazakhstan can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Kazakhstan, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in KZT and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Kazakhstan. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Kazakhstan, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Kazakhstan
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Kazakhstan." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "ukraine": {
        name: "Ukraine",
        code: "UA",
        currency: "UAH",
        intro: "Navigating the used car market in Ukraine can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Ukraine, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in UAH and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Ukraine. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Ukraine, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Ukraine
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Ukraine." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "belarus": {
        name: "Belarus",
        code: "BY",
        currency: "BYN",
        intro: "Navigating the used car market in Belarus can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Belarus, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BYN and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Belarus. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Belarus, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Belarus
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Belarus." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "serbia": {
        name: "Serbia",
        code: "RS",
        currency: "RSD",
        intro: "Navigating the used car market in Serbia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Serbia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in RSD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Serbia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Serbia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Serbia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Serbia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "bulgaria": {
        name: "Bulgaria",
        code: "BG",
        currency: "BGN",
        intro: "Navigating the used car market in Bulgaria can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Bulgaria, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BGN and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Bulgaria. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Bulgaria, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Bulgaria
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Bulgaria." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "croatia": {
        name: "Croatia",
        code: "HR",
        currency: "HRK",
        intro: "Navigating the used car market in Croatia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Croatia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in HRK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Croatia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Croatia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Croatia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Croatia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "slovakia": {
        name: "Slovakia",
        code: "SK",
        currency: "EUR",
        intro: "Navigating the used car market in Slovakia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Slovakia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Slovakia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Slovakia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Slovakia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Slovakia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "slovenia": {
        name: "Slovenia",
        code: "SI",
        currency: "EUR",
        intro: "Navigating the used car market in Slovenia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Slovenia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Slovenia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Slovenia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Slovenia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Slovenia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "lithuania": {
        name: "Lithuania",
        code: "LT",
        currency: "EUR",
        intro: "Navigating the used car market in Lithuania can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Lithuania, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Lithuania. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Lithuania, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Lithuania
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Lithuania." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "latvia": {
        name: "Latvia",
        code: "LV",
        currency: "EUR",
        intro: "Navigating the used car market in Latvia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Latvia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Latvia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Latvia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Latvia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Latvia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "estonia": {
        name: "Estonia",
        code: "EE",
        currency: "EUR",
        intro: "Navigating the used car market in Estonia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Estonia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Estonia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Estonia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Estonia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Estonia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "iceland": {
        name: "Iceland",
        code: "IS",
        currency: "ISK",
        intro: "Navigating the used car market in Iceland can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Iceland, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in ISK and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Iceland. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Iceland, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Iceland
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Iceland." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "cyprus": {
        name: "Cyprus",
        code: "CY",
        currency: "EUR",
        intro: "Navigating the used car market in Cyprus can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Cyprus, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Cyprus. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Cyprus, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Cyprus
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Cyprus." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "malta": {
        name: "Malta",
        code: "MT",
        currency: "EUR",
        intro: "Navigating the used car market in Malta can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Malta, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in EUR and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Malta. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Malta, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Malta
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Malta." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "jamaica": {
        name: "Jamaica",
        code: "JM",
        currency: "JMD",
        intro: "Navigating the used car market in Jamaica can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Jamaica, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in JMD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Jamaica. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Jamaica, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Jamaica
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Jamaica." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "trinidad-and-tobago": {
        name: "Trinidad and Tobago",
        code: "TT",
        currency: "TTD",
        intro: "Navigating the used car market in Trinidad and Tobago can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Trinidad and Tobago, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in TTD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Trinidad and Tobago. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Trinidad and Tobago, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Trinidad and Tobago
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Trinidad and Tobago." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "bahamas": {
        name: "Bahamas",
        code: "BS",
        currency: "BSD",
        intro: "Navigating the used car market in Bahamas can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Bahamas, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BSD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Bahamas. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Bahamas, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Bahamas
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Bahamas." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "barbados": {
        name: "Barbados",
        code: "BB",
        currency: "BBD",
        intro: "Navigating the used car market in Barbados can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Barbados, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BBD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Barbados. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Barbados, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Barbados
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Barbados." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "uruguay": {
        name: "Uruguay",
        code: "UY",
        currency: "UYU",
        intro: "Navigating the used car market in Uruguay can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Uruguay, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in UYU and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Uruguay. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Uruguay, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Uruguay
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Uruguay." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "paraguay": {
        name: "Paraguay",
        code: "PY",
        currency: "PYG",
        intro: "Navigating the used car market in Paraguay can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Paraguay, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in PYG and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Paraguay. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Paraguay, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Paraguay
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Paraguay." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "bolivia": {
        name: "Bolivia",
        code: "BO",
        currency: "BOB",
        intro: "Navigating the used car market in Bolivia can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Bolivia, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in BOB and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Bolivia. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Bolivia, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Bolivia
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Bolivia." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "ecuador": {
        name: "Ecuador",
        code: "EC",
        currency: "USD",
        intro: "Navigating the used car market in Ecuador can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Ecuador, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in USD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Ecuador. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Ecuador, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Ecuador
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Ecuador." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "venezuela": {
        name: "Venezuela",
        code: "VE",
        currency: "VES",
        intro: "Navigating the used car market in Venezuela can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Venezuela, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in VES and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Venezuela. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Venezuela, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Venezuela
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Venezuela." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "costa-rica": {
        name: "Costa Rica",
        code: "CR",
        currency: "CRC",
        intro: "Navigating the used car market in Costa Rica can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Costa Rica, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CRC and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Costa Rica. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Costa Rica, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Costa Rica
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Costa Rica." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "panama": {
        name: "Panama",
        code: "PA",
        currency: "USD",
        intro: "Navigating the used car market in Panama can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Panama, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in USD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Panama. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Panama, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Panama
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Panama." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "guatemala": {
        name: "Guatemala",
        code: "GT",
        currency: "GTQ",
        intro: "Navigating the used car market in Guatemala can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Guatemala, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in GTQ and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Guatemala. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Guatemala, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Guatemala
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Guatemala." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "honduras": {
        name: "Honduras",
        code: "HN",
        currency: "HNL",
        intro: "Navigating the used car market in Honduras can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Honduras, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in HNL and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Honduras. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Honduras, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Honduras
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Honduras." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "el-salvador": {
        name: "El Salvador",
        code: "SV",
        currency: "USD",
        intro: "Navigating the used car market in El Salvador can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in El Salvador, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in USD and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect El Salvador. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in El Salvador, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to El Salvador
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in El Salvador." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "nicaragua": {
        name: "Nicaragua",
        code: "NI",
        currency: "NIO",
        intro: "Navigating the used car market in Nicaragua can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Nicaragua, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in NIO and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Nicaragua. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Nicaragua, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Nicaragua
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Nicaragua." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "dominican-republic": {
        name: "Dominican Republic",
        code: "DO",
        currency: "DOP",
        intro: "Navigating the used car market in Dominican Republic can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Dominican Republic, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in DOP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Dominican Republic. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Dominican Republic, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Dominican Republic
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Dominican Republic." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "cuba": {
        name: "Cuba",
        code: "CU",
        currency: "CUP",
        intro: "Navigating the used car market in Cuba can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Cuba, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in CUP and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Cuba. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Cuba, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Cuba
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Cuba." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
    "haiti": {
        name: "Haiti",
        code: "HT",
        currency: "HTG",
        intro: "Navigating the used car market in Haiti can be highly rewarding if you follow the correct procedures. Whether you are buying from a local dealership, purchasing from a private seller, or importing a vehicle, understanding local regulations, documentation requirements, and potential pitfalls is essential.",
        howToBuy: `### 1. Research and Market Overview
Before making a purchase in Haiti, it's crucial to understand the local market dynamics. Used vehicles here range from locally manufactured or assembled models to foreign imports. Determine your budget in HTG and account for additional costs such as registration, taxes, and insurance.

### 2. Vehicle Verification & Inspection
This is the most critical step. Odometer rollback, hidden accident damage, and title fraud are global issues that also affect Haiti. 
*   **Physical Inspection:** Always view the car in broad daylight. Check for mismatched paint, uneven panel gaps, and signs of rust.
*   **Mechanical Check:** Hire an independent mechanic to test the engine, transmission, and suspension.
*   **VIN Check:** **Never skip this step.** Run a comprehensive VIN check using Vehicle Report Check. Ensure the VIN on the dashboard matches the VIN on the door jamb and all official paperwork.

### 3. Documentation and Transfer of Ownership
To legally transfer ownership in Haiti, you must ensure all documents are original and unencumbered.
*   Verify the original registration document.
*   Ensure the seller's identification matches the registered owner.
*   Check for any outstanding finance or police reports regarding stolen vehicles.
*   Draft a formal bill of sale and register the vehicle at the local transport authority promptly.

### 4. Importing a Car to Haiti
If you choose to import a vehicle rather than buying locally, be prepared for import duties, taxes, and potential compliance modifications to meet local emission and safety standards. Ensure you have the export certificate from the country of origin.`,
        platforms: [
            { name: "Local Facebook Marketplace", url: "https://www.facebook.com/marketplace", desc: "A popular choice for private sales in Haiti." },
            { name: "AutoScout24 (Europe/Global)", url: "https://www.autoscout24.com/", desc: "Widely used platform for searching international listings." },
            { name: "Carmudi / Cheki / Local Alternatives", url: "#", desc: "Always check the leading localized auto classifieds specific to your region." }
        ]
    },
};
