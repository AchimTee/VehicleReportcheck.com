import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Car, X, Mail, Phone, ChevronRight, AlertCircle, Loader, Search, Tag, CheckCircle } from 'lucide-react';
import { usePaystackPayment } from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { ReportService } from '../services/ReportService';
import { CouponService } from '../services/CouponService';
import { VinService } from '../services/VinService';
import './VinSearchModal.css';

// ─── Comprehensive Global WMI Database ────────────────────────────────────────
// Covers USA, Canada, Mexico, Germany, UK, France, Italy, Sweden, Japan,
// South Korea, China, India, Australia, Brazil, and more.
const WMI_DB = {
  // ── USA ──
  '1C4':'Jeep','1C6':'RAM','1C3':'Chrysler','1C8':'Chrysler',
  '1FA':'Ford','1FB':'Ford','1FC':'Ford','1FD':'Ford','1FM':'Ford','1FT':'Ford','1FU':'Freightliner','1FV':'Freightliner',
  '1G1':'Chevrolet','1G2':'Pontiac','1G3':'Oldsmobile','1G4':'Buick','1G6':'Cadillac','1G8':'Saturn','1GC':'Chevrolet Truck','1GD':'GMC','1GE':'GMC','1GH':'Hummer','1GK':'GMC','1GM':'Pontiac','1GT':'GMC Truck','1GY':'Cadillac',
  '1HG':'Honda','1HF':'Honda',
  '1J4':'Jeep','1J8':'Jeep',
  '1L1':'Lincoln','1LN':'Lincoln',
  '1ME':'Mercury','1MR':'Mitsubishi USA',
  '1N4':'Nissan','1N6':'Nissan Truck','1NX':'Toyota (NUMMI)',
  '1P3':'Plymouth',
  '1R9':'Wabash',
  '1T9':'Trailer',
  '1VW':'Volkswagen USA',
  '1XK':'Kenworth','1XP':'Peterbilt',
  '1YV':'Mazda USA',
  '1ZV':'Ford (AutoAlliance)',
  '19U':'Acura','19X':'Honda',
  '4F2':'Mazda USA','4F4':'Mazda USA',
  '4M2':'Mercury','4S1':'Subaru',
  '4T1':'Toyota USA','4T3':'Toyota USA','4T4':'Toyota USA',
  '4US':'BMW USA','4UZ':'Freightliner',
  '5CD':'Volkswagen USA',
  '5FN':'Honda USA','5FP':'Honda USA',
  '5GA':'Buick','5GT':'Buick Enclave',
  '5J6':'Honda','5J8':'Acura',
  '5L1':'Lincoln','5LM':'Lincoln',
  '5N1':'Nissan USA','5NP':'Hyundai USA','5NM':'Hyundai USA',
  '5TD':'Toyota USA','5TE':'Toyota USA','5TF':'Toyota USA','5TJ':'Toyota USA',
  '5UX':'BMW USA X-Series','5YJ':'Tesla','5YF':'Tesla',
  // ── Canada ──
  '2C3':'Chrysler Canada','2C8':'Chrysler Canada',
  '2D3':'Dodge Canada',
  '2FA':'Ford Canada','2FB':'Ford Canada','2FC':'Ford Canada','2FM':'Ford Canada',
  '2G1':'Chevrolet Canada','2G2':'Pontiac Canada','2G4':'Buick Canada',
  '2HG':'Honda Canada','2HH':'Acura Canada','2HK':'Honda Canada',
  '2T1':'Toyota Canada','2T2':'Lexus Canada',
  // ── Mexico ──
  '3FA':'Ford Mexico','3FE':'Ford Mexico',
  '3G1':'Chevrolet Mexico',
  '3N1':'Nissan Mexico','3N6':'Nissan Mexico',
  '3VW':'Volkswagen Mexico','3VE':'Volkswagen Mexico',
  // ── Germany ──
  'WBA':'BMW','WBD':'Mercedes-Benz','WBF':'BMW','WBS':'BMW M',
  'WDB':'Mercedes-Benz','WDD':'Mercedes-Benz','WDC':'Mercedes-Benz',
  'WF0':'Ford Germany','WF1':'Ford Germany',
  'WKK':'Daimler Trucks','WMW':'MINI','WME':'smart',
  'WP0':'Porsche','WP1':'Porsche',
  'WSS':'VW Commercial','WUA':'Audi Sport','WAU':'Audi','WAP':'Porsche',
  'WV1':'Volkswagen Commercial','WV2':'VW Bus','WVG':'Volkswagen','WVW':'Volkswagen',
  'VF1':'Renault','VF2':'Renault','VF3':'Peugeot','VF6':'Renault','VF7':'Citroën','VF8':'Citroën',
  // ── United Kingdom ──
  'SAJ':'Jaguar','SAL':'Land Rover','SAR':'Rover','SAT':'Jaguar',
  'SBM':'McLaren','SBF':'Ford UK',
  'SCB':'Bentley','SCC':'Lotus','SCE':'De Lorean (historic)',
  'SDB':'Aston Martin (historic)','SKF':'Volvo Car UK',
  // ── Italy ──
  'ZAM':'Maserati','ZAP':'Piaggio','ZAR':'Alfa Romeo',
  'ZCG':'Ferrari','ZDF':'Ferrari','ZFF':'Ferrari','ZHW':'Lamborghini',
  'ZFA':'Fiat','ZFB':'Fiat','ZFC':'Iveco','ZGU':'Lamborghini',
  'ZHF':'Abarth','ZLA':'Lancia','ZMF':'Pininfarina',
  // ── Sweden ──
  'YS2':'Scania','YS3':'Saab','YS4':'Scania Bus','YT9':'Koenigsegg',
  'YV1':'Volvo','YV2':'Volvo Truck','YV4':'Volvo Truck',
  // ── Netherlands ──
  'XL9':'Spyker','XLR':'DAF',
  // ── Spain ──
  'VS5':'SEAT','VS6':'SEAT','VSS':'SEAT',
  // ── Japan ──
  'JA3':'Mitsubishi','JA4':'Mitsubishi','JAA':'Isuzu','JA':'Isuzu',
  'JB3':'Dodge (Mitsubishi)','JF1':'Subaru','JF2':'Subaru',
  'JH4':'Acura Japan','JHM':'Honda Japan',
  'JKS':'Kawasaki','JL5':'Mitsubishi Truck',
  'JM1':'Mazda','JM3':'Mazda','JM6':'Mazda',
  'JMB':'Mitsubishi','JME':'Mitsubishi','JMP':'Mitsubishi Fuso',
  'JN1':'Nissan','JN3':'Nissan','JN6':'Nissan Truck','JN8':'Nissan',
  'JT2':'Toyota','JT3':'Toyota','JT4':'Toyota','JT6':'Lexus','JT7':'Toyota','JT8':'Lexus','JTE':'Toyota','JTJ':'Lexus','JTK':'Toyota','JTL':'Toyota','JTM':'Toyota','JTN':'Toyota',
  'JS1':'Suzuki','JS2':'Suzuki','JS3':'Suzuki',
  'JYA':'Yamaha','JZA':'Toyota',
  // ── South Korea ──
  'KL8':'Daewoo/Chevrolet','KLA':'Daewoo','KLB':'Daewoo',
  'KMF':'Hyundai Truck','KMH':'Hyundai','KMJ':'Kia','KMT':'GM Korea',
  'KMX':'Kia','KNA':'Kia','KNB':'Kia','KNC':'Kia',
  'KND':'Kia','KNJ':'Ford Korea',
  // ── China ──
  'LBB':'Volkswagen China','LBE':'BYD','LBV':'BMW China',
  'LDC':'Dongfeng','LFP':'Ford China','LFV':'Volkswagen FAW',
  'LGB':'GM China','LGX':'Buick China',
  'LHG':'Honda China','LJD':'JAC',
  'LKL':'Higer Bus','LS4':'Buick China','LSG':'GM-SAIC','LSJ':'MG',
  'LTN':'Ford Transit China','LVH':'Volvo China','LVS':'Ford China',
  'LWV':'Volkswagen China','LZG':'Sinotruk','LZY':'Yutong',
  // ── India ──
  'MA1':'Premier','MA3':'Suzuki India','MA6':'Hyundai India',
  'MAB':'Fiat India','MAK':'Maruti Suzuki','MAL':'Hyundai India','MAN':'Maruti',
  'MBJ':'Tata','MBP':'Toyota India','MBR':'Mercedes India',
  'MD2':'Bajaj','MD7':'Honda India',
  'MEE':'Renault India','MEJ':'Renault India',
  'MFB':'Ford India','MNT':'Nissan India',
  // ── Brazil ──
  '9BF':'Ford Brazil','9BG':'GM Brazil','9BS':'Volvo Brazil','9BW':'Volkswagen Brazil',
  '93Y':'Honda Brazil','93Z':'Honda Brazil',
  '95V':'Volkswagen Brazil',
  // ── Australia ──
  '6FP':'Ford Australia','6G1':'Pontiac Australia',
  '6MM':'Mitsubishi Australia','6MS':'Mitsubishi Australia',
  '6T1':'Toyota Australia','6T9':'Holden',
  // ── Russia ──
  'XTA':'Lada / AvtoVAZ','XTT':'GAZ','XUF':'UAZ',
  // ── South Africa ──
  'AAV':'Volkswagen SA','AFA':'Ford SA',
  // ── Turkey ──
  'NM0':'Ford Turkey','NM4':'Ford Turkey',
  // ── Czech Republic ──
  'TMA':'Skoda','TMB':'Skoda',
  // ── Belgium ──
  'VRL':'Volvo Belgium',
};

// Country codes from first character(s) of VIN
const COUNTRY_DB = {
  '1':'USA','4':'USA','5':'USA',
  '2':'Canada',
  '3':'Mexico',
  '6':'Australia / New Zealand',
  '7':'New Zealand',
  '8':'Argentina / Chile / Ecuador',
  '9':'Brazil',
  'A':'South Africa',
  'B':'Angola / Kenya',
  'C':'Benin / Madagascar',
  'D':'Egypt',
  'E':'Ethiopia',
  'F':'Ghana',
  'G':'Tanzania',
  'H':'Morocco',
  'J':'Japan',
  'K':'South Korea',
  'L':'China',
  'M':'India',
  'N':'Turkey / Netherlands',
  'P':'Philippines',
  'R':'Taiwan',
  'S':'United Kingdom',
  'T':'Czech Republic',
  'U':'Poland',
  'V':'France / Spain / Austria',
  'W':'Germany',
  'X':'Russia',
  'Y':'Sweden / Finland / Belgium / Norway',
  'Z':'Italy',
};

// Decode year from position 10 (index 9)
const YEAR_MAP = {
  'A':1980,'B':1981,'C':1982,'D':1983,'E':1984,'F':1985,'G':1986,'H':1987,
  'J':1988,'K':1989,'L':1990,'M':1991,'N':1992,'P':1993,'R':1994,'S':1995,
  'T':1996,'V':1997,'W':1998,'X':1999,'Y':2000,
  '1':2001,'2':2002,'3':2003,'4':2004,'5':2005,'6':2006,'7':2007,'8':2008,'9':2009,
  // Post-2010 cycles back A=2010
};
function decodeYear(ch) {
  if (!ch) return null;
  const v = YEAR_MAP[ch.toUpperCase()];
  // If we got a pre-2010 code AND it makes no sense as a vehicle year < 2000, add 30 years for the 2nd cycle
  if (v && v < 2010) return v + 30; // 2nd cycle: A=2010, B=2011 … Y=2030
  return v || null;
}

// Offline WMI lookup (3-char → make, fall back to 2-char)
function wmiLookup(vin) {
  const v = vin.toUpperCase();
  return WMI_DB[v.slice(0,3)] || WMI_DB[v.slice(0,2)] || null;
}

function decodeCountry(vin) {
  return COUNTRY_DB[vin[0].toUpperCase()] || 'Unknown';
}

// Is this a US VIN? (first char 1, 4, or 5)
function isUSVin(vin) {
  return ['1','4','5'].includes(vin[0]);
}

// Fetch from NHTSA (US only, free, no key)
async function fetchNHTSA(vin) {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('NHTSA unavailable');
  const json = await res.json();
  const results = json.Results || [];
  const get = (var_) => results.find(r => r.Variable === var_)?.Value || '';
  return {
    make: get('Make'),
    model: get('Model'),
    year: get('Model Year'),
    bodyClass: get('Body Class'),
    driveType: get('Drive Type'),
    engineCyl: get('Engine Number of Cylinders'),
    fuelType: get('Fuel Type - Primary'),
    plantCountry: get('Plant Country'),
    trim: get('Trim'),
    series: get('Series'),
  };
}

const PACKAGES = [
    { id: 1, name: 'Single Report', credits: 1, price: 14.00, perReport: 14.00, desc: 'Know the exact vehicle you want? One report may be all you need.' },
    { id: 2, name: '2 Reports',     credits: 2, price: 24.00, perReport: 12.00, desc: 'Compare two vehicles side-by-side and save.', popular: true },
    { id: 3, name: '5 Reports',     credits: 5, price: 45.00, perReport: 9.00,  desc: 'Not sure which car is best? Research up to 5 vehicles.', bestValue: true },
    { id: 4, name: '10 Reports',    credits: 10, price: 70.00, perReport: 7.00, desc: 'Ideal for dealers and serious buyers.' },
];

const VinSearchModal = ({ vin, onClose }) => {
    const navigate = useNavigate();
    const [step, setStep] = useState(vin ? 1 : 0);
    const [currentVin, setCurrentVin] = useState(vin || '');
    const [selectedPkg, setSelectedPkg] = useState(PACKAGES[0]);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Coupon State
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });
    const [validatingCoupon, setValidatingCoupon] = useState(false);

    const sessionUser = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user') || 'null');
    const isMember = !!sessionUser;
    const credits = sessionUser?.credits || 0;

    // VIN decode state
    const [decoding, setDecoding] = useState(true);
    const [vinInfo, setVinInfo] = useState(null);

    const amountPaid = selectedPkg ? Math.max(0, selectedPkg.price - discount) : 0;

    const paystackRef = useRef(`inv${Date.now()}_${Math.floor(Math.random() * 1000)}`);

    const config = {
        reference: paystackRef.current,
        email: email || sessionUser?.email || 'guest@vehiclereportcheck.com',
        amount: Math.round(Math.max(0, amountPaid * 12 * 100)), // Convert USD -> GHS (x12) -> Pesewas (x100), must be integer
        publicKey: 'pk_live_06703dd64f9b257d76a9e4b1dbe6ffa4ab85b438',
        currency: 'GHS',
        callback_url: `${window.location.origin}/payment-callback`
    };

    const initializePayment = usePaystackPayment(config);

    const handleApplyCoupon = async () => {
        if (!couponCode) return;
        setValidatingCoupon(true);
        setCouponMessage({ text: '', type: '' });
        
        try {
            const result = await CouponService.validateCoupon(couponCode);
            if (result.valid) {
                const coupon = result.coupon;
                let discountAmount = 0;

                if (selectedPkg) {
                    if (coupon.type === 'fixed') {
                        discountAmount = coupon.discount;
                    } else if (coupon.type === 'percentage') {
                        discountAmount = selectedPkg.price * (coupon.discount / 100);
                    }
                }
                
                discountAmount = Math.min(discountAmount, selectedPkg?.price || 0);

                setDiscount(discountAmount);
                setCouponMessage({ text: `Coupon applied: -$${discountAmount.toFixed(2)}`, type: 'success' });
            } else {
                setDiscount(0);
                setCouponMessage({ text: result.message || 'Invalid coupon', type: 'error' });
            }
        } catch (err) {
            setDiscount(0);
            setCouponMessage({ text: 'Failed to validate coupon', type: 'error' });
        }
        setValidatingCoupon(false);
    };

    useEffect(() => {
        if (step !== 1) return;
        let cancelled = false;
        const decode = async () => {
            setDecoding(true);
            const v = currentVin.toUpperCase();

            try {
                // Use the shared smart decoder from VinService
                // which handles global VINs, NHTSA, and upstream
                const data = await VinService.decodeVin(v);
                
                const vehicleInfo = data.data?.basic || data.result || data.vehicle || data;
                
                if (!cancelled) {
                    setVinInfo({
                        make: vehicleInfo.make || vehicleInfo.Make || vehicleInfo.manufacturer || 'Unknown',
                        model: vehicleInfo.model || vehicleInfo.Model || '',
                        year: vehicleInfo.year || vehicleInfo.Year || vehicleInfo.modelYear || '—',
                        country: vehicleInfo.plantCountry || vehicleInfo.manufacturer?.country || '',
                        body: vehicleInfo.specs?.body_type || vehicleInfo.bodyClass || '',
                        fuel: vehicleInfo.specs?.fuel_type || vehicleInfo.fuelType || '',
                        trim: vehicleInfo.trim || '',
                    });
                }
            } catch (err) {
                console.error("VinSearchModal decode error:", err);
                // Fallback to offline parsing if API completely fails
                const country = decodeCountry(v);
                const offlineMake = wmiLookup(v);
                const offlineYear = decodeYear(v[9]);
                if (!cancelled) {
                    setVinInfo({ make: offlineMake || 'Unknown', model: '', year: offlineYear || '—', country });
                }
            }
            if (!cancelled) setDecoding(false);
        };
        decode();
        return () => { cancelled = true; };
    }, [step, currentVin]);

    const handleSelectAndContinue = (pkg) => {
        setSelectedPkg(pkg);
        setStep(2);
    };

    const handleGenerateWithCredit = async () => {
        setLoading(true);
        try {
            
            const success = await UserService.deductCredit(sessionUser.email);
            if (success) {
                const newReport = {
                    vin: currentVin.toUpperCase(),
                    make: vinInfo?.make || 'Unknown',
                    model: vinInfo?.model || '',
                    year: vinInfo?.year || '—',
                    email: sessionUser.email,
                    amount: 0
                };
                await ReportService.addReport(newReport, null);
                
                // Close modal and navigate to report generation screen
                onClose();
                navigate('/generating-report', { state: { vin: newReport.vin, reportData: newReport } });
            } else {
                setError("Failed to deduct credit. Please try again.");
                setLoading(false);
            }
        } catch (err) {
            console.error(err);
            setError("Error generating report.");
            setLoading(false);
        }
    };

    const fulfillOrder = async (reference, finalAmount) => {
        try {

            let user = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user') || 'null');
            if (!user) {
                user = { email, name: email.split('@')[0], role: 'user' };
            }
            
            // Force save to ensure user is logged in before redirecting
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));

            // Record payment
            try {
                await fetch('/api/payment-callback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        clientReference: reference.reference,
                        amount: finalAmount,
                        status: 'Success',
                        customerName: user.name || 'Guest',
                        customerEmail: user.email || 'N/A',
                        description: `Vehicle Report Check - ${selectedPkg.name}`,
                        paymentType: 'paystack',
                        date: new Date().toISOString()
                    })
                });
            } catch (err) {}

            // Increment coupon usage
            if (discount > 0 && couponCode) {
                try { await CouponService.incrementUsage(couponCode); } catch (e) { }
            }

            // Add credits
            let creditsToAdd = selectedPkg?.credits || selectedPkg?.reports || 1;
            // Subtract 1 credit because we are instantly generating a report for this VIN
            if (currentVin) {
                creditsToAdd -= 1;
            }
            if (user.email && creditsToAdd > 0) {
                try { await UserService.addCredits(user.email, creditsToAdd); } catch (e) {}
            }

            // Add report
            const newReport = {
                vin: currentVin.toUpperCase(),
                make: vinInfo?.make || 'Unknown',
                model: vinInfo?.model || '',
                year: vinInfo?.year || '—',
                type: 'Full History',
                status: 'Completed',
                date: new Date().toLocaleDateString(),
                email: user.email,
                amount: finalAmount
            };
            try { await ReportService.addReport(newReport, null); } catch (e) {}

            onClose();
            navigate('/generating-report', { state: { vin: newReport.vin, reportData: newReport } });

        } catch (error) {
            console.error('Fulfillment Error:', error);
            setError(`Payment received, but failed to process order. Contact support.`);
            setLoading(false);
        }
    };

    const onSuccess = (reference) => {
        fulfillOrder(reference, amountPaid);
    };

    const onClosePaystack = () => {
        setLoading(false);
    };

    const handleProceedToPayment = async () => {
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setLoading(true);

        try {
            let user = sessionUser;
            
            if (!user) {
                try {
                    user = await UserService.addUser({
                        name: email.split('@')[0],
                        email: email,
                        password: 'report123',
                        phone: phone || '',
                        role: 'user'
                    });
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                } catch (err) {
                    console.warn("Account creation skipped (may exist)", err);
                    user = { email, name: email.split('@')[0], role: 'user', phone: phone || '' };
                }
            }

            try {
                await fetch('/api/payments/initiate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        checkoutId: config.reference,
                        clientReference: config.reference,
                        amount: amountPaid,
                        phone: user.phone || 'N/A',
                        description: `Vehicle Report Check - ${selectedPkg.name}`,
                        user: user
                    })
                });
            } catch (err) {
                console.warn('Could not log pending transaction', err);
            }

            initializePayment({ onSuccess, onClose: onClosePaystack });
        } catch (err) {
            setError(`Error: ${err.message}`);
            setLoading(false);
        }
    };

    return (
        <div className="vsm-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="vsm-modal">
                <button className="vsm-close" onClick={onClose} aria-label="Close modal"><X size={20} /></button>

                {/* STEP 0: Enter VIN */}
                {step === 0 && (
                    <>
                        <div className="vsm-header">
                            <h2>Run a Vehicle Report Check Report</h2>
                            <p style={{marginTop:'10px', color:'#64748b'}}>Enter any vehicle identification number below.</p>
                        </div>
                        <div className="vsm-form" style={{padding: '30px'}}>
                            <div className="vsm-field">
                                <label>Vehicle Identification Number (VIN)</label>
                                <input
                                    type="text"
                                    placeholder="Enter 17-character VIN"
                                    value={currentVin}
                                    onChange={e => setCurrentVin(e.target.value.toUpperCase())}
                                    className="vsm-input"
                                    maxLength={17}
                                    style={{textTransform: 'uppercase'}}
                                />
                            </div>
                            <button 
                                className="vsm-proceed-btn" 
                                style={{width:'100%', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                onClick={() => {
                                    if(currentVin.trim().length > 0) setStep(1);
                                }}
                            >
                                <Search size={18} style={{marginRight:'8px'}}/> Check VIN
                            </button>
                        </div>
                    </>
                )}

                {/* STEP 1: Search Results */}
                {step === 1 && (
                    <>
                        <div className="vsm-header">
                            <h2>Your Search Results</h2>
                        </div>

                        <div className="vsm-vehicle-info">
                            <p className="vsm-tagline">Get the full report to learn more:</p>
                            <div className="vsm-vehicle-row">
                                <div className="vsm-car-icon">
                                    <Car size={48} className="vsm-car-svg" />
                                </div>
                                {decoding ? (
                                    <div className="vsm-decoding">
                                        <Loader size={20} className="vsm-spin" />
                                        <span>Identifying vehicle...</span>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="vsm-vehicle-name">
                                            {vinInfo?.year || '—'} {vinInfo?.make || 'Vehicle'}{vinInfo?.model ? ` ${vinInfo.model}` : ''}
                                        </div>
                                        <div className="vsm-vin-label">VIN: <strong>{currentVin.toUpperCase()}</strong></div>
                                        <div className="vsm-vehicle-meta">
                                            Country of Assembly: <strong>{vinInfo?.country || '—'}</strong>
                                            {vinInfo?.body && <span> &nbsp;·&nbsp; {vinInfo.body}</span>}
                                            {vinInfo?.fuel && <span> &nbsp;·&nbsp; {vinInfo.fuel}</span>}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="vsm-records-badge">
                                <ShieldCheck size={20} className="vsm-shield-icon" />
                                <span>Vehicle data found. Unlock the full history report now.</span>
                            </div>
                        </div>

                        {error && (
                            <div className="vsm-error" style={{margin: '0 30px 15px', color: '#b91c1c', background: '#fee2e2', padding: '10px', borderRadius: '6px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <AlertCircle size={16} /> {error}
                            </div>
                        )}

                        {isMember && credits > 0 ? (
                            <div className="vsm-credits-box" style={{ padding: '20px 30px', textAlign: 'center', background: '#f0fdf4', borderTop: '1px solid #e2e8f0' }}>
                                <h3 style={{ color: '#166534', marginBottom: '8px' }}>You have {credits} Credit{credits > 1 ? 's' : ''}</h3>
                                <p style={{ color: '#172554', fontSize: '14px', marginBottom: '15px' }}>Use 1 credit to instantly generate this full vehicle history report.</p>
                                <button 
                                    className="vsm-proceed-btn" 
                                    onClick={handleGenerateWithCredit} 
                                    disabled={loading}
                                    style={{ width: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                                >
                                    {loading ? <Loader className="vsm-spin" size={18} /> : 'Generate Report (1 Credit)'}
                                </button>
                            </div>
                        ) : (
                            <>
                                {isMember && credits === 0 && (
                                    <div className="vsm-credits-box" style={{ padding: '15px 30px', textAlign: 'center', background: '#fef2f2', borderTop: '1px solid #e2e8f0' }}>
                                        <h3 style={{ color: '#991b1b', fontSize: '16px', marginBottom: '4px' }}>Out of Credits</h3>
                                        <p style={{ color: '#b91c1c', fontSize: '14px' }}>You have 0 credits. Please purchase a package below to continue.</p>
                                    </div>
                                )}
                                <div className="vsm-packages">
                                    {PACKAGES.map(pkg => (
                                        <div key={pkg.id} className={`vsm-pkg-card ${pkg.popular ? 'popular' : ''} ${pkg.bestValue ? 'best-value' : ''}`}>
                                            {pkg.popular && <span className="vsm-pkg-ribbon">Popular</span>}
                                            {pkg.bestValue && <span className="vsm-pkg-ribbon best">Best Value</span>}
                                            <div className="vsm-pkg-info">
                                                <div className="vsm-pkg-title">{pkg.name} <span className="vsm-pkg-price">${pkg.price.toFixed(2)}</span></div>
                                                <div className="vsm-pkg-desc">{pkg.desc}</div>
                                                <div className="vsm-pkg-per">${pkg.perReport.toFixed(2)} / report</div>
                                            </div>
                                            <button className="vsm-pkg-btn" onClick={() => handleSelectAndContinue(pkg)}>
                                                Get {pkg.credits === 1 ? 'Single Report' : `${pkg.credits} Reports`}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="vsm-footer-links">
                            <button className="vsm-link" onClick={() => setStep(0)}>Search again »</button>
                        </div>
                    </>
                )}

                {/* STEP 2: Secure Your Report */}
                {step === 2 && (
                    <>
                        <div className="vsm-secure-header">
                            <div className="vsm-shield-circle">
                                <ShieldCheck size={28} />
                            </div>
                            <h2>Secure Your Report</h2>
                            <p>Enter your details to securely access your comprehensive vehicle history report.</p>
                            <div className="vsm-encrypted-tag">
                                <span>🔒</span> Your information is protected and encrypted
                            </div>
                        </div>

                        <div className="vsm-form">
                            <div className="vsm-field">
                                <label><Mail size={14} /> Email Address <span className="vsm-required">*</span></label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="vsm-input"
                                />
                            </div>

                            <div className="vsm-field">
                                <label><Phone size={14} /> Phone Number <span className="vsm-optional">Optional</span></label>
                                <input
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    className="vsm-input"
                                />
                            </div>

                            {error && (
                                <div className="vsm-error">
                                    <AlertCircle size={14} /> {error}
                                </div>
                            )}

                            <div className="vsm-field">
                                <label><Tag size={14} /> Coupon Code <span className="vsm-optional">Optional</span></label>
                                <div style={{display: 'flex', gap: '10px'}}>
                                    <input
                                        type="text"
                                        placeholder="Enter coupon code"
                                        value={couponCode}
                                        onChange={e => setCouponCode(e.target.value.toUpperCase())}
                                        className="vsm-input"
                                        style={{textTransform: 'uppercase'}}
                                    />
                                    <button 
                                        onClick={handleApplyCoupon}
                                        disabled={validatingCoupon || !couponCode}
                                        style={{
                                            padding: '0 15px', 
                                            background: '#f1f5f9', 
                                            border: '1px solid #cbd5e1', 
                                            borderRadius: '6px', 
                                            cursor: 'pointer',
                                            fontWeight: '500',
                                            color: '#334155',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {validatingCoupon ? <Loader size={16} className="vsm-spin" /> : 'Apply'}
                                    </button>
                                </div>
                                {couponMessage.text && (
                                    <div style={{
                                        marginTop: '6px', 
                                        fontSize: '13px', 
                                        color: couponMessage.type === 'success' ? '#1e3a8a' : '#ef4444',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                        {couponMessage.type === 'success' ? <CheckCircle size={14}/> : <AlertCircle size={14}/>}
                                        {couponMessage.text}
                                    </div>
                                )}
                            </div>

                            <div className="vsm-pkg-summary">
                                <div>
                                    Purchasing: <strong>{selectedPkg.name}</strong> — <strong>${selectedPkg.price.toFixed(2)}</strong>
                                    {discount > 0 && <span style={{display: 'block', color: '#1e3a8a', marginTop: '4px'}}>Discount Applied: -${discount.toFixed(2)}</span>}
                                    {discount > 0 && <strong style={{display: 'block', fontSize: '16px', marginTop: '4px'}}>Total: ${amountPaid.toFixed(2)}</strong>}
                                </div>
                                <button className="vsm-change-link" onClick={() => setStep(1)}>Change</button>
                            </div>

                            <div className="vsm-action-row">
                                <button className="vsm-later-btn" onClick={onClose}>
                                    Maybe Later
                                </button>
                                <button
                                    className="vsm-proceed-btn"
                                    onClick={handleProceedToPayment}
                                    disabled={loading || !email}
                                >
                                    {loading ? 'Processing...' : (<>Proceed to Checkout <ChevronRight size={16} /></>)}
                                </button>
                            </div>
                        </div>

                        <div className="vsm-security-note">
                            <ShieldCheck size={16} />
                            <div>
                                <strong>Enterprise-Grade Security</strong>
                                <p>Your data is protected with 256-bit SSL encryption and never shared with third parties.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default VinSearchModal;
