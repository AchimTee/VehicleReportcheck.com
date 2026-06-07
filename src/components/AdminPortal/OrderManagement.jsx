import React, { useState } from 'react';
import { Search, Filter, Download, FileText, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const OrderManagement = ({ orders }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredOrders = orders.filter(order => {
        const matchesSearch = (order.vin || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (order.user || '').toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' ? true : order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusIcon = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed': return <CheckCircle size={14} />;
            case 'pending': return <Clock size={14} />;
            case 'failed': return <AlertTriangle size={14} />;
            default: return null;
        }
    };

    return (
        <div className="orders-view">
            <div className="admin-card">
                <div className="card-header">
                    <h3>Order Management</h3>
                    <div className="header-actions" style={{ display: 'flex', gap: '12px' }}>
                        <select
                            className="form-select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                        </select>
                        <div className="search-bar">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search VIN or User..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Date</th>
                                <th>User</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order.id || order.vin}>
                                    <td><span style={{ fontFamily: 'monospace', fontWeight: '600', color: '#0f172a' }}>{order.vin}</span></td>
                                    <td>{order.date || new Date().toLocaleDateString()}</td>
                                    <td>
                                        <div style={{ fontWeight: '500', color: '#334155' }}>{order.user}</div>
                                    </td>
                                    <td>
                                        <span style={{ fontWeight: '700', color: '#1e3a8a' }}>GHS {order.amount || 0}</span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${order.status?.toLowerCase()}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                            {getStatusIcon(order.status)}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${order.paymentStatus === 'Paid' ? 'completed' : 'pending'}`}>
                                            {order.paymentStatus || 'Paid'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" title="View Invoice" onClick={() => alert('Invoice viewer coming soon!')}>
                                                <FileText size={16} />
                                            </button>
                                            <button className="btn-icon" title="View/Download Report" onClick={() => window.open(`/report-view/${order.vin}`, '_blank')}>
                                                <Download size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredOrders.length === 0 && (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center', padding: '48px', color: '#94a3b8' }}>
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;
