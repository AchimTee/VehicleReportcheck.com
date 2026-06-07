import React from 'react';
import './StaticPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="static-page">
            <div className="static-header">
                <h1>Privacy Policy</h1>
                <p>Last updated: November 30, 2024</p>
            </div>
            <div className="static-content">
                <h2>1. Introduction</h2>
                <p>
                    Vehicle Report Check ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>

                <h2>2. Information We Collect</h2>
                <p>
                    We may collect information about you in a variety of ways. The information we may collect on the
                    Site includes:
                </p>
                <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                    <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                </ul>

                <h2>3. Use of Your Information</h2>
                <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and
                    customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul>
                    <li>Create and manage your account.</li>
                    <li>Process your payments and refunds.</li>
                    <li>Email you regarding your account or order.</li>
                    <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                </ul>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
