import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Shield, Tag, Loader, AlertCircle, CheckCircle } from 'lucide-react';
import { PricingService } from '../services/PricingService';
import { usePaystackPayment } from 'react-paystack';
import { Helmet } from 'react-helmet-async';
import { UserService } from '../services/UserService';
import { CouponService } from '../services/CouponService';
import './Pricing.css';

const Pricing = () => {
    const location = useLocation();
    const [settings, setSettings] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPkg, setSelectedPkg] = useState(null);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // Coupon State
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState({ text: '', type: '' });
    const [validatingCoupon, setValidatingCoupon] = useState(false);

    const sessionUser = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user') || 'null');
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
        const fetchPricing = async () => {
            const data = await PricingService.getSettings();
            setSettings(data);
        };

        fetchPricing();
        
        // Auto-fill email if user is already logged in
        const user = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user'));
        if (user && user.email) {
            setEmail(user.email);
        }
    }, []);

    const handleSelectPackage = (pkg) => {
        setSelectedPkg(pkg);
        setShowModal(true);
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
                        description: `Payment for ${selectedPkg.name}`,
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
            const creditsToAdd = selectedPkg?.credits || selectedPkg?.reports || 1;
            if (user.email) {
                try { await UserService.addCredits(user.email, creditsToAdd); } catch (e) {}
            }

            alert("Payment successful! Your credits have been added.");
            window.location.href = '/member';

        } catch (error) {
            console.error('Fulfillment Error:', error);
            alert(`Payment received, but failed to process order. Error: ${error.message}`);
            setLoading(false);
        }
    };

    const onSuccess = (reference) => {
        fulfillOrder(reference, amountPaid);
    };

    const onClosePaystack = () => {
        setLoading(false);
    };

    const initiatePayment = async () => {
        if (!email || !email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        setLoading(true);

        try {
            let user = sessionUser;
            
            if (!user) {
                try {
                    user = await UserService.addUser({
                        name: email.split('@')[0],
                        email: email,
                        password: 'report123',
                        role: 'user'
                    });
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                } catch (err) {
                    console.warn("Account creation skipped", err);
                    user = { email, name: email.split('@')[0], role: 'user' };
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
                        description: `Payment for ${selectedPkg.name}`,
                        user: user
                    })
                });
            } catch (err) {
                console.warn('Could not log pending transaction', err);
            }

            initializePayment({ onSuccess, onClose: onClosePaystack });
        } catch (error) {
            console.error('Checkout error:', error);
            alert(`An error occurred: ${error.message}`);
            setLoading(false);
        }
    };

    if (!settings) return <div className="loading-screen">Loading pricing...</div>;

    const packages = settings.reportPackages;

    const globalFeatures = [
        "Credits support for Vehicle History Reports.",
        "Credits and reports generated NEVER expire.",
        "Free access to vehicle market value.",
        "Free mobile app access to run or view your reports.",
        "Scan and lookup VINs and US License Plates for FREE.",
        "100% satisfaction guaranteed.",
        "Decode VIN numbers and Lookup US License Plates for FREE.",
        "Access recalls & maintenance information for FREE.",
        "Download your Vehicle History Report in PDF for FREE.",
        "Add and manage vehicles to garage for FREE.",
        "24/7 customer service and live chat support."
    ];

    return (
        <div className="dvh-pricing-page">
            <Helmet>
                <title>Pricing | Vehicle Report Check Vehicle History Reports</title>
                <meta name="description" content="Affordable vehicle history reports. Compare Vehicle Report Check pricing with Carfax and AutoCheck. Get comprehensive VIN checks for less." />
                <meta name="keywords" content="VIN check cost, cheap vehicle history report, carfax price, autocheck price, affordable vin check, free vehicle look up, bulk vin check, dealer vin check" />
                <link rel="canonical" href="https://vehiclereportcheck.com/pricing" />
            </Helmet>
            {/* Header Section */}
            <div className="dvh-pricing-header">
                <div className="dvh-header-content">
                    <span className="dvh-subtitle">Cost-effective pricing for you</span>
                    <h1 className="dvh-title">Say goodbye to overpaying with Carfax or AutoCheck!</h1>
                    <p className="dvh-desc">Get a more detailed report for nearly half the cost. Buy credits now, and use them later for reports!</p>
                </div>
            </div>

            <div className="dvh-pricing-container">
                {/* Pricing Grid */}
                <div className="dvh-pricing-grid">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className={`dvh-pricing-card ${pkg.popular ? 'popular' : ''} ${pkg.bestValue ? 'best-value' : ''}`}>
                            {pkg.popular && <div className="dvh-badge popular-badge">Popular</div>}
                            {pkg.bestValue && <div className="dvh-badge best-value-badge">Best Value</div>}
                            
                            <div className="dvh-card-header">
                                <h3 className="dvh-pkg-name">{pkg.name}</h3>
                                <div className="dvh-price-per-report">
                                    ${pkg.perReport.toFixed(2)} <span>/ report</span>
                                </div>
                            </div>
                            
                            <div className="dvh-card-body">
                                <div className="dvh-total-price">
                                    <span className="currency">$</span>
                                    <span className="amount">{pkg.price.toFixed(2)}</span>
                                </div>
                                <p className="dvh-credits-text">
                                    {pkg.credits} Credit{pkg.credits > 1 ? 's' : ''} Included
                                </p>
                            </div>
                            
                            <div className="dvh-card-footer">
                                <button
                                    className="dvh-buy-btn"
                                    onClick={() => handleSelectPackage(pkg)}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="dvh-features-section">
                    <div className="dvh-features-header">
                        <h2>Everything you need, all included</h2>
                        <p>Get access to all these features with every purchase. No hidden fees, no surprises.</p>
                    </div>
                    
                    <div className="dvh-features-grid">
                        {globalFeatures.map((feature, idx) => (
                            <div key={idx} className="dvh-feature-item">
                                <div className="dvh-check-circle">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Banner */}
                <div className="dvh-bottom-banner">
                    <div className="dvh-banner-content">
                        <h2>Get 100% real-time information instantly!</h2>
                        <p>We provide up-to-date information from the Department of Motor Vehicles, Police records, private data companies and NMVTIS databases.</p>
                        <div className="dvh-savings-box">
                            Save over 67% Compared to Carfax ($39.99) and 40% compared to AutoCheck ($29.99).
                        </div>
                    </div>
                </div>
            </div>

            {/* Express Checkout Modal */}
            {showModal && (
                <div className="dvh-modal-overlay">
                    <div className="dvh-modal-content">
                        <button className="dvh-modal-close" onClick={() => setShowModal(false)}>&times;</button>
                        <h2 className="dvh-modal-title">Express Checkout</h2>
                        <p className="dvh-modal-subtitle">
                            You are purchasing <strong>{selectedPkg.name}</strong> for <strong>${selectedPkg.price.toFixed(2)}</strong>.
                        </p>
                        <div className="dvh-modal-form">
                            <label>Where should we send your receipt and report access?</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                placeholder="Enter your email address" 
                                className="dvh-modal-input"
                            />

                            <label style={{marginTop: '15px', display: 'block'}}><Tag size={14} /> Coupon Code <span style={{fontSize: '12px', color: '#64748b', fontWeight: 'normal'}}>(Optional)</span></label>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <input
                                    type="text"
                                    placeholder="Enter coupon code"
                                    value={couponCode}
                                    onChange={e => setCouponCode(e.target.value.toUpperCase())}
                                    className="dvh-modal-input"
                                    style={{textTransform: 'uppercase', marginBottom: '0'}}
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

                            {discount > 0 && (
                                <div style={{marginTop: '15px', padding: '10px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#166534', fontWeight: 'bold'}}>
                                    Total After Discount: ${amountPaid.toFixed(2)}
                                </div>
                            )}

                            <button 
                                className="dvh-buy-btn" 
                                onClick={initiatePayment} 
                                disabled={loading || !email}
                            >
                                {loading ? 'Initiating Payment...' : 'Proceed to Payment'}
                            </button>
                        </div>
                        <div className="dvh-modal-footer">
                            <Shield size={14} /> Secure 256-Bit SSL Encrypted Payment
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pricing;
