import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, CreditCard, Smartphone, Check, Loader2, Tag } from 'lucide-react';
import { CouponService } from '../../services/CouponService';
import './PaymentModal.css';

const PaymentModal = ({ isOpen, onClose, amount, onSuccess }) => {
    const [paymentMethod, setPaymentMethod] = useState('momo');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState('input'); // input, processing, success

    // Form States
    const [momoNumber, setMomoNumber] = useState('');
    const [network, setNetwork] = useState('mtn');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    // Coupon State
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponMessage, setCouponMessage] = useState('');
    const [couponStatus, setCouponStatus] = useState('idle'); // idle, valid, invalid

    // Calculate final amount
    const finalAmount = appliedCoupon
        ? (appliedCoupon.type === 'percentage'
            ? amount - (amount * (appliedCoupon.discount / 100))
            : Math.max(0, amount - appliedCoupon.discount))
        : amount;

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            const t = setTimeout(() => {
                setStep('input');
                setLoading(false);
                setAppliedCoupon(null);
                setCouponCode('');
                setCouponMessage('');
                setCouponStatus('idle');
            }, 0);
            return () => clearTimeout(t);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleApplyCoupon = async () => {
        if (!couponCode.trim()) return;

        setLoading(true); // Show loading state if meaningful
        const result = await CouponService.validateCoupon(couponCode);
        setLoading(false);

        if (result.valid) {
            setAppliedCoupon(result.coupon);
            setCouponStatus('valid');
            setCouponMessage(`Success! ${result.coupon.code} applied.`);
        } else {
            setAppliedCoupon(null);
            setCouponStatus('invalid');
            setCouponMessage(result.message);
        }
    };

    const handlePayment = async () => {
        setLoading(true);
        setStep('processing');

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setStep('success');

            // Increment coupon usage if one was used
            if (appliedCoupon) {
                CouponService.incrementUsage(appliedCoupon.code);
            }

            // Call success handler after a brief delay to show success state
            setTimeout(() => {
                onSuccess({
                    amount: finalAmount,
                    method: paymentMethod,
                    coupon: appliedCoupon ? appliedCoupon.code : null,
                    details: paymentMethod === 'momo' ? { network, number: momoNumber } : { last4: cardNumber.slice(-4) }
                });
            }, 1500);
        }, 2000);
    };

    return ReactDOM.createPortal(
        <div className="payment-modal-overlay">
            <div className="payment-modal">
                <button className="close-btn" onClick={onClose} disabled={loading}>
                    <X size={24} />
                </button>

                {step === 'success' ? (
                    <div className="payment-success">
                        <div className="success-icon">
                            <Check size={48} color="white" />
                        </div>
                        <h3>Payment Successful!</h3>
                        <p>Your transaction has been processed.</p>
                        <p className="amount-paid">Paid: GHS {finalAmount.toLocaleString()}</p>
                    </div>
                ) : (
                    <>
                        <div className="payment-header">
                            <h2>Secure Payment</h2>
                            <p>Complete your transaction securely.</p>
                        </div>

                        <div className="amount-display">
                            <div className="total-amount">
                                <span className="label">Total to Pay</span>
                                <span className="value">GHS {finalAmount.toLocaleString()}</span>
                            </div>
                            {appliedCoupon && (
                                <div className="discount-badge">
                                    <Tag size={12} />
                                    <span>Saved GHS {(amount - finalAmount).toLocaleString()}</span>
                                </div>
                            )}
                        </div>

                        {/* Coupon Section */}
                        <div className="coupon-section">
                            <div className="coupon-input-group">
                                <input
                                    type="text"
                                    placeholder="Have a coupon code?"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                                    disabled={!!appliedCoupon || loading}
                                />
                                {appliedCoupon ? (
                                    <button className="remove-coupon-btn" onClick={() => { setAppliedCoupon(null); setCouponCode(''); setCouponStatus('idle'); setCouponMessage(''); }}>
                                        Remove
                                    </button>
                                ) : (
                                    <button className="apply-btn" onClick={handleApplyCoupon} disabled={!couponCode || loading}>
                                        Apply
                                    </button>
                                )}
                            </div>
                            {couponMessage && (
                                <p className={`coupon-message ${couponStatus}`}>{couponMessage}</p>
                            )}
                        </div>

                        {/* Payment Method Tabs */}
                        <div className="payment-tabs">
                            <button
                                className={`tab-btn ${paymentMethod === 'momo' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('momo')}
                            >
                                <Smartphone size={18} /> Mobile Money
                            </button>
                            <button
                                className={`tab-btn ${paymentMethod === 'card' ? 'active' : ''}`}
                                onClick={() => setPaymentMethod('card')}
                            >
                                <CreditCard size={18} /> Card
                            </button>
                        </div>

                        <div className="payment-body">
                            {paymentMethod === 'momo' ? (
                                <div className="momo-form">
                                    <div className="form-group">
                                        <label>Network</label>
                                        <select value={network} onChange={(e) => setNetwork(e.target.value)}>
                                            <option value="mtn">MTN MobileMoney</option>
                                            <option value="vodafone">Telecel Cash</option>
                                            <option value="airteltigo">AT Money</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                            type="tel"
                                            placeholder="024 XXX XXXX"
                                            value={momoNumber}
                                            onChange={(e) => setMomoNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="card-form">
                                    <div className="form-group">
                                        <label>Card Number</label>
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Expiry</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={(e) => setExpiry(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                value={cvv}
                                                onChange={(e) => setCvv(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="payment-footer">
                            <button className="pay-btn" onClick={handlePayment} disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="spinner" size={18} /> Processing...
                                    </>
                                ) : (
                                    <>Pay GHS {finalAmount.toLocaleString()}</>
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
};

export default PaymentModal;
