import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Save, DollarSign, Package, Edit2, X, Check } from 'lucide-react';
import { PricingService } from '../../services/PricingService';

const PricingManagement = () => {
    const [settings, setSettings] = useState(null);
    const [editingPackage, setEditingPackage] = useState(null);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        const loadSettings = async () => {
            const data = await PricingService.getSettings();
            setSettings(data);
        };
        loadSettings();
    }, []);

    const handleSaveSettings = async () => {
        const success = await PricingService.updateSettings(settings);
        if (success) {
            alert('Pricing settings updated successfully!');
        } else {
            alert('Failed to update settings. Please try again.');
        }
    };

    const handleEditPackage = (e, pkg, type) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Editing package:', pkg.name, type);
        setEditingPackage({ ...pkg, type });
        setEditForm({ ...pkg });
    };

    const handleSavePackage = async () => {
        await PricingService.updatePackage(editingPackage.type, editingPackage.id, editForm);
        // Reload settings
        const data = await PricingService.getSettings();
        setSettings(data);
        setEditingPackage(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: name === 'price' || name === 'credits' || name === 'listings' ? parseInt(value) : value }));
    };

    if (!settings) return <div className="admin-loading" style={{ padding: '40px', textAlign: 'center' }}>Loading pricing settings...</div>;

    return (
        <div className="pricing-management-view">
            <div className="admin-card">
                <div className="card-header">
                    <h3>Pricing & Fees Management</h3>
                    <button
                        onClick={handleSaveSettings}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            background: '#1e40af', color: 'white', border: 'none',
                            padding: '10px 20px', borderRadius: '10px', fontWeight: '600',
                            cursor: 'pointer', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)'
                        }}
                    >
                        <Save size={18} /> Save All Changes
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>


                    {/* Report Packages */}
                    <div>
                        <h4 style={{ margin: '0 0 20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: '#0f172a' }}>
                            <div style={{ padding: '8px', background: '#f3e8ff', borderRadius: '8px' }}><Package size={20} color="#9333ea" /></div>
                            Report Packages
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                            {settings.reportPackages.map(pkg => (
                                <div key={pkg.id} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', position: 'relative', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>{pkg.name}</h5>
                                            <span style={{ fontSize: '0.9rem', color: '#64748b' }}>{pkg.credits} Credits</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => handleEditPackage(e, pkg, 'report')}
                                            className="btn-icon"
                                            style={{ cursor: 'pointer', zIndex: 10 }}
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                    </div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1e40af', marginBottom: '16px' }}>${pkg.price.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            {/* Edit Modal */}
            {editingPackage && createPortal(
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
                        zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                    onClick={() => setEditingPackage(null)}
                >
                    <div className="admin-card" style={{ width: '100%', maxWidth: '500px', margin: '20px', padding: 0, overflow: 'hidden', animation: 'fadeIn 0.3s ease-out', position: 'relative', zIndex: 2147483647 }} onClick={e => e.stopPropagation()}>
                        <div className="card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0, background: '#f8fafc' }}>
                            <h3>Edit Report Package</h3>
                            <button className="btn-icon" onClick={() => setEditingPackage(null)}><X size={20} /></button>
                        </div>
                        <div className="modal-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Package Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Price ($)</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={editForm.price}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Credits</label>
                                <input
                                    type="number"
                                    name="credits"
                                    value={editForm.credits}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer" style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: '#f8fafc' }}>
                            <button onClick={() => setEditingPackage(null)} className="btn-icon" style={{ width: 'auto', padding: '10px 20px', fontSize: '0.9rem', fontWeight: '600' }}>Cancel</button>
                            <button onClick={handleSavePackage} style={{ padding: '10px 24px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)' }}>
                                <Save size={18} /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default PricingManagement;
