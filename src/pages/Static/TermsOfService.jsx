import React from 'react';
import './StaticPages.css';

const TermsOfService = () => {
    return (
        <div className="static-page">
            <div className="static-header">
                <h1>Terms of Service</h1>
                <p>Last updated: November 30, 2024</p>
            </div>
            <div className="static-content">
                <h2>1. Agreement to Terms</h2>
                <p>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally
                    or on behalf of an entity ("you") and Vehicle Report Check ("we," "us" or "our"), concerning your access to
                    and use of the Vehicle Report Check website as well as any other media form, media channel, mobile website
                    or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>

                <h2>2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
                    functionality, software, website designs, audio, video, text, photographs, and graphics on the
                    Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein
                    (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright
                    and trademark laws.
                </p>

                <h2>3. User Representations</h2>
                <p>
                    By using the Site, you represent and warrant that:
                </p>
                <ul>
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You are not a minor in the jurisdiction in which you reside.</li>
                </ul>
            </div>
        </div>
    );
};

export default TermsOfService;
