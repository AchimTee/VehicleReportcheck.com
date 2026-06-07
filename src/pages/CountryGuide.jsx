import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { countryGuides } from '../data/countryGuidesData';
import VinSearchModal from '../components/VinSearchModal';
import { Search, Globe, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import './CountryGuide.css';

const CountryGuide = () => {
    const { countrySlug } = useParams();
    const [guide, setGuide] = useState(null);
    const [vin, setVin] = useState('');
    const [showVinModal, setShowVinModal] = useState(false);
    const [searchedVin, setSearchedVin] = useState('');

    useEffect(() => {
        if (countrySlug && countryGuides[countrySlug]) {
            setGuide(countryGuides[countrySlug]);
        } else {
            setGuide(null);
        }
    }, [countrySlug]);

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = vin.trim();
        if (trimmed.length > 0) {
            setSearchedVin(trimmed.toUpperCase());
            setShowVinModal(true);
        }
    };

    if (guide === null && countrySlug) {
        return (
            <div className="country-guide-404">
                <h2>Country Guide Not Found</h2>
                <p>We're still working on the guide for this country.</p>
                <Link to="/global-guides" className="back-btn">View All Guides</Link>
            </div>
        );
    }

    if (!guide) return null;

    return (
        <div className="country-guide-page">
            <Helmet>
                <title>How to Buy a Used Car in {guide.name} | Vehicle Report Check</title>
                <meta name="description" content={`Ultimate guide to buying a used car in ${guide.name}. Read about local regulations, top vehicle listing platforms, and how to perform a VIN check.`} />
                <meta name="keywords" content={`buy used car in ${guide.name}, ${guide.name} car marketplaces, any vehicle report search, VIN check ${guide.name}, free vin check, free vehicle look up, carfax ${guide.name}, autocheck ${guide.name}, used cars ${guide.name}, vehicle history report`} />
                <link rel="canonical" href={`https://vehiclereportcheck.com/guide/${countrySlug}`} />
            </Helmet>

            {showVinModal && (
                <VinSearchModal
                    vin={searchedVin}
                    onClose={() => setShowVinModal(false)}
                />
            )}

            <section className="guide-hero">
                <div className="guide-hero-overlay"></div>
                <div className="guide-hero-content relative-z">
                    <img 
                        src={`https://flagcdn.com/w160/${guide.code.toLowerCase()}.png`} 
                        alt={`${guide.name} Flag`} 
                        className="guide-hero-flag"
                    />
                    <h1 className="guide-hero-title">How to Buy a Used Car in {guide.name}</h1>
                    <p className="guide-intro">{guide.intro}</p>
                    
                    <form className="guide-search-form" onSubmit={handleSearch}>
                        <div className="guide-search-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Enter VIN Number to Check History"
                                value={vin}
                                onChange={(e) => setVin(e.target.value)}
                                maxLength={17}
                            />
                            <button type="submit" className="guide-btn-search">
                                <Search size={18} /> Check Now
                            </button>
                        </div>
                        <p className="guide-disclaimer">Running a VIN Check is highly recommended in {guide.name} before buying.</p>
                    </form>
                </div>
            </section>

            <section className="guide-body-section">
                <div className="container">
                    <div className="guide-grid">
                        <div className="guide-main-content">
                            <h2 className="guide-section-title">The Buying Process in {guide.name}</h2>
                            <div className="markdown-content">
                                <ReactMarkdown>{guide.howToBuy}</ReactMarkdown>
                            </div>

                            <div className="inline-vin-cta">
                                <h3>Don't Buy Blind!</h3>
                                <p>Ensure you aren't buying a lemon or a stolen vehicle.</p>
                                <button className="inline-cta-btn" onClick={() => setShowVinModal(true)}>Run a Vehicle Report Check Report Now</button>
                            </div>
                        </div>

                        <div className="guide-sidebar">
                            <div className="sidebar-card">
                                <h3>Top Listing Platforms in {guide.name}</h3>
                                <p>Where to find the best used cars online:</p>
                                <ul className="platform-list">
                                    {guide.platforms.map((plat, idx) => (
                                        <li key={idx} className="platform-item">
                                            <a href={plat.url} target="_blank" rel="noopener noreferrer" className="platform-name">
                                                {plat.name} <ChevronRight size={14} />
                                            </a>
                                            <p className="platform-desc">{plat.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-card dark">
                                <h3>Need a Global Check?</h3>
                                <Globe size={32} className="globe-icon" />
                                <p>Importing a car into {guide.name}? Vehicle Report Check covers vehicles from North America, Europe, and Asia.</p>
                                <Link to="/" className="sidebar-home-link">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CountryGuide;
