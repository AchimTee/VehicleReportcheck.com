import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VinSearchModal from '../VinSearchModal';
import {
    Car, FileText, CreditCard, Plus, Search
} from 'lucide-react';


const StatCard = ({ icon, label, value, color, trend, onClick, actionLabel }) => {
    const Icon = icon;
    return (
        <div className="stat-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <div className="stat-header">
                <div className="stat-icon" style={{ backgroundColor: `${color}15`, color: color }}>
                    <Icon size={24} />
                </div>
                {trend && <span className="stat-trend positive">+{trend}%</span>}
                {actionLabel && <span className="stat-trend" style={{ background: color, color: 'white' }}>{actionLabel}</span>}
            </div>
            <div className="stat-info">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
            </div>
        </div>
    );
};



const Overview = ({ user, reports, credits }) => {
    const navigate = useNavigate();
    const [showVinModal, setShowVinModal] = useState(false);

    return (
        <div className="overview-container">
            {showVinModal && (
                <VinSearchModal
                    onClose={() => setShowVinModal(false)}
                />
            )}
            {/* Welcome Banner */}
            <div className="welcome-banner">
                <div className="welcome-text">
                    <h1>Welcome back, {user.name.split(' ')[0]}! 👋</h1>
                    <p>Here's what's happening with your account today.</p>
                </div>
                <div className="welcome-actions">
                    <button className="btn-secondary" onClick={() => navigate('/pricing', { state: { type: 'report' } })}>
                        <Plus size={18} /> Buy Credits
                    </button>
                    <button className="btn-primary" onClick={() => setShowVinModal(true)}>
                        <Search size={18} /> Check VIN
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <StatCard
                    icon={CreditCard}
                    label="Credits Available"
                    value={credits}
                    color="#1e3a8a"
                    actionLabel="Buy More"
                    onClick={() => navigate('/pricing', { state: { type: 'report' } })}
                />
                <StatCard
                    icon={FileText}
                    label="Reports Generated"
                    value={reports.length}
                    color="#9333ea"
                    onClick={() => navigate('?tab=reports')}
                />
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="card-header">
                        <h3>Recent Activity</h3>

                    </div>
                    <div className="activity-list">
                        {reports.slice(0, 3).map(report => (
                            <div key={report.id} className="activity-item">
                                <div className="activity-icon bg-purple-100 text-purple-600">
                                    <FileText size={18} />
                                </div>
                                <div className="activity-details">
                                    <h4>Vehicle Report Generated</h4>
                                    <p>{report.year} {report.make} {report.model}</p>
                                    <span className="activity-time">{report.date}</span>
                                </div>
                            </div>
                        ))}
                        {reports.length === 0 && (
                            <div className="empty-state">
                                <p>No recent activity to show.</p>
                            </div>
                        )}
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Overview;
