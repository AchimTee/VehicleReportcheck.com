import React from 'react';
import { Users, Car, DollarSign, FileText, TrendingUp, Clock, Activity } from 'lucide-react';

const AdminDashboard = ({ users = [], orders = [], payments = [] }) => {
    // Calculate stats
    const totalUsers = users.length;
    const totalRevenue = payments.reduce((sum, p) => sum + (p.status === 'Completed' ? p.amount : 0), 0);
    const totalReports = orders.length;

    // Simulate simple chart heights
    // Simulate simple chart heights determined by index
    const getActivityHeight = (index) => Math.max(20, ((index * 13) % 80) + 20) + '%';

    return (
        <div className="dashboard-scroll">
            {/* Quick Stats Grid */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div className="stat-card admin-card" style={{ marginBottom: 0 }}>
                    <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div className="stat-icon" style={{ padding: '12px', background: '#eff6ff', borderRadius: '12px', color: '#1e40af' }}>
                            <Users size={24} />
                        </div>
                        <span className="stat-trend positive" style={{ color: '#1e3a8a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', background: '#dcfce7', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>
                            <TrendingUp size={14} /> +12%
                        </span>
                    </div>
                    <div className="stat-content">
                        <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>{totalUsers}</h3>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Total Users</p>
                    </div>
                    <div className="stat-progress" style={{ marginTop: '16px', height: '6px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '75%', height: '100%', background: '#1e40af', borderRadius: '4px' }}></div>
                    </div>
                </div>



                <div className="stat-card admin-card" style={{ marginBottom: 0 }}>
                    <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div className="stat-icon" style={{ padding: '12px', background: '#fff7ed', borderRadius: '12px', color: '#f97316' }}>
                            <DollarSign size={24} />
                        </div>
                        <span className="stat-trend positive" style={{ color: '#1e3a8a', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', background: '#dcfce7', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>
                            <TrendingUp size={14} /> +8%
                        </span>
                    </div>
                    <div className="stat-content">
                        <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>
                            <span style={{ fontSize: '1.2rem', verticalAlign: 'middle', marginRight: '4px' }}>GHS</span>
                            {totalRevenue.toLocaleString()}
                        </h3>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Total Revenue</p>
                    </div>
                    <div className="stat-progress" style={{ marginTop: '16px', height: '6px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '60%', height: '100%', background: '#f97316', borderRadius: '4px' }}></div>
                    </div>
                </div>

                <div className="stat-card admin-card" style={{ marginBottom: 0 }}>
                    <div className="stat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div className="stat-icon" style={{ padding: '12px', background: '#f5f3ff', borderRadius: '12px', color: '#8b5cf6' }}>
                            <FileText size={24} />
                        </div>
                        <span className="stat-trend" style={{ color: '#6366f1', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px', background: '#e0e7ff', padding: '4px 10px', borderRadius: '20px', fontWeight: '600' }}>
                            All Time
                        </span>
                    </div>
                    <div className="stat-content">
                        <h3 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 4px', color: '#0f172a' }}>{totalReports}</h3>
                        <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>Reports Generated</p>
                    </div>
                    <div className="stat-progress" style={{ marginTop: '16px', height: '6px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '90%', height: '100%', background: '#8b5cf6', borderRadius: '4px' }}></div>
                    </div>
                </div>
            </div>

            {/* Dashboard Main Content */}
            <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>

                {/* Visual Chart Placeholder */}
                <div className="chart-section admin-card" style={{ gridColumn: '1 / -1' }}>
                    <div className="card-header">
                        <h3>Revenue Overview</h3>
                        <select className="form-select" style={{ width: 'auto' }}>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className="chart-bars" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', padding: '20px 0', borderBottom: '1px solid #e2e8f0' }}>
                        {[...Array(14)].map((_, i) => (
                            <div key={i} style={{
                                width: '4%',
                                height: getActivityHeight(i),
                                background: i % 2 === 0 ? '#1e40af' : '#cbd5e1',
                                borderRadius: '4px 4px 0 0',
                                transition: 'height 0.5s ease'
                            }}></div>
                        ))}
                    </div>
                    <div className="chart-labels" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', color: '#64748b', fontSize: '0.8rem' }}>
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                <div className="recent-activity-card admin-card">
                    <div className="card-header">
                        <h3>Recent Transactions</h3>
                    </div>
                    <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {payments.slice(0, 5).map(p => (
                            <div key={p.id} className="activity-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: '12px', background: '#f8fafc' }}>
                                <div className="activity-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a', flexShrink: 0 }}>
                                    <DollarSign size={18} />
                                </div>
                                <div className="activity-content" style={{ flex: 1 }}>
                                    <p style={{ margin: '0 0 4px', fontWeight: '500', fontSize: '0.95rem' }}>Payment from <strong>{p.user}</strong></p>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={12} /> {p.date}
                                    </span>
                                </div>
                                <div className="activity-amount" style={{ fontWeight: '700', color: '#1e3a8a' }}>
                                    + GHS {p.amount}
                                </div>
                            </div>
                        ))}
                        {payments.length === 0 && <p className="text-secondary">No recent transactions.</p>}
                    </div>
                </div>

                <div className="quick-actions-card admin-card">
                    <div className="card-header">
                        <h3>Quick Reports</h3>
                    </div>
                    <div className="activity-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {orders.slice(0, 5).map(order => (
                            <div key={order.id} className="activity-item" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: '12px', background: '#f8fafc' }}>
                                <div className="activity-icon" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e40af', flexShrink: 0 }}>
                                    <FileText size={18} />
                                </div>
                                <div className="activity-content" style={{ flex: 1 }}>
                                    <p style={{ margin: '0 0 4px', fontWeight: '500', fontSize: '0.95rem' }}>Report for <strong>{order.vin}</strong></p>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{order.date}</span>
                                </div>
                            </div>
                        ))}
                        {orders.length === 0 && <p className="text-secondary">No recent reports.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
