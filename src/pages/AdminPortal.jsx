import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Car,
    FileText,
    CreditCard,
    Tag,
    LogOut,
    Search,
    Bell,
    ChevronDown,
    ChevronRight,
    DollarSign,
    BookOpen
} from 'lucide-react';
import { UserService } from '../services/UserService';
import { ReportService } from '../services/ReportService';
import { PaymentService } from '../services/PaymentService';
import { CouponService } from '../services/CouponService';
import { BlogService } from '../services/BlogService';
import './AdminPortal.css';

// Components
import AdminDashboard from '../components/AdminPortal/AdminDashboard';
import UserManagement from '../components/AdminPortal/UserManagement';
import OrderManagement from '../components/AdminPortal/OrderManagement';
import PaymentManagement from '../components/AdminPortal/PaymentManagement';
import PricingManagement from '../components/AdminPortal/PricingManagement';
import CouponManagement from '../components/AdminPortal/CouponManagement';
import BlogManagement from '../components/AdminPortal/BlogManagement';
import MarketingManagement from '../components/AdminPortal/MarketingManagement';

// Extracted NavItem Component
const NavItem = ({ id, icon, label, activeTab, onClick }) => {
    const Icon = icon;
    return (
        <button
            className={`admin-nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={onClick}
        >
            <Icon size={20} />
            <span>{label}</span>
            {activeTab === id && <div className="active-indicator" />}
        </button>
    );
};

const AdminPortal = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen] = useState(true); // Removed setter if unused
    const [expandedMenus, setExpandedMenus] = useState({ listings: true });
    const [adminUser, setAdminUser] = useState(null);

    // Data States
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [payments, setPayments] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const checkAdmin = () => {
            try {
                const userStr = localStorage.getItem('user');
                if (!userStr) {
                    navigate('/admin/login');
                    return;
                }
                const user = JSON.parse(userStr);
                // Allow Admin role or specific admin email for safety
                if (user.role !== 'Admin' && user.email !== 'support@vehiclereportcheck.com') {
                    navigate('/member');
                    return;
                }
                setAdminUser(user);
            } catch (error) {
                console.error("Error parsing user from local storage:", error);
                localStorage.removeItem('user');
                navigate('/admin/login');
            }
        };
        checkAdmin();
    }, [navigate]);

    useEffect(() => {
        const loadData = async () => {
            if (adminUser) {
                try {
                    const results = await Promise.allSettled([
                        UserService.getAllUsers(),
                        ReportService.getAllReports(),
                        PaymentService.getAllPayments(),
                        CouponService.getAllCoupons(),
                        Promise.resolve(BlogService.getAllBlogs())
                    ]);

                    setUsers(results[0].status === 'fulfilled' ? results[0].value : []);
                    setOrders(results[1].status === 'fulfilled' ? results[1].value : []);
                    setPayments(results[2].status === 'fulfilled' ? results[2].value : []);
                    setCoupons(results[3].status === 'fulfilled' ? results[3].value : []);
                    setBlogs(results[4].status === 'fulfilled' ? results[4].value : []);

                    // Log errors for debugging
                    results.forEach((res, index) => {
                        if (res.status === 'rejected') {
                            console.error(`Failed to load data for index ${index}:`, res.reason);
                        }
                    });
                } catch (error) {
                    console.error("Failed to load admin data", error);
                }
            }
        };
        loadData();
    }, [adminUser]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleLoginAsUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/member');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <AdminDashboard
                    users={users}
                    orders={orders}
                    payments={payments}
                />;
            case 'users-all':
                return <UserManagement users={users} setUsers={setUsers} onLoginAsUser={handleLoginAsUser} />;
            case 'reports':
                return <OrderManagement orders={orders} />;
            case 'payments':
                return <PaymentManagement payments={payments} />;
            case 'coupons':
                return <CouponManagement coupons={coupons} setCoupons={setCoupons} />;
            case 'pricing':
                return <PricingManagement />;
            case 'marketing':
                return <MarketingManagement />;
            case 'blogs':
                return <BlogManagement blogs={blogs} setBlogs={setBlogs} />;
            default:
                return <AdminDashboard
                    users={users}
                    orders={orders}
                    payments={payments}
                />;
        }
    };

    const toggleMenu = (menu) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };


    if (!adminUser) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Loading Admin Portal...</h2>
                <p>Please wait while we verify your credentials.</p>
            </div>
        );
    }

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="admin-sidebar-header">
                    <div className="admin-logo">
                        <img src="/logo.png" alt="Vehicle Report Check Admin" style={{ height: '40px', objectFit: 'contain' }} />
                    </div>
                </div>

                <div className="admin-user-profile">
                    <div className="admin-avatar">
                        {adminUser.name ? adminUser.name.charAt(0) : 'A'}
                    </div>
                    <div className="admin-info">
                        <h4>{adminUser.name || 'Admin'}</h4>
                        <span>Administrator</span>
                    </div>
                </div>

                <nav className="admin-nav">
                    <div className="nav-section">
                        <h3>Main</h3>
                        <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" activeTab={activeTab} onClick={() => setActiveTab('dashboard')} />
                    </div>

                    <div className="nav-section">
                        <h3>Management</h3>
                        <NavItem id="users-all" icon={Users} label="Users" activeTab={activeTab} onClick={() => setActiveTab('users-all')} />

                        <NavItem id="reports" icon={FileText} label="Orders" activeTab={activeTab} onClick={() => setActiveTab('reports')} />
                        <NavItem id="blogs" icon={BookOpen} label="Blogs" activeTab={activeTab} onClick={() => setActiveTab('blogs')} />
                    </div>

                    <div className="nav-section">
                        <h3>Finance</h3>
                        <NavItem id="payments" icon={CreditCard} label="Payments" activeTab={activeTab} onClick={() => setActiveTab('payments')} />
                        <NavItem id="coupons" icon={Tag} label="Coupons" activeTab={activeTab} onClick={() => setActiveTab('coupons')} />
                        <NavItem id="pricing" icon={DollarSign} label="Pricing & Fees" activeTab={activeTab} onClick={() => setActiveTab('pricing')} />
                        <NavItem id="marketing" icon={Users} label="Marketing Blast" activeTab={activeTab} onClick={() => setActiveTab('marketing')} />
                    </div>
                </nav>

                <div className="admin-sidebar-footer">
                    <button className="admin-logout-btn" onClick={handleLogout}>
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <div className="header-left">
                        <h1 className="page-title">
                            {activeTab.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </h1>
                    </div>
                    <div className="header-right">
                        <button className="notification-btn">
                            <Bell size={20} />
                            <span className="badge">3</span>
                        </button>
                    </div>
                </header>

                <div className="admin-content-area">
                    {renderContent()}
                </div>
            </main >
        </div >
    );
};

export default AdminPortal;
