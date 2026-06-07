import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Plus, Trash2, Tag } from 'lucide-react';
import { CouponService } from '../../services/CouponService';

const CouponManagement = ({ coupons, setCoupons }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCoupon, setNewCoupon] = useState({
        code: '',
        discount: '',
        type: 'fixed',
        expiry: ''
    });

    const handleAddCoupon = async (e) => {
        e.preventDefault();
        try {
            // Need to handle potential server errors
            const added = await CouponService.addCoupon({
                ...newCoupon,
                discount: Number(newCoupon.discount)
            });
            // Map camelCase to snake_case for UI consistency before refresh
            const formattedAdded = {
                ...added,
                usage_count: 0,
                max_uses: added.maxUses
            };
            setCoupons([...coupons, formattedAdded]);
            setIsModalOpen(false);
            setNewCoupon({ code: '', discount: '', type: 'fixed', expiry: '' });
        } catch (err) {
            console.error(err);
            alert(err.message || 'Failed to add coupon');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Delete this coupon?')) {
            const success = await CouponService.deleteCoupon(id);
            if (success) {
                setCoupons(coupons.filter(c => c.id !== id));
            } else {
                alert('Failed to delete coupon');
            }
        }
    };

    return (
        <div className="coupons-view">
            <div className="admin-card">
                <div className="card-header">
                    <h3>Active Coupons</h3>
                    <button className="btn-primary" onClick={() => setIsModalOpen(true)} style={{
                        background: '#1e40af', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
                    }}>
                        <Plus size={16} /> Add Coupon
                    </button>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Discount</th>
                                <th>Type</th>
                                <th>Expiry</th>
                                <th>Usage / Limit</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coupons.map(coupon => (
                                <tr key={coupon.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                                            <Tag size={16} /> {coupon.code}
                                        </div>
                                    </td>
                                    <td>{coupon.discount} {coupon.type === 'percentage' ? '%' : 'GHS'}</td>
                                    <td>{coupon.type}</td>
                                    <td>{coupon.expiry}</td>
                                    <td>{coupon.usage_count || 0} / {coupon.max_uses || '∞'}</td>
                                    <td>
                                        <span className={`status-badge ${new Date(coupon.expiry) < new Date() ? 'expired' : 'active'}`}>
                                            {new Date(coupon.expiry) < new Date() ? 'Expired' : 'Active'}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-icon delete" onClick={() => handleDelete(coupon.id)}><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                            {coupons.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '32px' }}>
                                        No coupons found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Simple Modal */}
            {isModalOpen && createPortal(
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
                        zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="modal-content" style={{
                        background: 'white', padding: '24px', borderRadius: '12px', width: '400px', position: 'relative', zIndex: 2147483647
                    }} onClick={e => e.stopPropagation()}>
                        <h3>Add New Coupon</h3>
                        <form onSubmit={handleAddCoupon}>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={newCoupon.code}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value.toUpperCase() })}
                                    style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>Discount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    required
                                    value={newCoupon.discount}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                                    style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>Type</label>
                                <select
                                    className="form-control"
                                    value={newCoupon.type}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, type: e.target.value })}
                                    style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                >
                                    <option value="fixed">Fixed Amount (GHS)</option>
                                    <option value="percentage">Percentage (%)</option>
                                </select>
                            </div>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>Expiry Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    required
                                    value={newCoupon.expiry}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, expiry: e.target.value })}
                                    style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '24px' }}>
                                <label style={{ display: 'block', marginBottom: '8px' }}>Usage Limit (Optional)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={newCoupon.maxUses || ''}
                                    onChange={(e) => setNewCoupon({ ...newCoupon, maxUses: parseInt(e.target.value) || null })}
                                    placeholder="e.g. 100"
                                    style={{ width: '100%', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div className="form-actions" style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                                <button type="button" onClick={() => setIsModalOpen(false)} style={{
                                    padding: '8px 16px', border: '1px solid #e5e7eb', background: 'white', borderRadius: '6px', cursor: 'pointer'
                                }}>Cancel</button>
                                <button type="submit" style={{
                                    padding: '8px 16px', border: 'none', background: '#1e40af', color: 'white', borderRadius: '6px', cursor: 'pointer'
                                }}>Create Coupon</button>
                            </div>
                        </form>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default CouponManagement;
