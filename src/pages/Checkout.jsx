import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldCheck } from 'lucide-react';
import { UserService } from '../services/UserService';
import { PricingService } from '../services/PricingService';
import { CouponService } from '../services/CouponService';
import { ReportService } from '../services/ReportService';
import { usePaystackPayment } from 'react-paystack';
import './Checkout.css';

// Import assets
import reportPreviewImg from '../assets/report_preview.png';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [step] = useState(1);
    const [vehicleData, setVehicleData] = useState(null);
    const [listingData, setListingData] = useState(null);
    const [isCreditPurchase, setIsCreditPurchase] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [packages, setPackages] = useState({ report: [], listing: [] });
    const [discount, setDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState('');

    // User Info State
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: ''
    });

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const initCheckout = async () => {
            // Load packages from PricingService
            const settings = await PricingService.getSettings();
            setPackages({
                report: settings.reportPackages || [],
                listing: settings.listingPackages || []
            });

            // Load user
            try {
                const user = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user'));
                if (user) {
                    setCurrentUser(user);
                    setUserInfo({
                        fullName: user.name || '',
                        email: user.email || '',
                        password: '***',
                        phone: user.phone || ''
                    });
                }
            } catch (e) {
                console.error("Error loading user", e);
            }

            if (location.state?.vehicleData) {
                setVehicleData(location.state.vehicleData);
                // Default to first report package if available
                if (settings.reportPackages && settings.reportPackages.length > 0) {
                    setSelectedPackage(settings.reportPackages[1]?.id || settings.reportPackages[0].id);
                }
            } else if (location.state?.listingData) {
                setListingData(location.state.listingData);
                // Default to first listing package if available
                if (settings.listingPackages && settings.listingPackages.length > 0) {
                    setSelectedPackage(settings.listingPackages[0].id);
                }
            } else if (location.state?.buyCredits) {
                setIsCreditPurchase(true);
                if (location.state.packageId) {
                    setSelectedPackage(location.state.packageId);
                } else if (settings.reportPackages && settings.reportPackages.length > 0) {
                    setSelectedPackage(settings.reportPackages[1]?.id || settings.reportPackages[0].id);
                }
            } else {
                // Redirect if no data (e.g. direct access)
                // navigate('/'); 
                console.warn("No checkout data found in location.state");
            }
        };

        initCheckout();
    }, [location, navigate]);

    // Reset discount and coupon when package changes to prevent negative values (e.g. switching from expensive to cheap package with fixed discount)
    useEffect(() => {
        setDiscount(0);
        // We keep the coupon code text but force them to re-apply or we could auto-reapply. 
        // For safety, let's reset.
        // If we wanted to be smarter, we could re-run handleApplyCoupon() here if couponCode exists.
    }, [selectedPackage]);

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleApplyCoupon = async () => {
        console.log('Validating coupon:', couponCode);
        try {
            setLoading(true);
            const result = await CouponService.validateCoupon(couponCode);
            console.log('Result:', result); // Debug log
            setLoading(false);

            if (result.valid) {
                const coupon = result.coupon;
                let discountAmount = 0;
                const currentPackage = getSelectedPackageDetails();

                if (currentPackage) {
                    if (coupon.type === 'fixed') {
                        discountAmount = coupon.discount;
                    } else if (coupon.type === 'percentage') {
                        discountAmount = (currentPackage.price * coupon.discount) / 100;
                    }
                    setDiscount(discountAmount);
                    alert(`Coupon applied! You saved $${discountAmount}`);
                }
            } else {
                alert(`Validation Failed: ${result.message}\nDate: ${new Date().toISOString()}`);
                setDiscount(0);
            }
        } catch (error) {
            console.error("Coupon check failed", error);
            setLoading(false);
            alert("Failed to validate coupon");
        }
    };

    const getSelectedPackageDetails = () => {
        if (!packages || (!packages.report && !packages.listing)) return null;

        if (vehicleData || isCreditPurchase) {
            return packages.report?.find(p => p.id === selectedPackage);
        }
        return packages.listing?.find(p => p.id === selectedPackage);
    };

    const selectedPkg = getSelectedPackageDetails();
    const amountPaid = selectedPkg ? selectedPkg.price - discount : 0;

    const paystackRef = useRef(`inv${Date.now()}_${Math.floor(Math.random() * 1000)}`);

    const config = {
        reference: paystackRef.current,
        email: currentUser?.email || userInfo.email || 'guest@vehiclereportcheck.com',
        amount: Math.round(Math.max(0, amountPaid * 12 * 100)), // Convert USD -> GHS (x12) -> Pesewas (x100), must be integer
        publicKey: 'pk_live_06703dd64f9b257d76a9e4b1dbe6ffa4ab85b438',
        currency: 'GHS',
        callback_url: `${window.location.origin}/payment-callback`
    };

    const initializePayment = usePaystackPayment(config);

    const fulfillOrder = async (reference, finalAmount) => {
        try {
            console.log(`Starting Fulfillment for Ref: ${reference.reference}, Amount: ${finalAmount}`);

            let user = currentUser;
            if (!user) {
                const email = userInfo?.email || 'guest@vehiclereportcheck.com';
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
                        customerName: user?.name || 'Guest',
                        customerEmail: user?.email || 'N/A',
                        description: selectedPkg?.name || 'Service Payment',
                        paymentType: 'paystack',
                        date: new Date().toISOString()
                    })
                });
            } catch (err) { console.error("Failed to record payment:", err); }

            // Increment coupon usage
            if (discount > 0 && couponCode) {
                try { await CouponService.incrementUsage(couponCode); } catch (e) { }
            }

            let credits = selectedPkg?.credits || selectedPkg?.reports || 1;
            // Subtract 1 credit because we are instantly generating a report for this VIN
            if (vehicleData?.vin) {
                credits -= 1;
            }

            // Add credits
            if (user?.email && credits > 0) {
                try { await UserService.addCredits(user.email, credits); } catch (e) { console.warn('addCredits failed:', e); }
            }

            // Save report record if VIN-based purchase
            if (vehicleData?.vin) {
                const newReport = {
                    vin: vehicleData.vin,
                    make: vehicleData.make || '',
                    model: vehicleData.model || '',
                    year: vehicleData.year || '',
                    type: 'Full History',
                    status: 'Completed',
                    date: new Date().toLocaleDateString(),
                    email: user?.email || 'guest@vehiclereportcheck.com',
                    amount: finalAmount
                };
                try { await ReportService.addReport(newReport, null); } catch (e) { console.warn('addReport failed:', e); }
                
                // Navigate to report generation screen
                navigate('/generating-report', { state: { vin: vehicleData.vin, reportData: newReport } });
            } else {
                navigate('/member');
            }

        } catch (error) {
            console.error('Fulfillment Error:', error);
            alert(`Payment received, but failed to process order. Error: ${error.message}. Please contact support.`);
        }
    };

    const onSuccess = (reference) => {
        fulfillOrder(reference, amountPaid);
    };

    const onClose = () => {
        setLoading(false);
        console.log('Paystack popup closed.');
    };

    const handleCheckout = async () => {
        if (!currentUser && (!userInfo.fullName || !userInfo.email || !userInfo.password)) {
            alert('Please fill in all account details to proceed.');
            return;
        }

        if (!selectedPkg) {
            alert("Error: No package selected");
            return;
        }

        setLoading(true);

        try {
            // 1. Create User if not logged in
            let user = currentUser;
            if (!user) {
                try {
                    user = await UserService.addUser({
                        name: userInfo.fullName,
                        email: userInfo.email,
                        password: userInfo.password,
                        phone: userInfo.phone,
                        role: 'user'
                    });
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                    setCurrentUser(user);
                } catch (err) {
                    console.error("Failed to create user during checkout", err);
                    alert("Could not create account. Please try again.");
                    setLoading(false);
                    return;
                }
            }

            // 2. Log Pending Transaction
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

            // 3. Launch Paystack Inline Popup
            initializePayment({ onSuccess, onClose });

        } catch (error) {
            console.error('Checkout error:', error);
            alert(`An error occurred during checkout: ${error.message}`);
            setLoading(false);
        }
    };

    // Debug logging
    console.log('Checkout State:', { step, vehicleData, listingData, isCreditPurchase, packages, selectedPackage });



    // Safe package access
    const reportPackages = packages?.report || [];
    const listingPackages = packages?.listing || [];
    const currentPackages = (vehicleData || isCreditPurchase) ? reportPackages : listingPackages;

    // Fallback UI if no data
    if (!vehicleData && !listingData && !isCreditPurchase) {
        return (
            <div className="checkout-page" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>No Checkout Session Found</h2>
                <p>Please start your search from the home page.</p>
                <button onClick={() => navigate('/')} style={{ marginTop: '20px', padding: '10px 20px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Go to Home
                </button>
            </div>
        );
    }

    return (
        <div className="checkout-page image-match">
            <div className="checkout-container">

                <div className="split-layout">
                    {/* Left Column: Vehicle Information */}
                    <div className="vehicle-column">
                        {vehicleData && (
                            <>
                                <div className="vin-success-banner">
                                    <CheckCircle size={20} className="success-icon" />
                                    <span>Success! We found detailed information for VIN# <span className="vin-highlight">{vehicleData.vin}</span></span>
                                </div>

                                <div className="vehicle-header">
                                    <div className="vehicle-brand-logo">
                                        {/* Placeholder for brand logo */}
                                        <div className="brand-placeholder">{vehicleData.make?.charAt(0)}</div>
                                    </div>
                                    <h1>{vehicleData.year} {vehicleData.make} {vehicleData.model}</h1>
                                </div>

                                <div className="vehicle-specs-grid">
                                    <div className="spec-item">
                                        <label>Trim</label>
                                        <span>LE / XLE</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Engine Capacity</label>
                                        <span>2.5L 4-Cyl</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Fuel Type</label>
                                        <span>Gasoline</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Transmission</label>
                                        <span>Automatic</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Drive Type</label>
                                        <span>FWD / AWD</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Doors</label>
                                        <span>4</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>MSRP</label>
                                        <span>$25,000 - $35,000</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Body Type</label>
                                        <span>Sedan / SUV</span>
                                    </div>
                                    <div className="spec-item">
                                        <label>Manufacturer</label>
                                        <span>{vehicleData.make} Motors</span>
                                    </div>
                                </div>

                                <div className="listing-preview-banner">
                                    <div className="preview-image">
                                        <img src={reportPreviewImg} alt="Vehicle Preview" />
                                    </div>
                                    <div className="preview-content">
                                        <p className="preview-text">Previously listed for sale online. Get the full vehicle report to unlock records and available photos.</p>
                                        <div className="preview-stats">
                                            <div className="stat">
                                                <span className="icon">📊</span>
                                                <span>Sale Records: 3</span>
                                            </div>
                                            <div className="stat">
                                                <span className="icon">📷</span>
                                                <span>Images Available: 10+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Show something for listing/credit purchase if vehicle data is missing */}
                        {!vehicleData && listingData && (
                            <div className="listing-summary">
                                <h2>Listing Summary</h2>
                                <p><strong>Car:</strong> {listingData.year} {listingData.make} {listingData.model}</p>
                                <p><strong>Price:</strong> {listingData.price}</p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Package Selection */}
                    <div className="packages-column">
                        <div className="packages-header">
                            <h2>Unlock the history - Choose your package.</h2>
                        </div>

                        <div className="packages-grid-visual">
                            {currentPackages && currentPackages.length > 0 ? currentPackages.map((pkg, index) => {
                                // Determine styling based on package type/index to match image
                                let cardStyle = 'standard';
                                let badge = null;
                                let saveBadge = null;

                                if (pkg.name.includes('1 Report') || index === 2) {
                                    cardStyle = 'highlight-yellow'; // The "1 Report" yellow card
                                } else if (pkg.name.includes('Unlimited') || pkg.popular) {
                                    cardStyle = 'highlight-green'; // The "Best Value" green card
                                    badge = 'Best Value';
                                } else if (index === 0) {
                                    saveBadge = 'Save 60%';
                                } else if (index === 1) {
                                    badge = 'Most Popular';
                                    saveBadge = 'Save 52%';
                                }

                                return (
                                    <div
                                        key={pkg.id}
                                        className={`visual-pkg-card ${cardStyle} ${selectedPackage === pkg.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedPackage(pkg.id)}
                                    >
                                        {badge && <div className="pkg-badge-top">{badge}</div>}

                                        <div className="pkg-radio">
                                            <div className={`radio-circle ${selectedPackage === pkg.id ? 'checked' : ''}`}></div>
                                            <span className="pkg-title">{pkg.name}</span>
                                        </div>

                                        <div className="pkg-price-row">
                                            <span className="pkg-price">${pkg.price}</span>
                                            <span className="pkg-unit">/{pkg.listings ? 'listing' : 'report'}</span>
                                        </div>

                                        {pkg.credits > 1 && (
                                            <div className="pkg-sub-price">
                                                You pay ${pkg.price}
                                            </div>
                                        )}

                                        {saveBadge && <div className="pkg-save-badge">{saveBadge}</div>}

                                        {cardStyle === 'highlight-yellow' && (
                                            <div className="pkg-tag-yellow">45% Cheaper Than Carfax</div>
                                        )}

                                        {cardStyle === 'highlight-green' && (
                                            <div className="pkg-tag-red">Best Value Offer</div>
                                        )}
                                    </div>
                                );
                            }) : (
                                <p>No packages available.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Forms */}
                <div className="checkout-forms-section">
                    <div className="form-column">
                        <h3>Customer Details</h3>
                        {currentUser ? (
                            <div className="user-summary-box">
                                <div className="user-info-row">
                                    <span className="label">Name:</span>
                                    <span className="value">{currentUser.name}</span>
                                </div>
                                <div className="user-info-row">
                                    <span className="label">Email:</span>
                                    <span className="value">{currentUser.email}</span>
                                </div>
                                <div className="change-user-link">
                                    Logged in as {currentUser.name}
                                </div>
                            </div>
                        ) : (
                            <div className="form-grid-compact">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="report-input"
                                            value={userInfo.fullName}
                                            onChange={handleUserInfoChange}
                                            placeholder="Enter Full Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="report-input"
                                            value={userInfo.phone}
                                            onChange={handleUserInfoChange}
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="report-input"
                                            value={userInfo.email}
                                            onChange={handleUserInfoChange}
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="report-input"
                                            value={userInfo.password}
                                            onChange={handleUserInfoChange}
                                            placeholder="Create Password"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="form-column">
                        <h3>Payment Method</h3>
                        <div className="payment-methods-compact">
                            {/* Payment method selection handled by Hubtel */}
                        </div>

                        <div className="coupon-field">
                            <input
                                type="text"
                                placeholder="Enter Promo Code"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            />
                            <button onClick={handleApplyCoupon}>Apply</button>
                        </div>

                        <button
                            className="submit-order-btn"
                            onClick={handleCheckout}
                            disabled={loading || !selectedPkg}
                        >
                            {loading ? 'Processing...' : `Complete Order - $${Math.max(0, (selectedPkg?.price || 0) - discount)}`}
                        </button>

                        <div className="secure-footer">
                            <ShieldCheck size={14} />
                            <span>256-Bit SSL Encrypted Payment</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
