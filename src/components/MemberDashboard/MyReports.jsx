import React from 'react';
import { ShieldCheck, Car, FileText, Download, Eye, Calendar, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyReports = ({ userReports = [], handleViewReport }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (userReports.length === 0) {
        return (
            <div className="empty-state-container fade-in">
                <div className="empty-state-content">
                    <div className="empty-icon">
                        <ShieldCheck size={64} />
                    </div>
                    <h3>No Reports Generated</h3>
                    <p>Vehicle history reports you purchase will appear here. Check a VIN to get started.</p>
                    <button className="btn-primary" onClick={() => navigate('/')}>
                        Check a VIN
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="history-reports-container fade-in">
            <div className="section-header">
                <div>
                    <h2>Vehicle History Reports</h2>
                    <p>Access and manage your purchased reports</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {user.credits > 0 && (
                        <div className="credits-badge">
                            <Zap size={16} fill="currentColor" />
                            <span>{user.credits} Credit{user.credits !== 1 ? 's' : ''} Available</span>
                        </div>
                    )}
                    <button className="btn-primary" onClick={() => navigate('/')}>
                        New Report
                    </button>
                </div>
            </div>

            <div className="reports-grid">
                {userReports.map((report, index) => (
                    <div key={index} className="report-card">
                        <div className="report-card-header">
                            <div className="vehicle-icon-wrapper">
                                <Car size={24} />
                            </div>
                            <div className="report-status-badge success">
                                <ShieldCheck size={14} />
                                <span>Available</span>
                            </div>
                        </div>

                        <div className="report-card-body">
                            <h3 className="vehicle-title">
                                {report.year} {report.make} {report.model}
                            </h3>
                            <div className="vin-container">
                                <span className="vin-label">VIN:</span>
                                <span className="vin-text">{report.vin}</span>
                            </div>

                            <div className="report-meta">
                                <div className="meta-item">
                                    <Calendar size={14} />
                                    <span>{report.date || 'N/A'}</span>
                                </div>
                                <div className="meta-item">
                                    <FileText size={14} />
                                    <span>Full History</span>
                                </div>
                            </div>
                        </div>

                        <div className="report-card-footer" style={{ padding: '1.25rem', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '0.5rem' }}>
                            <button
                                className="btn-card-primary"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem', background: '#1e40af', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: '500' }}
                                onClick={() => {
                                    if (handleViewReport) {
                                        handleViewReport(report.vin);
                                    }
                                }}
                            >
                                <Eye size={16} />
                                View Report
                            </button>
                            <button 
                                className="btn-card-secondary" 
                                title="View Invoice" 
                                style={{ padding: '0.75rem', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                onClick={() => navigate(`/invoice/${report.vin}`)}
                            >
                                <FileText size={16} />
                            </button>
                            <button 
                                className="btn-card-secondary" 
                                title="Download PDF" 
                                onClick={() => {
                                    if (handleViewReport) {
                                        handleViewReport(report.vin);
                                    }
                                }}
                                style={{ padding: '0.75rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', cursor: 'pointer', color: '#64748b' }}
                            >
                                <Download size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReports;
