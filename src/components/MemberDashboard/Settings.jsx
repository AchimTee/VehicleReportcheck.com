import React from 'react';
import { User, Mail, Shield, Bell, Save, Camera, Smartphone } from 'lucide-react';

const Settings = ({ userData, setUserData, handleSaveProfile, handleImageUpload }) => {
    return (
        <div className="settings-container fade-in">
            <div className="section-header">
                <h2>Account Settings</h2>
                <p>Manage your profile and preferences</p>
            </div>

            <div className="settings-grid">
                <div className="settings-card profile-card">
                    <div className="profile-cover"></div>
                    <div className="profile-content">
                        <div className="profile-avatar-wrapper">
                            <div className="profile-avatar-lg">
                                {userData.profilePic ? (
                                    <img src={userData.profilePic} alt="Profile" />
                                ) : (
                                    userData.name.charAt(0)
                                )}
                            </div>
                            <label className="avatar-upload-btn">
                                <Camera size={16} />
                                <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                            </label>
                        </div>
                        <h3>{userData.name}</h3>
                        <p>{userData.email}</p>
                        <div className="member-badge">Pro Member</div>
                    </div>
                </div>

                <div className="settings-card form-card">
                    <div className="card-header">
                        <h3>Personal Information</h3>
                    </div>
                    <div className="form-body">
                        <div className="form-row">
                            <div className="form-group">
                                <label><User size={14} /> Full Name</label>
                                <input
                                    type="text"
                                    className="modern-input"
                                    value={userData.name}
                                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label><Mail size={14} /> Email Address</label>
                                <input
                                    type="email"
                                    className="modern-input disabled"
                                    value={userData.email}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label><Smartphone size={14} /> Phone Number</label>
                                <input
                                    type="tel"
                                    className="modern-input"
                                    value={userData.phone}
                                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>

                        <div className="form-divider"></div>

                        <div className="card-header">
                            <h3>Security</h3>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label><Shield size={14} /> Current Password</label>
                                <input type="password" class="modern-input" placeholder="••••••••" />
                            </div>
                            <div className="form-group">
                                <label><Shield size={14} /> New Password</label>
                                <input type="password" class="modern-input" placeholder="••••••••" />
                            </div>
                        </div>

                        <div className="form-actions-right">
                            <button className="btn-primary" onClick={handleSaveProfile}>
                                <Save size={18} /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
