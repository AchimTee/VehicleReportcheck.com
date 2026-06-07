import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './Footer.css';
import achtrexLogo from '../../assets/achtrex_logo.png';
import logo from '../../assets/logo-new.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-goodcar">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand-column">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Vehicle Report Check Logo" className="logo-img" style={{ height: '40px', marginBottom: '10px' }} />
                            <span className="logo-text-footer">VEHICLE REPORT CHECK</span>
                        </Link>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                        </div>
                    </div>
                    
                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h3>Vehicle Original Information</h3>
                            <ul>
                                <li><Link to="/p/window-sticker-by-vin">Window Sticker by VIN</Link></li>
                                <li><Link to="/p/build-sheet-by-vin">Build Sheet by VIN</Link></li>
                                <li><Link to="/p/options-by-vin">Options by VIN</Link></li>
                                <li><Link to="/p/msrp-by-vin">MSRP by VIN</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Vehicle History</h3>
                            <ul>

                                <li><Link to="/p/service-records-by-vin">Service Records by VIN</Link></li>
                                <li><Link to="/p/auction-history-by-vin">Auction History by VIN</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>VIN Decoding Tools</h3>
                            <ul>
                                <li><Link to="/p/vin-decoder">VIN Decoder</Link></li>
                                <li><Link to="/p/classic-vin-decoder">Classic VIN Decoder</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link to="/sample-report">Sample Reports</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/global-guides">Global Buying Guides</Link></li>
                                <li><Link to="/p/carfax-alternatives">Carfax Alternatives</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Company</h3>
                            <ul>

                                <li><Link to="/p/request-refund">Request a Refund</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/p/affiliates">Affiliates</Link></li>
                                <li><Link to="/p/for-dealers">For Dealers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal-links">
                        <Link to="/terms">Vehicle Report Check Terms and Conditions</Link>
                        <span className="separator">|</span>
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link to="/">Your Ad Choices</Link>
                    </div>
                    
                    <div className="copyright">
                        <p>&copy; Vehicle Report Check {currentYear}. All rights reserved.</p>
                        <div className="powered-by">
                            <span>Designed & Powered by</span>
                            <img src={achtrexLogo} alt="Achtrex" className="achtrex-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
