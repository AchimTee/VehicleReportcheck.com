import React from 'react';
import './StaticPages.css';

const CookiePolicy = () => {
    return (
        <div className="static-page">
            <div className="static-header">
                <h1>Cookie Policy</h1>
                <p>Last updated: November 30, 2024</p>
            </div>
            <div className="static-content">
                <h2>1. What Are Cookies</h2>
                <p>
                    Cookies are small text files that are placed on your computer or mobile device by websites that you visit.
                    They are widely used in order to make websites work, or work more efficiently, as well as to provide
                    information to the owners of the site.
                </p>

                <h2>2. How We Use Cookies</h2>
                <p>
                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
                    industry standard options for disabling cookies without completely disabling the functionality and
                    features they add to this site. It is recommended that you leave on all cookies if you are not sure
                    whether you need them or not in case they are used to provide a service that you use.
                </p>

                <h2>3. The Cookies We Set</h2>
                <ul>
                    <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
                    <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.</li>
                    <li><strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</li>
                </ul>
            </div>
        </div>
    );
};

export default CookiePolicy;
