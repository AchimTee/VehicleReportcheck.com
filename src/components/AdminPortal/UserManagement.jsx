import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Trash2, LogIn, Edit2, X, Save } from 'lucide-react';
import { UserService } from '../../services/UserService';

const UserManagement = ({ onLoginAsUser }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');

    // Pagination State
    const [usersData, setUsersData] = useState({ data: [], total: 0, page: 1, totalPages: 1 });
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const [editingUser, setEditingUser] = useState(null);
    const [editForm, setEditForm] = useState({});

    // Fetch Users (Server-side)
    const fetchUsers = React.useCallback(async () => {
        setLoading(true);
        try {
            const result = await UserService.getUsers({
                page: currentPage,
                limit: 10,
                search: searchTerm,
                role: roleFilter === 'all' ? '' : roleFilter
            });
            setUsersData(result);
        } catch (error) {
            console.error("Failed to load users", error);
        } finally {
            setLoading(false);
        }
    }, [currentPage, searchTerm, roleFilter]);

    React.useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Handle Search Debounce
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPage(1); // Reset to page 1 on search change
            fetchUsers();
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm, roleFilter, fetchUsers]);


    const handleDelete = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await UserService.deleteUser(userId);
                fetchUsers(); // Refresh
            } catch (error) {
                console.error("Failed to delete user", error);
                alert("Failed to delete user");
            }
        }
    };

    const handleEditClick = (user) => {
        setEditingUser(user);
        setEditForm({ ...user });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveEdit = async () => {
        try {
            await UserService.updateUser(editingUser.id, editForm);
            setEditingUser(null);
            fetchUsers();
        } catch (error) {
            console.error("Failed to update user", error);
            alert("Failed to update user");
        }
    };

    return (
        <div className="users-view">
            <div className="admin-card">
                <div className="card-header">
                    <h3>All Users <span style={{ fontSize: '0.8em', color: '#64748b' }}>({usersData.total})</span></h3>
                    <div className="header-actions" style={{ display: 'flex', gap: '12px' }}>
                        <select
                            className="form-select"
                            value={roleFilter}
                            onChange={(e) => setRoleFilter(e.target.value)}
                            style={{ padding: '8px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                        >
                            <option value="all">All Roles</option>
                            <option value="User">User</option>
                            <option value="Dealer">Dealer</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <div className="search-bar">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="admin-table-container">
                    {loading ? (
                        <div style={{ padding: '48px', textAlign: 'center', color: '#64748b' }}>Loading users...</div>
                    ) : (
                        <>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Credits</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersData.data.map(user => (
                                        <tr key={user.id}>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="avatar-sm">{user.name ? user.name.charAt(0) : 'U'}</div>
                                                    <span>{user.name || 'Unknown'}</span>
                                                </div>
                                            </td>
                                            <td>{user.email}</td>
                                            <td>{user.phone || '-'}</td>
                                            <td>
                                                <span className={`status-badge ${user.role === 'admin' ? 'active' : 'pending'}`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="font-bold text-blue-600">{user.credits || 0}</span>
                                            </td>
                                            <td>
                                                <span className={`status-badge ${user.status === 'Active' ? 'active' : 'inactive'}`}>
                                                    {user.status || 'Active'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="btn-icon" title="Login as User" onClick={() => onLoginAsUser(user)}>
                                                        <LogIn size={16} />
                                                    </button>
                                                    <button className="btn-icon" title="Edit" onClick={() => handleEditClick(user)}>
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button className="btn-icon delete" title="Delete" onClick={() => handleDelete(user.id)}>
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {usersData.data.length === 0 && (
                                        <tr>
                                            <td colSpan="7" style={{ textAlign: 'center', padding: '32px' }}>
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
                            {usersData.totalPages > 1 && (
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px', gap: '8px', borderTop: '1px solid #e2e8f0' }}>
                                    <button
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', background: currentPage === 1 ? '#f1f5f9' : 'white', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                                    >
                                        Previous
                                    </button>
                                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#64748b' }}>
                                        Page {currentPage} of {usersData.totalPages}
                                    </span>
                                    <button
                                        disabled={currentPage === usersData.totalPages}
                                        onClick={() => setCurrentPage(p => Math.min(usersData.totalPages, p + 1))}
                                        style={{ padding: '6px 12px', border: '1px solid #e2e8f0', borderRadius: '6px', background: currentPage === usersData.totalPages ? '#f1f5f9' : 'white', cursor: currentPage === usersData.totalPages ? 'not-allowed' : 'pointer' }}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Edit User Modal */}
            {editingUser && createPortal(
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
                        zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                    onClick={() => setEditingUser(null)}
                >
                    <div className="admin-card" style={{ width: '100%', maxWidth: '500px', margin: '0 20px', padding: '0', overflow: 'hidden', animation: 'fadeInUp 0.3s ease-out', position: 'relative', zIndex: 2147483647 }} onClick={e => e.stopPropagation()}>
                        <div className="card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0, background: '#f8fafc' }}>
                            <h3>Edit User</h3>
                            <button className="btn-icon" onClick={() => setEditingUser(null)}><X size={20} /></button>
                        </div>
                        <div className="modal-body" style={{ padding: '24px' }}>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={editForm.name}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editForm.email}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={editForm.phone || ''}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Role</label>
                                    <select
                                        name="role"
                                        value={editForm.role}
                                        onChange={handleEditChange}
                                        className="form-select"
                                        style={{ width: '100%' }}
                                    >
                                        <option value="User">User</option>
                                        <option value="Dealer">Dealer</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Status</label>
                                    <select
                                        name="status"
                                        value={editForm.status}
                                        onChange={handleEditChange}
                                        className="form-select"
                                        style={{ width: '100%' }}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group" style={{ marginTop: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Credits</label>
                                <input
                                    type="number"
                                    name="credits"
                                    value={editForm.credits}
                                    onChange={handleEditChange}
                                    className="form-input"
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer" style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: '#f8fafc' }}>
                            <button onClick={() => setEditingUser(null)} className="btn-icon" style={{ width: 'auto', padding: '10px 20px', fontSize: '0.9rem', fontWeight: '600' }}>Cancel</button>
                            <button onClick={handleSaveEdit} style={{ padding: '10px 24px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)' }}>
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

export default UserManagement;
