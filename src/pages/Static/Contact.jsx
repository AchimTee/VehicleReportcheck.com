import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './StaticPages.css';

const Contact = () => {
    return (
        <div className="static-page">
            <div className="static-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Get in touch with our team.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info-section">
                    <div className="contact-card">
                        <h3>Get in Touch</h3>
                        <p>Have questions about our reports or marketplace? Our team is ready to help.</p>

                        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                                <Mail size={20} color="#007FFF" />
                                <span>support@vehiclereportcheck.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569' }}>
                                <Phone size={20} color="#007FFF" />
                                <span>+1 613 366-4271</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-section">
                    <div className="static-content">
                        <h2>Send us a Message</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your email" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help?" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
