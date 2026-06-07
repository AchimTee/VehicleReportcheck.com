import React, { useState } from 'react';
import { DollarSign, CreditCard, Smartphone, Search } from 'lucide-react';

const PaymentManagement = ({ payments = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [methodFilter, setMethodFilter] = useState('all');
    const [statusFilter, setStatusFilter] = useState('all');

    const filteredPayments = payments.filter(payment => {
        const idStr = String(payment.id || payment.clientReference || payment.client_reference || '');
        const userStr = String(payment.user || payment.customerName || payment.customerEmail || payment.customer_phone || payment.customerPhone || '');

        const matchesSearch = idStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
            userStr.toLowerCase().includes(searchTerm.toLowerCase());

        // Normalize Method check (handle snake_case or missing method)
        // Note: Payment details might be a string JSON or object. 
        // We'll rely on what's available or default to 'Unknown' in filter logic if needed.
        // For now, if method is missing, we might show it in 'All' but not specific categories unless mapped.
        // Let's match loosely if method is not explicit.
        const pMethod = payment.method || (payment.payment_details ? 'Mobile Money' : 'Unknown');
        // ^ simplistic mapping for now as we don't parse deep JSON here yet.

        const matchesMethod = methodFilter === 'all' ? true : String(pMethod).includes(methodFilter); // approximate match

        const statusStr = String(payment.status || 'pending');
        const matchesStatus = statusFilter === 'all' ? true : statusStr.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesMethod && matchesStatus;
    });

    return (
        <div className="payments-view">
            <div className="admin-card">
                <div className="card-header">
                    <h3>Payment Transactions</h3>
                    <div className="header-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <select
                            className="form-select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                        >
                            <option value="all">All Statuses</option>
                            <option value="Paid">Paid</option>
                            <option value="Pending">Pending</option>
                            <option value="Failed">Failed</option>
                        </select>
                        <select
                            className="form-select"
                            value={methodFilter}
                            onChange={(e) => setMethodFilter(e.target.value)}
                            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                        >
                            <option value="all">All Methods</option>
                            <option value="Card">Card</option>
                            <option value="Mobile Money">Mobile Money</option>
                        </select>
                        <div className="search-bar">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search ID or User..."
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
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>User</th>
                                <th>Amount</th>
                                <th>Method</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPayments.map((payment, index) => (
                                <tr key={payment.id || payment.clientReference || payment.client_reference || `pay-${index}`}>
                                    <td><span style={{ fontFamily: 'monospace' }}>{payment.id || payment.clientReference || payment.client_reference || 'N/A'}</span></td>
                                    <td>{(payment.date || payment.created_at) ? new Date(payment.date || payment.created_at).toLocaleDateString() : 'N/A'}</td>
                                    <td>{payment.user || payment.customerName || payment.customerEmail || payment.customer_phone || payment.customerPhone || 'Guest'}</td>
                                    <td>${Number(payment.amount || 0).toFixed(2)}</td>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            {/* Heuristic for icon */}
                                            {(payment.method === 'Card') ? <CreditCard size={16} /> : <Smartphone size={16} />}
                                            {payment.method || 'Mobile Money'}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${payment.status ? payment.status.toLowerCase() : 'pending'}`}>
                                            {payment.status || 'Pending'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {filteredPayments.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '32px' }}>
                                        No payments found.
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

export default PaymentManagement;
