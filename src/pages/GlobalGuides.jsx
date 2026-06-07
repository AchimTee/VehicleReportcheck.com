import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { countryGuides } from '../data/countryGuidesData';
import { Globe, ArrowRight } from 'lucide-react';
import happyCustomer from '../assets/happy_customer.png';
import './GlobalGuides.css';

const GlobalGuides = () => {
    const countries = Object.entries(countryGuides).map(([slug, data]) => ({
        slug,
        ...data
    })).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="global-guides-page">
            <Helmet>
                <title>Global Used Car Buying Guides | Vehicle Report Check</title>
                <meta name="description" content="Explore our detailed guides on how to buy used cars in countries around the world. Find local platforms, regulations, and VIN check requirements." />
                <meta name="keywords" content="buy used car internationally, global vehicle marketplaces, any vehicle report search, VIN check, free vin check, free vehicle look up, carfax, autocheck, import used cars, worldwide car buying guide" />
                <link rel="canonical" href="https://vehiclereportcheck.com/global-guides" />
            </Helmet>

            <section className="global-hero">
                <div className="global-hero-overlay"></div>
                <div className="container relative-z">
                    <h1 className="global-hero-title">Global Used Car Buying Guides</h1>
                    <p className="global-hero-desc">Whether you're buying locally or importing internationally, knowing the rules of the local market is crucial. Select a country below to read our highly detailed buying guides and find the top local vehicle marketplaces.</p>
                </div>
            </section>

            <section className="global-grid-section">
                <div className="container">
                    <div className="global-grid">
                        {countries.map((country) => (
                            <Link to={`/guide/${country.slug}`} key={country.slug} className="country-card">
                                <div className="country-card-header">
                                    <img 
                                        src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} 
                                        alt={`${country.name} Flag`} 
                                        className="country-flag-icon"
                                    />
                                    <h2>{country.name}</h2>
                                </div>
                                <p className="country-card-intro">{country.intro.substring(0, 100)}...</p>
                                <div className="country-card-footer">
                                    <span>Read Full Guide</span>
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="global-add-more">
                        <div className="add-more-img-wrapper">
                            <img src={happyCustomer} alt="Happy Car Buyer" />
                        </div>
                        <div className="add-more-content">
                            <h3>Don't see your country?</h3>
                            <p>We are constantly adding new guides to our database. In the meantime, you can still run a Vehicle Report Check VIN Check to protect yourself anywhere in the world.</p>
                            <Link to="/" className="btn-comp-filled gradient-bg">Run Global VIN Check</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalGuides;
