import React from 'react';
import { LayoutDashboard, Car, Heart, FileText, Settings as SettingsIcon, LogOut } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen, userData, onLogout }) => {
    return (
        <aside className={`dashboard-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="user-profile-brief">
                    <div className="avatar-sm">
                        {userData.profilePic ? <img src={userData.profilePic} alt="User" /> : userData.name.charAt(0)}
                    </div>
                    <div className="user-info">
                        <h4>{userData.name}</h4>
                        <span>Member</span>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                <button className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                    <LayoutDashboard size={20} /> Dashboard
                </button>
                <button className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
                    <FileText size={20} /> History Reports
                </button>
                <button className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                    <SettingsIcon size={20} /> Settings
                </button>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={onLogout}>
                    <LogOut size={20} /> Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
