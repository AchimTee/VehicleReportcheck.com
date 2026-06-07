import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut, LayoutDashboard } from 'lucide-react';
import './Navbar.css';
import logo from '../../assets/logo-new.png';

// All footer links grouped by section
const RESOURCES = [
    {
        heading: 'Vehicle Original Info',
        links: [
            { label: 'Window Sticker by VIN', to: '/p/window-sticker-by-vin' },
            { label: 'Build Sheet by VIN',    to: '/p/build-sheet-by-vin' },
            { label: 'Options by VIN',        to: '/p/options-by-vin' },
            { label: 'MSRP by VIN',           to: '/p/msrp-by-vin' },
        ]
    },
    {
        heading: 'Vehicle History',
        links: [

            { label: 'Service Records by VIN',   to: '/p/service-records-by-vin' },
            { label: 'Auction History by VIN',   to: '/p/auction-history-by-vin' },
        ]
    },
    {
        heading: 'VIN Decoding Tools',
        links: [
            { label: 'VIN Decoder',         to: '/p/vin-decoder' },
            { label: 'Classic VIN Decoder', to: '/p/classic-vin-decoder' },
        ]
    },
    {
        heading: 'Resources',
        links: [
            { label: 'Sample Reports',      to: '/sample-report' },
            { label: 'Pricing',             to: '/pricing' },
            { label: 'Blog',                to: '/blogs' },
            { label: 'Carfax Alternatives', to: '/p/carfax-alternatives' },
        ]
    },
    {
        heading: 'Company',
        links: [
            { label: 'Request a Refund', to: '/p/request-refund' },
            { label: 'Contact Us',       to: '/contact' },
            { label: 'Affiliates',       to: '/p/affiliates' },
            { label: 'For Dealers',      to: '/p/for-dealers' },
        ]
    },
];

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const checkLogin = () => {
            setIsLoggedIn(!!localStorage.getItem('user'));
        };
        checkLogin();
        window.addEventListener('storage', checkLogin);

        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);

        const onClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setResourcesOpen(false);
            }
        };
        document.addEventListener('mousedown', onClickOutside);

        return () => {
            window.removeEventListener('storage', checkLogin);
            window.removeEventListener('scroll', onScroll);
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setMobileOpen(false);
        navigate('/login');
        window.dispatchEvent(new Event('storage'));
    };

    const closeAll = () => {
        setMobileOpen(false);
        setResourcesOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">

                    {/* Logo */}
                    <Link to="/" className="navbar-logo" onClick={closeAll}>
                        <img src={logo} alt="Vehicle Report Check" className="logo-img" />
                        <span className="logo-text">Vehicle Report Check</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="nav-menu">
                        {/* VIN Check → homepage */}
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={closeAll}>
                                VIN Check
                            </Link>
                        </li>

                        {/* How to Buy a Used Car */}
                        <li className="nav-item">
                            <Link to="/global-guides" className="nav-link" onClick={closeAll}>
                                How to Buy a Used Car
                            </Link>
                        </li>

                        {/* Sample Reports */}
                        <li className="nav-item">
                            <Link to="/sample-report" className="nav-link" onClick={closeAll}>
                                Sample Reports
                            </Link>
                        </li>

                        {/* Pricing */}
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link" onClick={closeAll}>
                                Pricing
                            </Link>
                        </li>

                        {/* Resources dropdown */}
                        <li className="nav-item nav-item-dropdown" ref={dropdownRef}>
                            <button
                                className={`nav-link nav-dropdown-trigger ${resourcesOpen ? 'active' : ''}`}
                                onClick={() => setResourcesOpen(o => !o)}
                            >
                                Resources <ChevronDown size={14} className={`nav-chevron ${resourcesOpen ? 'open' : ''}`} />
                            </button>

                            {resourcesOpen && (
                                <div className="nav-dropdown-panel">
                                    <div className="nav-dropdown-grid">
                                        {RESOURCES.map((section) => (
                                            <div key={section.heading} className="nav-dropdown-section">
                                                <div className="nav-dropdown-heading">{section.heading}</div>
                                                {section.links.map(link => (
                                                    <Link
                                                        key={link.to}
                                                        to={link.to}
                                                        className="nav-dropdown-link"
                                                        onClick={closeAll}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* Desktop Actions */}
                    <div className="nav-actions">
                        {!isLoggedIn ? (
                            <Link to="/login" className="btn-nav-login">
                                <User size={16} />
                                <span>Log In</span>
                            </Link>
                        ) : (
                            <div className="nav-user-menu">
                                <Link to="/member" className="btn-nav-login">
                                    <LayoutDashboard size={16} />
                                    <span>Dashboard</span>
                                </Link>
                                <button className="btn-nav-logout" onClick={handleLogout} title="Logout">
                                    <LogOut size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="menu-icon" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="mobile-link" onClick={closeAll}>VIN Check</Link>
                    <Link to="/global-guides" className="mobile-link" onClick={closeAll}>How to Buy a Used Car</Link>
                    <Link to="/sample-report" className="mobile-link" onClick={closeAll}>Sample Reports</Link>
                    <Link to="/pricing" className="mobile-link" onClick={closeAll}>Pricing</Link>

                    <div className="mobile-divider">Resources</div>
                    {RESOURCES.map(section => (
                        <React.Fragment key={section.heading}>
                            <div className="mobile-section-label">{section.heading}</div>
                            {section.links.map(link => (
                                <Link key={link.to} to={link.to} className="mobile-link mobile-link-sub" onClick={closeAll}>
                                    {link.label}
                                </Link>
                            ))}
                        </React.Fragment>
                    ))}

                    <div className="mobile-actions">
                        {!isLoggedIn ? (
                            <Link to="/login" className="mobile-cta" onClick={closeAll}>Log In</Link>
                        ) : (
                            <>
                                <Link to="/member" className="mobile-cta" onClick={closeAll}>Dashboard</Link>
                                <button className="mobile-cta mobile-cta-outline" onClick={handleLogout}>Logout</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
