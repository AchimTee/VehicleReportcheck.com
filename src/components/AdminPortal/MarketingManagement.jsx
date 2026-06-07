import React, { useState } from 'react';
import { Send, Users, AlertCircle, CheckCircle2, FileText } from 'lucide-react';

const MARKETING_TEMPLATES = [
    {
        id: 'blank',
        name: '-- Blank Template --',
        subject: '',
        content: ''
    },
    {
        id: 'launch',
        name: 'Launch Announcement / Welcome',
        subject: 'Welcome to the New Vehicle Report Check!',
        content: `<h2>Hello!</h2>
<p>We are thrilled to officially announce the launch of the new and improved <strong>Vehicle Report Check</strong> platform.</p>
<p>Buying a used car is risky, but it doesn't have to be. We have completely upgraded our systems to provide you with the most accurate, real-time vehicle history reports available on the market.</p>
<p><strong>What can you uncover with Vehicle Report Check?</strong></p>
<ul>
    <li>Hidden accident damage & auction photos</li>
    <li>Odometer rollbacks & mileage inconsistencies</li>
    <li>Salvage, rebuilt, or junk title brands</li>
    <li>Theft records and active liens</li>
</ul>
<p>Don't gamble with your next car purchase. Run a quick VIN check today and buy with absolute confidence.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Run a VIN Check Now</a>
</div>
<p>Happy car hunting,<br>The Vehicle Report Check Team</p>`
    },
    {
        id: 'flash_sale',
        name: 'Special Discount / Flash Sale',
        subject: '🚨 Flash Sale: 20% Off All VIN Reports Today!',
        content: `<h2>Don't Miss Out!</h2>
<p>For the next 48 hours, we are offering an exclusive <strong>20% discount</strong> on all Vehicle Report Check vehicle history reports!</p>
<p>Whether you are buying a car this weekend or just doing some research, now is the perfect time to stock up on credits and save money.</p>
<div class="data-box" style="text-align: center;">
    <h3 style="margin: 0; color: #B300FF; font-size: 24px;">USE CODE: VEHICLE REPORT CHECK20</h3>
</div>
<p>Applying the code is easy. Just log into your dashboard, select the package you want, and enter the code at checkout.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Claim Your Discount</a>
</div>
<p>This offer expires soon, so act fast!</p>`
    },
    {
        id: 'educational',
        name: 'Educational: Why VIN checks matter',
        subject: '3 Red Flags a Test Drive Will NEVER Show You',
        content: `<h2>Is that used car too good to be true?</h2>
<p>You found a great looking car, the engine sounds smooth, and the test drive went perfectly. It’s ready to buy, right? <strong>Wrong.</strong></p>
<p>Some of the most expensive and dangerous car problems are completely invisible to the naked eye. Here are 3 red flags you can only find with a VIN check:</p>
<ol>
    <li><strong>Title Washing:</strong> A car that was totaled in a flood in one state can be illegally re-registered in another state with a "clean" title.</li>
    <li><strong>Odometer Fraud:</strong> Digital odometers can be rolled back with a simple $50 tool, instantly tricking you into overpaying by thousands.</li>
    <li><strong>Hidden Auction Damage:</strong> A car may have been completely crushed in a wreck and repaired just enough to look good on the dealership lot.</li>
</ol>
<p>A simple 2-minute Vehicle Report Check report can reveal the absolute truth about a vehicle's past, including high-resolution photos from before it was repaired.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Check a VIN Now</a>
</div>`
    },
    {
        id: 'feature',
        name: 'Feature Spotlight: Auction Photos',
        subject: 'Did you know we show Auction Photos?',
        content: `<h2>See the damage they tried to hide.</h2>
<p>Did you know that many used cars on the market today were actually bought at salvage auctions?</p>
<p>Unscrupulous sellers buy wrecked cars at auction, do cheap cosmetic repairs, and flip them to unsuspecting buyers. But there's a way to protect yourself.</p>
<p><strong>Vehicle Report Check's database includes millions of historical auction photos.</strong></p>
<p>When you run a report with us, we don't just give you the text records. If the car was ever sold at a salvage auction, we will show you the original photos of exactly what the damage looked like before it was "fixed".</p>
<p>Don't take the seller's word for it. See the proof for yourself.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Run a Report</a>
</div>`
    },
    {
        id: 'reengage',
        name: 'Re-engagement / We miss you',
        subject: 'Still looking for the perfect car?',
        content: `<h2>We noticed it's been a while!</h2>
<p>Hi there,</p>
<p>It's been a little while since you last checked a VIN with Vehicle Report Check. Are you still hunting for the perfect car?</p>
<p>Finding a reliable used car takes time and patience, but we want to make it a little easier for you.</p>
<p>If you're ready to get back out there, log into your account to purchase some fresh credits, and remember to always check the VIN before handing over any cash.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Access Your Dashboard</a>
</div>
<p>If you already found your dream car, congratulations from all of us at Vehicle Report Check!</p>`
    },
    {
        id: 'holiday',
        name: 'Holiday / Seasonal Promotion',
        subject: 'Happy Holidays from Vehicle Report Check! 🎁',
        content: `<h2>Season's Greetings!</h2>
<p>The holidays are here, and whether you are buying a car for yourself or a loved one, safety should always come first.</p>
<p>To celebrate the season, we're giving you a special holiday offer to make your next vehicle purchase safer and more affordable.</p>
<p>As a token of our appreciation for being a registered member, please enjoy this special holiday discount on your next vehicle history report package.</p>
<div class="button-container">
    <a href="https://www.vehiclereportcheck.com/login" class="button">Redeem Holiday Offer</a>
</div>
<p>Wishing you a safe and joyful holiday season,</p>
<p>The Vehicle Report Check Team</p>`
    }
];

const MarketingManagement = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);
    const [sendMode, setSendMode] = useState('all');
    const [customEmailsText, setCustomEmailsText] = useState('');

    const handleTemplateSelect = (e) => {
        const selectedId = e.target.value;
        const template = MARKETING_TEMPLATES.find(t => t.id === selectedId);
        if (template) {
            setSubject(template.subject);
            setMessage(template.content);
        }
    };

    const handleSendBlast = async (e) => {
        e.preventDefault();
        
        if (!subject.trim() || !message.trim()) {
            setStatus({ type: 'error', text: 'Subject and message are required.' });
            return;
        }

        if (sendMode === 'custom' && !customEmailsText.trim()) {
            setStatus({ type: 'error', text: 'Please enter at least one custom email address.' });
            return;
        }

        const confirmMsg = sendMode === 'all' 
            ? 'Are you sure you want to send this email to ALL registered users? This action cannot be undone.'
            : 'Are you sure you want to send this email to your custom list?';
            
        const confirmSend = window.confirm(confirmMsg);
        if (!confirmSend) return;

        setLoading(true);
        setStatus({ type: '', text: '' });

        try {
            const customEmails = sendMode === 'custom' 
                ? customEmailsText.split(',').map(email => email.trim()).filter(email => email)
                : [];

            const res = await fetch('/api/admin/blast-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject, message, customEmails })
            });
            const data = await res.json();
            
            if (data.success) {
                setStatus({ type: 'success', text: `Email blast sent successfully to ${data.count || 0} users!` });
                setSubject('');
                setMessage('');
            } else {
                setStatus({ type: 'error', text: data.message || data.error || 'Failed to send email blast.' });
            }
        } catch (error) {
            console.error('Blast Error:', error);
            setStatus({ type: 'error', text: 'Network error occurred while sending emails.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="marketing-management fade-in">
            <div className="admin-card">
                <div className="card-header">
                    <div>
                        <h3>Marketing Email Blast</h3>
                        <p>Select a pre-written template or draft your own email to all users.</p>
                    </div>
                    <Users size={24} className="text-gray-400" />
                </div>
                
                <div className="card-body" style={{ padding: '20px' }}>
                    {status.text && (
                        <div className={`status-banner ${status.type}`} style={{ padding: '12px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', background: status.type === 'error' ? '#fee2e2' : '#dcfce7', color: status.type === 'error' ? '#991b1b' : '#166534' }}>
                            {status.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                            {status.text}
                        </div>
                    )}

                    <div className="form-group" style={{ marginBottom: '25px', padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
                            <FileText size={18} />
                            Load Pre-Written Template
                        </label>
                        <select 
                            onChange={handleTemplateSelect}
                            style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', background: 'white', cursor: 'pointer' }}
                            disabled={loading}
                        >
                            {MARKETING_TEMPLATES.map(t => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))}
                        </select>
                        <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px', marginBottom: 0 }}>
                            Loading a template will overwrite the subject and message below. You can customize it before sending.
                        </p>
                    </div>

                    <form onSubmit={handleSendBlast}>
                        <div className="form-group" style={{ marginBottom: '20px', padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                            <label style={{ display: 'block', marginBottom: '12px', fontWeight: '600', color: '#0f172a' }}>Target Audience</label>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input 
                                        type="radio" 
                                        name="sendMode" 
                                        value="all" 
                                        checked={sendMode === 'all'} 
                                        onChange={() => setSendMode('all')} 
                                    />
                                    All Registered Users
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                    <input 
                                        type="radio" 
                                        name="sendMode" 
                                        value="custom" 
                                        checked={sendMode === 'custom'} 
                                        onChange={() => setSendMode('custom')} 
                                    />
                                    Custom Emails Only
                                </label>
                            </div>

                            {sendMode === 'custom' && (
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>Enter Emails (comma separated)</label>
                                    <textarea 
                                        value={customEmailsText}
                                        onChange={(e) => setCustomEmailsText(e.target.value)}
                                        placeholder="e.g. test@example.com, admin@vehiclereportcheck.com"
                                        style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '8px', minHeight: '80px', resize: 'vertical' }}
                                        disabled={loading}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Subject</label>
                            <input 
                                type="text" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="e.g. Special Offer: 50% Off VIN Reports!"
                                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                                disabled={loading}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Message (HTML Format)</label>
                            <textarea 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your email content here. The design (logo, header, footer, colors) will be automatically wrapped around this text."
                                style={{ width: '100%', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', minHeight: '250px', resize: 'vertical', fontFamily: 'monospace' }}
                                disabled={loading}
                            />
                        </div>

                        <div className="form-actions" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <button 
                                type="submit" 
                                className="btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#00A3FF', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
                                disabled={loading}
                            >
                                {loading ? 'Sending Blast...' : (
                                    <>
                                        <Send size={18} />
                                        {sendMode === 'all' ? 'Send to All Users' : 'Send to Custom List'}
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MarketingManagement;
