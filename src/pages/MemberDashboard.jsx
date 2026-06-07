import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Settings as SettingsIcon, FileText, Car, LogOut, LayoutDashboard, Heart } from 'lucide-react';

import { ReportService } from '../services/ReportService';
import { UserService } from '../services/UserService';
import './MemberDashboard.css';

// Components
import Overview from '../components/MemberDashboard/Overview';
import MyReports from '../components/MemberDashboard/MyReports';
import Settings from '../components/MemberDashboard/Settings';

// Extracted NavItem Component
const NavItem = ({ id, icon, label, activeTab, onClick }) => {
    const Icon = icon;
    return (
        <button
            className={`nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={onClick}
        >
            <Icon size={20} />
            <span>{label}</span>
        </button>
    );
};

const MemberDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State
    const [activeTab, setActiveTab] = useState(() => {
        const query = new URLSearchParams(window.location.search);
        return query.get('tab') || 'overview';
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userReports, setUserReports] = useState([]);

    const [userData, setUserData] = useState({
        name: 'Member User',
        email: 'user@example.com',
        phone: '',
        profilePic: null,
        credits: 0
    });

    // Effects
    useEffect(() => {
        if (location.state?.openReport) {
            // If redirected with a report to open, navigate to it
            navigate(`/report-view/${location.state.openReport}`);
        }
    }, [location, navigate]);

    useEffect(() => {
        const loadDashboardData = async () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsed = JSON.parse(storedUser);

                // Redirect Admins to Admin Portal
                if (parsed.role === 'Admin' || parsed.email === 'support@vehiclereportcheck.com') {
                    navigate('/admin');
                    return;
                }

                try {
                    // Update user info
                    const freshUser = await UserService.getUserByEmail(parsed.email) || parsed;

                    setUserData(prev => ({
                        ...prev,
                        name: freshUser.name || 'Member User',
                        email: freshUser.email || 'user@example.com',
                        phone: freshUser.phone || '',
                        profilePic: freshUser.profilePic || null,
                        credits: freshUser.credits || 0
                    }));

                    // Sync fresh data back to local storage so other components (like VinSearchModal) have the latest credits
                    localStorage.setItem('user', JSON.stringify(freshUser));
                    localStorage.setItem('vehiclereportcheck_user', JSON.stringify(freshUser));

                    // Load Reports
                    const reports = await ReportService.getUserReports(freshUser.email);

                    setUserReports(reports);
                } catch (error) {
                    console.error("Error loading dashboard", error);
                }
            } else {
                navigate('/login');
            }
        };
        loadDashboardData();
    }, [navigate]);

    // Handlers
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleViewReport = (vin) => {
        navigate(`/report-view/${vin}`);
    };

    const handleSaveProfile = () => {
        const storedUser = localStorage.getItem('user');
        let updatedUser = storedUser ? JSON.parse(storedUser) : {};
        updatedUser = { ...updatedUser, name: userData.name, profilePic: userData.profilePic };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert('Profile updated successfully!');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData(prev => ({ ...prev, profilePic: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Render Content based on Tab
    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <Overview user={userData} reports={userReports} credits={userData.credits} />;
            case 'reports':
                return <MyReports userReports={userReports} handleViewReport={handleViewReport} />;
            case 'settings':
                return <Settings
                    userData={userData}
                    setUserData={setUserData}
                    handleSaveProfile={handleSaveProfile}
                    handleImageUpload={handleImageUpload}
                />;
            default:
                return <Overview user={userData} reports={userReports} credits={userData.credits} />;
        }
    };

    const toggleTab = (id) => {
        setActiveTab(id);
        setSidebarOpen(false);
    };

    return (
        <div className="dashboard-container">
            {/* Mobile Sidebar Toggle */}
            <div className="mobile-header md:hidden">
                <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <Menu size={24} />
                </button>
                <span className="mobile-title">My Dashboard</span>
            </div>

            {/* Sidebar */}
            <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="user-profile-brief">
                        <div className="avatar-sm">
                            {userData.profilePic ? (
                                <img src={userData.profilePic} alt="Profile" />
                            ) : (
                                userData.name.charAt(0)
                            )}
                        </div>
                        <div className="user-info">
                            <h4>{userData.name}</h4>
                            <span>Member</span>
                        </div>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <NavItem id="overview" icon={LayoutDashboard} label="Overview" activeTab={activeTab} onClick={() => toggleTab('overview')} />
                    <NavItem id="reports" icon={FileText} label="My Reports" activeTab={activeTab} onClick={() => toggleTab('reports')} />
                    <NavItem id="settings" icon={SettingsIcon} label="Settings" activeTab={activeTab} onClick={() => toggleTab('settings')} />
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
            )}

            {/* Main Content */}
            <main className="dashboard-main">
                <div className="top-bar">
                    <div className="page-title">
                        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                        <p>Manage your account and vehicles</p>
                    </div>
                </div>

                <div className="content-area">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default MemberDashboard;
