import React from 'react';
import { Car, Search, FileText, CheckCircle, Database, ShieldCheck } from 'lucide-react';
import './ReportLoader.css';

const ReportLoader = ({ count = 1 }) => {
    // Map count (1-5) to steps
    const steps = [
        { icon: Search, text: "Searching National Databases..." },
        { icon: Database, text: "Verifying Vehicle Records..." },
        { icon: ShieldCheck, text: "Checking Accident History..." },
        { icon: Car, text: "Analyzing Market Value..." },
        { icon: FileText, text: "Finalizing Comprehensive Report..." }
    ];

    const currentStep = steps[Math.min(count - 1, 4)];
    const progress = (count / 5) * 100;

    return (
        <div className="report-loader-container">
            <div className="circular-loader">
                <svg className="progress-ring" width="160" height="160">
                    <circle
                        className="progress-ring__circle-bg"
                        stroke="#e2e8f0"
                        strokeWidth="8"
                        fill="transparent"
                        r="70"
                        cx="80"
                        cy="80"
                    />
                    <circle
                        className="progress-ring__circle"
                        stroke="#1e40af"
                        strokeWidth="8"
                        fill="transparent"
                        r="70"
                        cx="80"
                        cy="80"
                        style={{ strokeDashoffset: 440 - (440 * progress) / 100 }}
                    />
                </svg>
                <div className="loader-count">
                    <span className="count-number">{count}</span>
                    <span className="count-total">/5</span>
                </div>
            </div>

            <div className="loader-content">
                <h3 className="loading-title">Generating Report</h3>

                <div className="current-step-display">
                    <div className="step-icon-wrapper">
                        <currentStep.icon size={24} className="step-icon" />
                    </div>
                    <p className="step-text">{currentStep.text}</p>
                </div>

                <div className="steps-indicator">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div
                            key={step}
                            className={`step-dot ${step <= count ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportLoader;
