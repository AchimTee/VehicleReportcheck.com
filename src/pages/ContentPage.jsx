import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { pageContent } from '../data/pageContent';
import VinSearchModal from '../components/VinSearchModal';
import { Helmet } from 'react-helmet-async';
import './ContentPage.css';

const ContentPage = () => {
    const { slug } = useParams();
    const data = pageContent[slug] || pageContent['default'] || { title: 'Not Found', content: 'Page not found.' };

    const [vin, setVin] = useState('');
    const [showVinModal, setShowVinModal] = useState(false);
    const [searchedVin, setSearchedVin] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = vin.trim();
        if (trimmed.length > 0) {
            setSearchedVin(trimmed.toUpperCase());
            setShowVinModal(true);
        }
    };

    return (
        <div className="content-page-wrapper">
            <Helmet>
                <title>{data.title} | Vehicle Report Check</title>
                <meta name="description" content={`Read about ${data.title}. Perform a free VIN check and get your vehicle report today.`} />
            </Helmet>
            {showVinModal && (
                <VinSearchModal
                    vin={searchedVin}
                    onClose={() => setShowVinModal(false)}
                />
            )}
            
            <div className="content-hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
                <div className="content-hero-overlay"></div>
                <div className="container content-hero-inner">
                    <h1>{data.title}</h1>
                    {data.subtitle && <p className="subtitle">{data.subtitle}</p>}
                </div>
            </div>

            <div className="container content-main">
                <div className="content-body">
                    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    {(slug === 'affiliates' || slug === 'for-dealers') && (
                        <div className="page-contact-form" style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ marginBottom: '20px', color: '#0f172a' }}>Reach Out to Us</h3>
                            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you shortly.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontWeight: '500', color: '#475569' }}>Name</label>
                                    <input type="text" placeholder="Your name" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
                                </div>
                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontWeight: '500', color: '#475569' }}>Email</label>
                                    <input type="email" placeholder="Your email" required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
                                </div>
                                <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontWeight: '500', color: '#475569' }}>Message / Inquiry</label>
                                    <textarea rows="5" placeholder="Tell us about your business..." required style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', resize: 'vertical' }}></textarea>
                                </div>
                                <button type="submit" className="btn-comp-filled gradient-bg" style={{ marginTop: '10px', padding: '14px', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>Send Message</button>
                            </form>
                        </div>
                    )}
                </div>
                
                <aside className="content-sidebar">
                    <div className="sidebar-widget">
                        <h3>Run a Vehicle Report Check Report</h3>
                        <p>Enter your VIN below to get a detailed vehicle history report instantly.</p>
                        <form className="sidebar-form" onSubmit={handleSearch}>
                            <input 
                                type="text" 
                                placeholder="Enter VIN Number" 
                                required 
                                value={vin}
                                onChange={(e) => setVin(e.target.value)}
                                maxLength={17}
                            />
                            <button type="submit" className="btn-comp-filled gradient-bg" style={{width: '100%', marginTop: '10px'}}>Check VIN</button>
                        </form>
                    </div>
                    <div className="sidebar-widget">
                        <h3>Related Topics</h3>
                        <ul>
                            <li><Link to="/p/vin-decoder">Free VIN Decoder</Link></li>
                            <li><Link to="/p/carfax-alternatives">Carfax Alternatives</Link></li>
                            <li><Link to="/p/window-sticker-by-vin">Window Sticker Lookup</Link></li>
                            <li><Link to="/p/auction-history-by-vin">Auction History & Photos</Link></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ContentPage;
