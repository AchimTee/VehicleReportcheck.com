import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import { UserService } from '../services/UserService';
import { PaymentService } from '../services/PaymentService';
import { ReportService } from '../services/ReportService';
import { CouponService } from '../services/CouponService';

const PaymentCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [status, setStatus] = useState('loading'); // loading, success, failed
    const [message, setMessage] = useState('Verifying payment status...');

    const fulfillOrder = async (clientReference, amountPaid) => {
        try {
            console.log(`Starting Fulfillment for Ref: ${clientReference}, Amount: ${amountPaid}`);

            const storedOrder = localStorage.getItem(`pendingOrder_${clientReference}`);
            if (!storedOrder) {
                setMessage('Payment successful, but order details were lost. Please contact support with Ref: ' + clientReference);
                return;
            }

            const orderContext = JSON.parse(storedOrder);
            const { user: ctxUser, pkg = {}, vehicleData, isCreditPurchase, couponCode, createAccount } = orderContext;

            let user = ctxUser || {};

            // ── Auto-create account if flagged ──
            if (createAccount && user.email) {
                try {
                    const newUser = await UserService.addUser({
                        name: user.name || user.email.split('@')[0],
                        email: user.email,
                        password: 'report123',
                        phone: user.phone || '',
                        role: 'user'
                    });
                    user = newUser || user;
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                } catch (err) {
                    // User may already exist — that's fine, just log in
                    console.warn('Account creation skipped (may already exist):', err.message);
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(user));
                    localStorage.setItem('user', JSON.stringify(user));
                }
            }

            // ── Record payment ──
            try {
                await fetch('/api/payment-callback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        clientReference,
                        amount: amountPaid,
                        status: 'Success',
                        customerName: user.name || 'Guest',
                        customerEmail: user.email || 'N/A',
                        description: pkg.name || 'Service Payment',
                        paymentType: 'paystack',
                        date: new Date().toISOString()
                    })
                });
            } catch (err) { console.error("Failed to record payment:", err); }

            // ── Increment coupon usage if applicable ──
            if (couponCode) {
                try { await CouponService.incrementUsage(couponCode); } catch (e) { /* non-fatal */ }
            }

            let credits = pkg.credits || pkg.reports || 1;
            // Subtract 1 credit because we are instantly generating a report for this VIN
            if (vehicleData?.vin) {
                credits -= 1;
            }

            // ── Add credits to the user account ──
            if (user.email && credits > 0) {
                try { await UserService.addCredits(user.email, credits); } catch (e) { console.warn('addCredits failed:', e); }
            }

            let reportToOpen = null;
            // ── Save report record if VIN-based purchase ──
            if (vehicleData?.vin) {
                const newReport = {
                    vin: vehicleData.vin,
                    make: vehicleData.make || '',
                    model: vehicleData.model || '',
                    year: vehicleData.year || '',
                    type: 'Full History',
                    status: 'Completed',
                    date: new Date().toLocaleDateString(),
                    email: user.email || 'guest@vehiclereportcheck.com',
                    amount: amountPaid || pkg.price || 0
                };
                try { await ReportService.addReport(newReport, null); } catch (e) { console.warn('addReport failed:', e); }
                reportToOpen = newReport;
            }

            localStorage.removeItem(`pendingOrder_${clientReference}`);

            // ── Redirect appropriately ──
            if (vehicleData?.vin) {
                navigate('/generating-report', { state: { vin: vehicleData.vin, reportData: reportToOpen } });
            } else {
                navigate('/member');
            }

        } catch (error) {
            console.error('Fulfillment Error:', error);
            setMessage(`Payment received, but failed to process order. Error: ${error.message}. Please contact support.`);
        }
    };

    useEffect(() => {
        const verifyTransaction = async () => {
            const params = new URLSearchParams(location.search);

            // DEBUG: Log all params
            console.log('Callback URL:', window.location.href);
            console.log('All Params:', Object.fromEntries(params.entries()));

            // Paystack usually returns ?reference=inv... and ?trxref=...
            // It could also be ?clientReference=...
            let reference = params.get('reference') || params.get('trxref') || params.get('clientReference') || params.get('ClientReference');

            if (!reference) {
                console.error('Missing reference. Available params:', Object.fromEntries(params.entries()));
                setStatus('failed');
                setMessage('No transaction reference found. URL: ' + location.search);
                return;
            }

            try {
                // Verify with our new backend Paystack verification endpoint
                const response = await fetch(`/api/payments/verify/${reference}`);
                const data = await response.json();

                console.log('Verification Response:', data);

                if (response.ok && data.success && data.data.status === 'success') {
                    // Payment Successful!
                    setStatus('success');
                    setMessage('Payment successful! Finalizing your order...');

                    // Convert amount from pesewas to GHS (divide by 100) or leave as is if amount is already GHS
                    // Paystack amount is in pesewas, so / 100
                    const apiAmount = data.data.amount / 100;
                    
                    // Fulfill Order
                    await fulfillOrder(reference, apiAmount);
                } else {
                    console.error('Payment verification failed:', data);
                    setStatus('failed');
                    setMessage(`Payment status: ${data?.data?.status || 'Unknown'}. ${data.message || 'Payment was not confirmed.'}`);
                }

            } catch (error) {
                console.error('Verification Error:', error);
                setStatus('failed');
                setMessage(`Error verifying payment: ${error.message}`);
            }
        };

        verifyTransaction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            textAlign: 'center',
            padding: '20px'
        }}>
            {status === 'loading' && (
                <>
                    <Loader size={48} className="animate-spin" style={{ color: '#1e3a8a', marginBottom: '20px' }} />
                    <h2>Verifying Payment...</h2>
                    <p>{message}</p>
                </>
            )}

            {status === 'success' && (
                <>
                    <CheckCircle size={64} style={{ color: '#1e40af', marginBottom: '20px' }} />
                    <h2>Payment Successful!</h2>
                    <p>{message}</p>
                </>
            )}

            {status === 'failed' && (
                <>
                    <XCircle size={64} style={{ color: '#ef4444', marginBottom: '20px' }} />
                    <h2>Payment Failed</h2>
                    <p>{message}</p>
                    <button
                        onClick={() => navigate('/checkout')}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            backgroundColor: '#1e3a8a',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Return to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default PaymentCallback;
