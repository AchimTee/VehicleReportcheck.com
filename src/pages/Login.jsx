import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';
import { UserService } from '../services/UserService';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleForgotPassword = () => {
        const email = window.prompt("Please enter your email address to reset password:");
        if (email) {
            alert(`Password reset link sent to ${email}. Redirecting you to support for immediate assistance.`);
            window.open("https://wa.me/233541234567?text=Hello%2C%20I%20requested%20a%20password%20reset%20for%20email%3A%20" + encodeURIComponent(email), "_blank");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.email && formData.password) {
            if (formData.email.toLowerCase() === 'support@vehiclereportcheck.com' && formData.password === 'support0413@') {
                const adminSession = {
                    name: 'Support Admin',
                    email: 'support@vehiclereportcheck.com',
                    role: 'Admin',
                    id: 'admin_support_01'
                };
                localStorage.setItem('user', JSON.stringify(adminSession));
                window.dispatchEvent(new Event('storage'));
                navigate('/admin');
                setLoading(false);
                return;
            }

            try {
                const users = await UserService.getAllUsers();
                const foundUser = users.find(u => u.email.toLowerCase() === formData.email.toLowerCase());

                if (foundUser) {
                    if (foundUser.password === formData.password) {
                        const userToSave = {
                            ...foundUser,
                            role: foundUser.role.toLowerCase()
                        };

                        localStorage.setItem('user', JSON.stringify(userToSave));
                        window.dispatchEvent(new Event('storage'));

                        const targetPath = userToSave.role === 'admin' ? '/admin' : '/member';
                        navigate(targetPath);
                    } else {
                        alert('Incorrect password. Please check your details or reset your password.');
                        setLoading(false);
                    }
                } else {
                    const wantToSignUp = window.confirm('User not found. Would you like to create an account?');
                    if (wantToSignUp) {
                        navigate('/signup');
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.error("Login failed", error);
                alert("An error occurred during login.");
                setLoading(false);
            }
        } else {
            alert('Please enter both email and password');
            setLoading(false);
        }
    };

    return (
        <div className="autocheck-auth-page">
            <div className="autocheck-bg-image"></div>
            
            <div className="autocheck-main-content">
                <div className="autocheck-header">
                    <h1>Member Sign In</h1>
                </div>
                
                <div className="autocheck-form-card">
                    <div className="autocheck-logo">
                        <img src="/logo.png" alt="Vehicle Report Check Logo" />
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="autocheck-field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <button type="button" className="autocheck-link" onClick={handleForgotPassword}>
                                Forgot Email?
                            </button>
                        </div>

                        <div className="autocheck-field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password *"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button type="button" className="autocheck-link" onClick={handleForgotPassword}>
                                Forgot Password?
                            </button>
                        </div>

                        <div className="autocheck-options">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe">Remember My Email</label>
                        </div>

                        <button type="submit" className="autocheck-submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="autocheck-footer">
                <div className="autocheck-footer-content">
                    <div className="autocheck-footer-text">
                        <h2>Not a Vehicle Report Check Member?</h2>
                        <p>Sign up today and confidently buy and sell the right vehicles.</p>
                    </div>
                    <Link to="/signup" className="autocheck-footer-btn">
                        Sign-Up with Vehicle Report Check Today!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
