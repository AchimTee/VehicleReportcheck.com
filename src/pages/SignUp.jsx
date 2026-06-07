import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';
import { UserService } from '../services/UserService';
import './Login.css'; // Reusing the same CSS

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        role: 'user'
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await UserService.addUser(formData);
            if (result) {
                localStorage.setItem('user', JSON.stringify(result));
                window.dispatchEvent(new Event('storage'));
                const targetPath = result.role === 'admin' ? '/admin' : '/member';
                navigate(targetPath);
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="autocheck-auth-page">
            <div className="autocheck-bg-image"></div>
            
            <div className="autocheck-main-content">
                <div className="autocheck-header">
                    <h1>Create Your Account</h1>
                </div>
                
                <div className="autocheck-form-card">
                    <div className="autocheck-logo">
                        <img src="/logo.png" alt="Vehicle Report Check Logo" />
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="autocheck-field">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="autocheck-field">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="autocheck-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="autocheck-field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Create Password *"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="autocheck-field">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            >
                                <option value="user">I am a Car Buyer/Seller</option>
                                <option value="dealer">I am a Car Dealer</option>
                            </select>
                        </div>

                        <button type="submit" className="autocheck-submit-btn" disabled={loading} style={{ marginTop: '10px' }}>
                            {loading ? 'Submitting...' : 'Sign Up'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="autocheck-footer">
                <div className="autocheck-footer-content">
                    <div className="autocheck-footer-text">
                        <h2>Already a Vehicle Report Check Member?</h2>
                        <p>Sign in to your account to view reports and manage your listings.</p>
                    </div>
                    <Link to="/login" className="autocheck-footer-btn">
                        Sign-In to Vehicle Report Check Today!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
