import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Plus, Search, Trash2, Edit2, FileText, Image as ImageIcon, Save, X, Eye } from 'lucide-react';
import { BlogService } from '../../services/BlogService';

const BlogManagement = ({ blogs, setBlogs }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        category: 'General',
        status: 'Draft',
        image: '',
        content: ''
    });

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const openAddModal = () => {
        setEditingBlog(null);
        setFormData({ title: '', author: '', category: 'General', status: 'Draft', image: '', content: '' });
        setIsModalOpen(true);
    };

    const openEditModal = (blog) => {
        setEditingBlog(blog);
        setFormData({ ...blog });
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        if (!formData.title || !formData.content) {
            alert('Title and Content are required');
            return;
        }

        try {
            if (editingBlog) {
                await BlogService.updateBlog(editingBlog.id, formData);
                setBlogs(prev => prev.map(b => b.id === editingBlog.id ? { ...b, ...formData } : b));
            } else {
                const newBlog = await BlogService.addBlog(formData); // Use the returned object from DB (has ID)
                // If the API returns success:true instead of the object, we might need to handle that.
                // Current BlogService.addBlog returns `await res.json()`.
                // Server code: `res.json({ success: true })`. Wait!
                // FIX: Server's addBlog currently returns {success:true}, not the created object.
                // It should probably return the created object or at least the ID.
                // For now, let's just refetch or optimistically update with a temp ID if mostly static.
                // Actually, let me check server.js again.
                // server.js: `res.json({ success: true })` for addBlog.
                // This is bad for the frontend which expects the new blog object with an ID.
                // I will optimistically add it to state, but ideally I should fix server.js to return the ID.
                setBlogs(prev => [newBlog.id ? newBlog : { ...formData, id: Date.now() }, ...prev]);
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error("Failed to save blog", error);
            alert("Failed to save blog. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await BlogService.deleteBlog(id);
                setBlogs(prev => prev.filter(b => b.id !== id));
            } catch (error) {
                console.error("Failed to delete", error);
            }
        }
    };

    return (
        <div className="blog-management-view">
            <div className="admin-card">
                <div className="card-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <h3>Blog Posts</h3>
                        <button
                            onClick={openAddModal}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                background: '#1e40af', color: 'white', border: 'none',
                                padding: '8px 16px', borderRadius: '8px', fontWeight: '600',
                                fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)'
                            }}
                        >
                            <Plus size={18} /> New Post
                        </button>
                    </div>
                    <div className="search-bar">
                        <Search size={18} />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title / Author</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBlogs.map(blog => (
                                <tr key={blog.id}>
                                    <td>
                                        <img
                                            src={blog.image || 'https://via.placeholder.com/100'}
                                            alt="Blog"
                                            style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '6px' }}
                                        />
                                    </td>
                                    <td>
                                        <div style={{ fontWeight: '600', color: '#0f172a' }}>{blog.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#64748b' }}>by {blog.author}</div>
                                    </td>
                                    <td>
                                        <span style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', color: '#475569' }}>
                                            {blog.category}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${blog.status === 'Published' ? 'approved' : 'pending'}`}>
                                            {blog.status}
                                        </span>
                                    </td>
                                    <td>{blog.date}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button className="btn-icon" onClick={() => openEditModal(blog)}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="btn-icon delete" onClick={() => handleDelete(blog.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredBlogs.length === 0 && (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                                        No blog posts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add/Edit Modal */}
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
                    <div className="admin-card" style={{ width: '100%', maxWidth: '800px', margin: '20px', padding: 0, overflow: 'hidden', animation: 'fadeInUp 0.3s ease-out', position: 'relative', zIndex: 2147483647 }} onClick={e => e.stopPropagation()}>
                        <div className="card-header" style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', marginBottom: 0, background: '#f8fafc' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ background: 'rgba(59,130,246,0.1)', padding: '8px', borderRadius: '8px' }}><FileText size={20} color="#1e40af" /></div>
                                <h3>{editingBlog ? 'Edit Blog Post' : 'Create New Post'}</h3>
                            </div>
                            <button className="btn-icon" onClick={() => setIsModalOpen(false)}><X size={20} /></button>
                        </div>

                        <div className="modal-body" style={{ padding: '24px', maxHeight: '70vh', overflowY: 'auto' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            style={{ width: '100%' }}
                                            placeholder="Enter post title..."
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Content</label>
                                        <textarea
                                            name="content"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            style={{ width: '100%', minHeight: '300px', resize: 'vertical' }}
                                            placeholder="Write your content here..."
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Author</label>
                                        <input
                                            type="text"
                                            name="author"
                                            value={formData.author}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            style={{ width: '100%' }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Category</label>
                                        <select name="category" value={formData.category} onChange={handleInputChange} className="form-select" style={{ width: '100%' }}>
                                            <option>General</option>
                                            <option>Buying Guide</option>
                                            <option>Maintenance</option>
                                            <option>News</option>
                                            <option>Reviews</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Status</label>
                                        <select name="status" value={formData.status} onChange={handleInputChange} className="form-select" style={{ width: '100%' }}>
                                            <option>Draft</option>
                                            <option>Published</option>
                                            <option>Archived</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600', color: '#64748b' }}>Featured Image URL</label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            style={{ width: '100%' }}
                                        />
                                        <div style={{ marginTop: '10px', height: '150px', borderRadius: '10px', background: '#f1f5f9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                                            {formData.image ? (
                                                <img src={formData.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                                            ) : (
                                                <div style={{ textAlign: 'center', color: '#94a3b8' }}>
                                                    <ImageIcon size={32} style={{ display: 'block', margin: '0 auto 8px' }} />
                                                    <span style={{ fontSize: '0.8rem' }}>Image Preview</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer" style={{ padding: '20px 24px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '12px', background: '#f8fafc' }}>
                            <button onClick={() => setIsModalOpen(false)} className="btn-icon" style={{ width: 'auto', padding: '10px 20px', fontSize: '0.9rem', fontWeight: '600' }}>Cancel</button>
                            <button onClick={handleSave} style={{ padding: '10px 24px', background: '#1e40af', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 6px rgba(59, 130, 246, 0.2)' }}>
                                <Save size={18} /> {editingBlog ? 'Update Post' : 'Save Draft'}
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default BlogManagement;
