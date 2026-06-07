import React from 'react';
import './StaticPages.css';

const Careers = () => {
    return (
        <div className="static-page">
            <div className="static-header">
                <h1>Join Our Team</h1>
                <p>Build the future of automotive transparency with us.</p>
            </div>
            <div className="static-content">
                <h2>Working at Vehicle Report Check</h2>
                <p>
                    We are a passionate team of engineers, designers, and automotive enthusiasts dedicated
                    to making the car buying and selling process safer and easier for everyone.
                </p>

                <h2>Open Positions</h2>
                <div style={{ marginTop: '32px' }}>
                    <div style={{
                        padding: '24px',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>Senior Full Stack Engineer</h3>
                            <span style={{ color: '#64748b' }}>Remote • Engineering</span>
                        </div>
                        <button className="submit-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Apply</button>
                    </div>

                    <div style={{
                        padding: '24px',
                        borderBottom: '1px solid #e2e8f0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>Product Designer</h3>
                            <span style={{ color: '#64748b' }}>New York, NY • Design</span>
                        </div>
                        <button className="submit-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Apply</button>
                    </div>

                    <div style={{
                        padding: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>Customer Success Manager</h3>
                            <span style={{ color: '#64748b' }}>Remote • Operations</span>
                        </div>
                        <button className="submit-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
