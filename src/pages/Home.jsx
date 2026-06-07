import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Search, Globe, FileText, Database, Users, Clock, ShieldCheck, Star, CheckCircle2, XCircle } from 'lucide-react';
import VinSearchModal from '../components/VinSearchModal';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import dashboardVin from '../assets/dashboard_vin.png';
import doorJambVin from '../assets/door_jamb_vin.png';
import vinDecoder from '../assets/vin_decoder.png';
import twoCars from '../assets/two_cars.png';
import epicHeroCar from '../assets/epic_hero_car.png';

const Home = () => {
    const navigate = useNavigate();
    const [searchType, setSearchType] = useState('vin');
    const [vin, setVin] = useState('');
    const [showVinModal, setShowVinModal] = useState(false);
    const [searchedVin, setSearchedVin] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = vin.trim();
        if (trimmed.length > 0) {
            setSearchedVin(trimmed.toUpperCase());
            setShowVinModal(true);
        }
    };

    return (
        <div className="home-page">
            <Helmet>
                <title>Free VIN Check & Vehicle History Report | Vehicle Report Check</title>
                <meta name="description" content="Perform a free VIN check and get instant vehicle history reports globally. The ultimate Carfax and AutoCheck alternative for free vehicle look up, accident history, and mileage check." />
                <meta name="keywords" content="VIN check, free vin check, vehicle history report, free vehicle look up, carfax alternative, autocheck alternative, used car check, check vin number, accident history, global vin check, any vehicle report search" />
                <link rel="canonical" href="https://vehiclereportcheck.com/" />
            </Helmet>
            {showVinModal && (
                <VinSearchModal
                    vin={searchedVin}
                    onClose={() => setShowVinModal(false)}
                />
            )}
            {/* EPIC HERO SECTION */}
            <section className="epic-hero-section">
                <div className="container epic-hero-container">
                    <div className="epic-hero-left">
                        <img src={epicHeroCar} alt="Vehicle History Report" className="epic-hero-image" />
                    </div>
                    <div className="epic-hero-right">
                        <h3 className="epic-subheading">Smart buyers check before they buy.</h3>
                        <h1 className="epic-title">Protect Yourself From Costly Repairs And Hidden Damage</h1>
                        <p className="epic-desc">Get a comprehensive vehicle history report today.</p>
                        
                        <div className="epic-search-widget">
                            <div className="epic-search-tabs">
                                <button type="button" className={`epic-tab ${searchType === 'vin' ? 'active' : ''}`} onClick={() => setSearchType('vin')}>by VIN</button>
                                <button type="button" className={`epic-tab ${searchType === 'plate' ? 'active' : ''}`} onClick={() => setSearchType('plate')}>by US License Plate</button>
                            </div>
                            <form className="epic-search-form" onSubmit={handleSearch}>
                                <div className="epic-input-wrapper">
                                    <input 
                                        type="text" 
                                        placeholder={searchType === 'vin' ? "Enter VIN Number" : "Enter US License Plate"}
                                        value={vin}
                                        onChange={(e) => setVin(e.target.value)}
                                        maxLength={17}
                                        className="epic-search-input"
                                    />
                                    <button type="submit" className="epic-btn-search">Check {searchType === 'vin' ? 'VIN' : 'Plate'} <span style={{marginLeft: '8px'}}>&rsaquo;</span></button>
                                </div>
                            </form>
                            
                            <div className="epic-footer-links">
                                <span>Where <span style={{color: '#64748b', fontWeight: '400'}}>to find the VIN?</span></span>
                                <span className="epic-dot">&bull;</span>
                                <span style={{color: '#64748b', fontWeight: '400'}}>No VIN? <span style={{color: '#00a2ff', fontWeight: '600', cursor: 'pointer'}}>Get Vehicle Report Check reports</span></span>
                                
                                <div className="epic-trust-badges">
                                    <ShieldCheck size={20} color="#64748b" />
                                    <Database size={20} color="#f59e0b" />
                                    <CheckCircle2 size={20} color="#0f172a" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON SECTION */}
            <section className="comparison-section">
                <div className="container comparison-container">
                    <h2 className="comparison-title">More detailed than a Carfax at a fraction of the cost</h2>
                    <h3 className="comparison-subtitle">Compare the reports below</h3>
                    
                    <div className="comparison-grid detailed">
                        {/* CARFAX */}
                        <div className="comp-card carfax-card">
                            <div className="comp-card-top">
                                <h4>Carfax</h4>
                                <div className="comp-price">$44.99</div>
                                <div className="comp-subtitle">Single Report</div>
                            </div>
                            <div className="comp-features">
                                <div className="feature-item no"><XCircle size={16}/><span>Sales listing with photos</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Auction records with photos</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Market value data</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Detailed vehicle specifications <span className="limited-text">((Limited))</span></span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Support for classic vehicles</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Maintenance recommendation</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Ownership history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Accident history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Damage check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Branded title check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Salvage title check</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Ownership history map</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Recalls</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Supports for heavy duty trucks, ATVs, trailers & motorcycles</span></div>
                            </div>
                        </div>
                        
                        {/* VEHICLE REPORT CHECK */}
                        <div className="comp-card vehiclereportcheck-card highlighted">
                            <div className="comp-badge-top">BEST VALUE</div>
                            <div className="comp-card-top">
                                <h4 className="gradient-text">Vehicle Report Check</h4>
                                <div className="comp-price gradient-text">$14.00</div>
                                <div className="comp-subtitle">Single Report</div>
                            </div>
                            <div className="comp-features">
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Sales listing with photos</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Auction records with photos</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Market value data</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Detailed vehicle specifications</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Support for classic vehicles</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Maintenance recommendation</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Ownership history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Accident history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Damage check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Branded title check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Salvage title check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Ownership history map</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Recalls</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Supports for heavy duty trucks, ATVs, trailers & motorcycles</span></div>
                            </div>
                            <button className="btn-comp-filled gradient-bg">View Detailed Report</button>
                        </div>

                        {/* AUTOCHECK */}
                        <div className="comp-card autocheck-card">
                            <div className="comp-card-top">
                                <h4>Autocheck</h4>
                                <div className="comp-price">$29.99</div>
                                <div className="comp-subtitle">Single Report</div>
                            </div>
                            <div className="comp-features">
                                <div className="feature-item no"><XCircle size={16}/><span>Sales listing with photos</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Auction records with photos</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Market value data</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Detailed vehicle specifications <span className="limited-text">((Limited))</span></span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Support for classic vehicles</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Maintenance recommendation</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Ownership history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Accident history</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Damage check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Branded title check</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Salvage title check</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Ownership history map</span></div>
                                <div className="feature-item yes"><CheckCircle2 size={16}/><span>Recalls</span></div>
                                <div className="feature-item no"><XCircle size={16}/><span>Supports for heavy duty trucks, ATVs, trailers & motorcycles</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHERE TO FIND VIN SECTION */}
            <section className="where-vin-section">
                <div className="container">
                    <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.2rem', color: 'var(--text-dark)' }}>Where Can I Find a Car's VIN?</h2>
                    <div className="vin-locations-grid">
                        <div className="vin-location-card">
                            <div className="vin-loc-img-wrapper">
                                <img src={dashboardVin} alt="VIN on Dashboard" className="vin-loc-img" />
                            </div>
                            <h3>The Dashboard</h3>
                            <p>The VIN is usually located on the dashboard of the driver's side of a vehicle. It can be found by standing outside of the car and looking at the corner where the dashboard meets the windshield.</p>
                        </div>
                        <div className="vin-location-card">
                            <div className="vin-loc-img-wrapper">
                                <img src={doorJambVin} alt="VIN on Door Jamb" className="vin-loc-img" />
                            </div>
                            <h3>The Door Jamb</h3>
                            <p>If you don't see the VIN on the dashboard, it can be found by opening the driver's side door and looking inside the door jamb. A VIN is also included on a vehicle's registration, vehicle title and insurance card.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DECODE VIN SECTION */}
            <section className="decode-vin-section" style={{ backgroundColor: '#f8fafc', padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '15px', fontSize: '2.2rem', color: 'var(--text-dark)' }}>How To Decode VIN Number Characters</h2>
                    <p className="text-center decode-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                        There are 17 digits or characters in each vehicle's unique VIN. Here is what each VIN digit represents to help you better understand your vehicle.
                    </p>
                    <div className="decode-image-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={vinDecoder} alt="VIN Decoder Diagram" className="vin-decoder-img" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
                    </div>
                </div>
            </section>

            {/* KNOW BEFORE BUYING SECTION */}
            <section className="know-before-section" style={{ padding: '80px 0' }}>
                <div className="container know-before-container" style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                    <div className="know-before-left" style={{ flex: 1 }}>
                        <h2 className="section-title" style={{ fontSize: '2.2rem', color: 'var(--text-dark)', marginBottom: '20px', lineHeight: '1.3' }}>What Should You Know Before Buying or Selling a Car?</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>Vehicle history reports are important, but they only give some of the answers you should know before buying or selling a vehicle.</p>
                        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.6' }}>Vehicle Report Check Reports are powered by our award-winning data analysis. Try our comprehensive VIN checks to get all of the answers you need, make an informed decision and have peace of mind.</p>
                        <button className="btn-comp-filled gradient-bg" onClick={() => window.scrollTo(0, 0)} style={{ padding: '12px 30px', fontSize: '1.1rem', cursor: 'pointer' }}>Get VIN Reports</button>
                    </div>
                    <div className="know-before-right" style={{ flex: 1 }}>
                        <img src={twoCars} alt="Two Cars" className="two-cars-img" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                    </div>
                </div>
            </section>

            {/* REVIEWS SECTION */}
            <section className="reviews-section">
                <div className="container">
                    <h2 className="gradient-text">What our customers say</h2>
                    <div className="reviews-grid">
                        {[1, 2, 3, 4].map((i) => (
                            <div className="review-card" key={i}>
                                <div className="review-header">
                                    <div className="review-user">Verified Buyer</div>
                                    <div className="review-stars">
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                        <Star size={16} fill="#f59e0b" color="#f59e0b" />
                                    </div>
                                </div>
                                <div className="review-date">Recently</div>
                                <p className="review-text">"Saved me from buying a car with a rolled-back odometer. The report was detailed, easy to read, and absolutely worth the price!"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
