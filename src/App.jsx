import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AdminPortal from './pages/AdminPortal';
import MemberDashboard from './pages/MemberDashboard';
import Checkout from './pages/Checkout';
import ReportView from './pages/ReportView';
import Pricing from './pages/Pricing';
import PaymentCallback from './pages/PaymentCallback';
import AdminLogin from './pages/AdminLogin';
import ContentPage from './pages/ContentPage';
import SampleReportPage from './pages/SampleReportPage';
import ReportGeneration from './pages/ReportGeneration';
import GlobalGuides from './pages/GlobalGuides';
import CountryGuide from './pages/CountryGuide';
import InvoiceView from './pages/InvoiceView';

import Contact from './pages/Static/Contact';
import Careers from './pages/Static/Careers';
import PrivacyPolicy from './pages/Static/PrivacyPolicy';
import TermsOfService from './pages/Static/TermsOfService';
import CookiePolicy from './pages/Static/CookiePolicy';

import ScrollToTop from './components/Common/ScrollToTop';
import WhatsAppButton from './components/Common/WhatsAppButton';

import { useEffect } from 'react';

// ...

function App() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isLayoutHidden =
    path.startsWith('/admin') ||
    path.startsWith('/member') ||
    path.startsWith('/report-view') ||
    path.startsWith('/invoice');

  // Force redirect to www.vehiclereportcheck.com (Client Side Fail-safe)
  useEffect(() => {
    if (window.location.hostname === 'vehiclereportcheck.com') {
      // Use existing protocol and remaining path
      window.location.replace(`https://www.vehiclereportcheck.com${window.location.pathname}${window.location.search}`);
    }
  }, []);

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-to-content">Skip to Main Content</a>
      <ScrollToTop />
      {!isLayoutHidden && <Navbar />}
      <main id="main-content" className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/report-view/:vin" element={<ReportView />} />
          <Route path="/invoice/:vin" element={<InvoiceView />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/generating-report" element={<ReportGeneration />} />
          <Route path="/sample-report" element={<SampleReportPage />} />
          <Route path="/p/:slug" element={<ContentPage />} />
          <Route path="/global-guides" element={<GlobalGuides />} />
          <Route path="/guide/:countrySlug" element={<CountryGuide />} />

          {/* Static Pages */}

          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/payment-callback" element={<PaymentCallback />} />
          <Route path="/admin-access" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </main>
      {!isLayoutHidden && <Footer />}
      <WhatsAppButton />
    </div>
  );
}

export default App;
