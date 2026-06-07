import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReportGeneration.css';

const ReportGeneration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const { vin, reportData } = location.state || {};

    useEffect(() => {
        if (!vin) {
            navigate('/');
            return;
        }

        const duration = 3000; // 3 seconds
        const interval = 30; // Update every 30ms
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        const redirectTimer = setTimeout(() => {
            navigate(`/report-view/${vin}`, { state: { reportData } });
        }, duration);

        return () => {
            clearInterval(timer);
            clearTimeout(redirectTimer);
        };
    }, [vin, navigate, reportData]);

    return (
        <div className="generation-page">
            <div className="generation-content">
                <div className="logo-pulse">
                    <img src="/vehiclereportcheck-logo.png" alt="Vehicle Report Check" className="generation-logo" />
                </div>
                <h1>Generating Your Report...</h1>
                <p>Please wait while we gather vehicle history from our databases.</p>

                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>

                <div className="steps-display">
                    <div className={`step ${progress > 10 ? 'active' : ''}`}>Checking VIN...</div>
                    <div className={`step ${progress > 40 ? 'active' : ''}`}>Searching Databases...</div>
                    <div className={`step ${progress > 70 ? 'active' : ''}`}>Compiling History...</div>
                    <div className={`step ${progress > 90 ? 'active' : ''}`}>Finalizing Report...</div>
                </div>
            </div>
        </div>
    );
};

export default ReportGeneration;
