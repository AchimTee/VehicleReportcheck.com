import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import './Login.css'; // Reuse Login styles

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const email = formData.email.trim();
        if (email && formData.password) {
            try {
                // Strict hardcoded credential check as requested
                if (email.toLowerCase() === 'support@vehiclereportcheck.com' && formData.password === 'support0413@') {
                    // Success - Create Admin Session
                    const adminSession = {
                        name: 'Support Admin',
                        email: 'support@vehiclereportcheck.com',
                        role: 'Admin',
                        id: 'admin_support_01'
                    };
                    localStorage.setItem('user', JSON.stringify(adminSession));
                    window.dispatchEvent(new Event('storage'));
                    navigate('/admin');
                } else {
                    setError('Invalid admin credentials.');
                }
            } catch (err) {
                console.error("Admin login error", err);
                setError("An error occurred. Please try again.");
            }
        } else {
            setError('Please enter both email and password.');
        }
        setLoading(false);
    };

    return (
        <div className="autocheck-auth-page">
            <div className="autocheck-bg-image" style={{ filter: 'brightness(0.4)' }}></div>
            
            <div className="autocheck-main-content">
                <div className="autocheck-header">
                    <div style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                    }}>
                        <Shield size={32} color="#1e40af" />
                    </div>
                    <h1>Admin Portal Access</h1>
                    <p style={{ color: 'white', textAlign: 'center', marginTop: '10px' }}>Restricted access for authorized personnel only.</p>
                </div>
                
                <div className="autocheck-form-card" style={{ marginTop: '20px' }}>
                    <div className="autocheck-logo">
                        <img src="/logo.png" alt="Vehicle Report Check Logo" />
                    </div>

                    {error && (
                        <div style={{
                            background: '#fee2e2',
                            border: '1px solid #ef4444',
                            color: '#b91c1c',
                            padding: '12px',
                            borderRadius: '6px',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px'
                        }}>
                            <AlertCircle size={16} />
                            {error}
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="autocheck-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Admin Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="autocheck-field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Admin Password *"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="autocheck-submit-btn" disabled={loading} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            {loading ? 'Verifying...' : 'Access Portal'}
                            {!loading && <ArrowRight size={20} />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
