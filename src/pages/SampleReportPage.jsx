import React, { useEffect } from 'react';
import sampleReportData from '../data/sampleReportData.json';
import { Helmet } from 'react-helmet-async';
import './SampleReportPage.css';
import brandLogo from '../assets/logo-new.png';

const SampleReportPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data } = sampleReportData;

    // Helper component for AutoCheck style badges (for lower sections)
    const StatusBadge = ({ status }) => {
        if (!status) return null;
        
        const statusLower = status.toLowerCase();
        const isPass = statusLower === 'no records found' || statusLower === 'no record found' || statusLower === 'success' || statusLower === 'no issue';
        const isWarn = statusLower === 'records found';
        const isFail = statusLower === 'danger' || statusLower === 'salvage brand' || statusLower === 'severe' || statusLower.includes('issue');

        if (isPass) {
            return (
                <span className="status-badge-ac pass">
                    <i className="fa-solid fa-circle-check status-icon"></i>
                    {status}
                </span>
            );
        } else if (isFail) {
            return (
                <span className="status-badge-ac fail">
                    <i className="fa-solid fa-circle-exclamation status-icon"></i>
                    {status}
                </span>
            );
        } else if (isWarn) {
            return (
                <span className="status-badge-ac warn">
                    <i className="fa-solid fa-triangle-exclamation status-icon"></i>
                    {status}
                </span>
            );
        }

        return (
            <span className="status-badge-ac">
                {status}
            </span>
        );
    };

    // Helper to determine the main icon for a glance card based on text
    const getGlanceIcon = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes('title')) return 'fa-shield-halved';
        if (lower.includes('auction')) return 'fa-gavel';
        if (lower.includes('accident') || lower.includes('damage')) return 'fa-car-burst';
        if (lower.includes('recall')) return 'fa-bullhorn';
        if (lower.includes('insurance')) return 'fa-car-on';
        if (lower.includes('odometer')) return 'fa-gauge-high';
        if (lower.includes('certified') || lower.includes('cpo')) return 'fa-certificate';
        if (lower.includes('service') || lower.includes('repair')) return 'fa-wrench';
        return 'fa-clipboard-list';
    };

    // Helper to determine footer status styles for glance cards
    const getGlanceFooterProps = (status) => {
        if (!status) return { icon: 'fa-circle-info', cls: 'info' };
        
        const lower = status.toLowerCase();
        if (lower.includes('no record') || lower.includes('no issue') || lower.includes('success')) {
            return { icon: 'fa-circle-check', cls: 'success' };
        }
        if (lower.includes('severe') || lower.includes('danger') || lower.includes('issue') || lower.includes('salvage')) {
            return { icon: 'fa-triangle-exclamation', cls: 'danger' };
        }
        if (lower.includes('found')) {
            return { icon: 'fa-circle-exclamation', cls: 'info' };
        }
        
        return { icon: 'fa-circle-info', cls: 'info' };
    };

    // Extracting vehicle info for the top-left box
    const vehicleAge = data.owner_history?.data?.[0]?.duration || '9 year(s)';
    const lastOdometer = data.mileage_records?.data?.[0]?.mileage || '4,432 (09/23/2015)';
    const dynamicVin = data.vin || data.sales_listing_history?.data?.[0]?.vin || 'WDDJK6FA2FF035099';
    const epaClass = data.vehicle?.epa_classification || 'Car - Compact Luxury';
    const engineSpec = data.specifications?.find(s => s.engine)?.engine?.type || '3.5L V6';
    const bodyType = data.vehicle?.body_type || 'Sedan 4D';

    return (
        <div className="sample-report-wrapper">
            <Helmet>
                <title>Sample Vehicle History Report | Vehicle Report Check</title>
                <meta name="description" content="View a sample Vehicle Report Check vehicle history report. See what data you get before you buy, including accident history, title checks, and mileage." />
                <meta name="keywords" content="sample vehicle history report, example vin check, sample carfax report, what does a vin check show, free vehicle look up example, any vehicle report search" />
                <link rel="canonical" href="https://vehiclereportcheck.com/sample-report" />
            </Helmet>
            <div className="container">
                <div className="report-container">
                    
                    {/* Top Report Header Banner */}
                    <div className="report-top-banner" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '15px 20px', borderBottom: '2px solid #e0e0e0', marginBottom: '20px', borderRadius: '4px 4px 0 0' }}>
                        <img src={brandLogo} alt="Brand Logo" style={{ width: '120px', height: 'auto', marginRight: '15px' }} />
                        <div>
                            <h1 style={{ color: '#0056b3', margin: 0, fontSize: '24px', fontWeight: '500' }}>Vehicle History Report</h1>
                            <p style={{ margin: 0, color: '#333', fontSize: '14px' }}>Report Generated: {new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '-')}</p>
                        </div>
                    </div>

                    {/* Top Dashboard Layout */}
                    <div className="top-dashboard">
                        {/* 1. Vehicle Info Box */}
                        <div className="dashboard-box vehicle-info-box">
                            <div className="box-header">
                                <h2>{data.vehicle_name}</h2>
                                <p>{bodyType} ({engineSpec})</p>
                            </div>
                            <table className="vehicle-info-table">
                                <tbody>
                                    <tr>
                                        <td>VIN:</td>
                                        <td>{dynamicVin}</td>
                                    </tr>
                                    <tr>
                                        <td>Class:</td>
                                        <td>{epaClass}</td>
                                    </tr>
                                    <tr>
                                        <td>Country of Assembly:</td>
                                        <td>{data.vehicle?.country_of_assembly || 'United States'}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicle Age:</td>
                                        <td>{vehicleAge}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Reported Odometer:</td>
                                        <td>{lastOdometer}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 2. Owners Box */}
                        <div className="report-box owners-box" style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="owners-icon" style={{ fontSize: '80px', color: '#0056b3', marginBottom: '15px' }}>
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <h3 style={{ color: '#0056b3', fontSize: '22px', margin: '0 0 5px 0', fontWeight: 'bold' }}>Number of Owners</h3>
                            <p style={{ margin: 0, fontSize: '15px', color: '#000' }}>Calculated Owners: {data.owner_history?.data?.length || 'Unknown'}</p>
                        </div>
                    </div>

                    {/* Vehicle History at a Glance */}
                    <div className="report-section glance-section">
                        <h2 className="glance-header">Vehicle History at a Glance</h2>
                        <div className="glance-grid">
                            
                            {data.vehicle_summary?.data?.map((item, idx) => {
                                const { text, status } = item;
                                const lowerText = text.toLowerCase();
                                
                                // Determine Icon
                                let iconSrc = 'vhg-additional-history-issue-found.svg';
                                if (lowerText.includes('title')) iconSrc = 'vhg-title-brand-issue-found.svg';
                                else if (lowerText.includes('auction')) iconSrc = 'vhg-auction-universal.svg';
                                else if (lowerText.includes('accident') || lowerText.includes('damage')) iconSrc = 'vhg-accident-damage-issue-found.svg';
                                else if (lowerText.includes('recall')) iconSrc = 'vhg-open-recall-check-universal.svg';
                                else if (lowerText.includes('insurance')) iconSrc = 'vhg-insurance-loss-title-issue-found.svg';
                                else if (lowerText.includes('odometer')) iconSrc = 'vhg-odometer-check-issue-found.svg';
                                else if (lowerText.includes('certified') || lowerText.includes('cpo')) iconSrc = 'vhg-cpo-universal.svg';
                                else if (lowerText.includes('service') || lowerText.includes('repair')) iconSrc = 'vhg-service-repair-universal.svg';
                                
                                // Determine Status info
                                const lowerStatus = status ? status.toLowerCase() : '';
                                let statusCls = 'status-info';
                                let statusIcon = 'icon-more-information.svg';
                                let statusText = 'Unknown';
                                
                                if (lowerStatus.includes('no record') || lowerStatus.includes('no issue')) {
                                    statusCls = 'status-success';
                                    statusIcon = 'icon-success-pass.svg';
                                    statusText = 'No Issue';
                                } else if (lowerStatus.includes('record') || lowerStatus.includes('found')) {
                                    statusCls = 'status-danger';
                                    statusIcon = 'icon-alert.svg';
                                    statusText = 'Records Found';
                                }
                                
                                // Extract number in parenthesis for title if present
                                const nameParts = text.split(' Reported');
                                const titleName = nameParts[0].trim();
                                const detailText = nameParts.length > 1 && nameParts[1].trim() ? nameParts[1].replace(/[()]/g, '') + ' Events Reported' : '';

                                return (
                                    <div className="glance-card" key={idx}>
                                        <div className="glance-card-body">
                                            <img src={`https://www.autocheck.com/reportservice/report/fullReport/img/${iconSrc}`} className="glance-icon" alt={titleName} onError={(e)=>{e.target.style.display='none'}} style={{ width: '65px', height: '65px', objectFit: 'contain', marginRight: '20px' }} />
                                            <div className="glance-text">
                                                <h4>{titleName}</h4>
                                                {detailText && <p>{detailText}</p>}
                                            </div>
                                        </div>
                                        <div className="glance-card-footer" style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #e0e0e0', padding: '10px 15px', backgroundColor: '#fcfcfc' }}>
                                            {(() => {
                                                const s = (status || '').toLowerCase();
                                                let color = '#0056b3';
                                                let icon = 'fa-circle-exclamation';
                                                if (s.includes('severe') || s.includes('found') || (s.includes('issue') && !s.includes('no issue'))) { color = '#c82333'; icon = 'fa-triangle-exclamation'; }
                                                else if (s.includes('no issue') || s.includes('no cpo') || s.includes('no record')) { color = '#28a745'; icon = 'fa-check-circle'; }
                                                else if (s.includes('insurance')) { color = '#f0ad4e'; icon = 'fa-triangle-exclamation'; }
                                                
                                                return (
                                                    <>
                                                        <i className={`fa-solid ${icon}`} style={{ color: color, fontSize: '20px', width: '25px', textAlign: 'center' }}></i>
                                                        <span style={{ color: color, fontSize: '13px', fontWeight: '500', flex: 1, textAlign: 'center', paddingRight: '25px' }}>{status || statusText}</span>
                                                    </>
                                                );
                                            })()}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    {/* Vehicle Specifications & Pricing */}
                    {(data.vehicle || data.price) && (
                        <div className="report-section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-car title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Vehicle Specifications & Pricing
                            </h2>
                            <div className="checks-grid">
                                {data.vehicle && Object.entries(data.vehicle).map(([key, val], idx) => (
                                    val ? (
                                        <div className="check-item" key={`veh-${idx}`}>
                                            <div className="check-text"><strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {val}</div>
                                        </div>
                                    ) : null
                                ))}
                                {data.price && Object.entries(data.price).map(([key, val], idx) => (
                                    val && key !== 'currency' ? (
                                        <div className="check-item" key={`prc-${idx}`}>
                                            <div className="check-text"><strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> ${val}</div>
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Vehicle Usage Verification */}
                    {data.vehicle_usage_verification?.data?.length > 0 && (
                        <div className="report-section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-briefcase title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Vehicle Usage
                            </h2>
                            <div className="checks-grid">
                                {data.vehicle_usage_verification.data.map((check, idx) => (
                                    <div className="check-item" key={idx}>
                                        <div className="check-text">{check.text}</div>
                                        <StatusBadge status={check.status} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Owner History */}
                    <div className="report-section">
                        <h2 className="section-title">
                            <i className="fa-solid fa-users title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Owner History
                        </h2>
                        <div className="report-table-wrapper">
                            <table className="report-table">
                                <thead>
                                    <tr>
                                        {data.owner_history?.titles?.map((title, idx) => (
                                            <th key={idx}>{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.owner_history?.data?.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.status}</td>
                                            <td>{row.purchased}</td>
                                            <td>{row.state}</td>
                                            <td>{row.owned}</td>
                                            <td>{row.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sales Listing History */}
                    {data.sales_listing_history?.data && data.sales_listing_history.data.length > 0 && (
                        <div className="report-section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-store title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Sales Listing History
                            </h2>
                            {data.sales_listing_history.data.map((sale, idx) => (
                                <div className="sales-record-box" key={idx}>
                                    <div className="sales-details-row">
                                        <div className="sales-data-point"><strong>Sale Date:</strong> {sale.sale_date}</div>
                                        <div className="sales-data-point"><strong>Type:</strong> {sale.type}</div>
                                        <div className="sales-data-point"><strong>Price:</strong> ${sale.price?.price}</div>
                                    </div>
                                    <div className="sales-details-row">
                                        <div className="sales-data-point"><strong>Primary Damage:</strong> {sale.primary_damage}</div>
                                        <div className="sales-data-point"><strong>Secondary Damage:</strong> {sale.secondary_damage}</div>
                                    </div>
                                    
                                    {sale.images && sale.images.length > 0 && (
                                        <div className="report-gallery">
                                            {sale.images.map((img, i) => (
                                                <img key={i} src={img} alt={`Sale photo ${i+1}`} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}


                    {/* Accident & Damage Section */}
                    {/* Accident & Damage Section */}
                    {data.accident_records?.data?.length > 0 && (
                        <div className="accident-section" id="accident-section">
                            <div className="ac-blue-header">
                                <h2><i className="fa-solid fa-car-burst gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Accident & Damage</h2>
                                <a href="#top">Back to Top</a>
                            </div>
                            <div className="accident-body">
                                <div className="accident-left-panel">
                                    <div className="car-diagram-wrapper">
                                        <img className="car-img-icons" src="https://www.autocheck.com/reportservice/report/fullReport/img/accident-car-outline.svg" alt="Car Outline" />
                                        <img className="car-indicator-front-right" src="https://www.autocheck.com/reportservice/report/fullReport/img/indicator-orange.svg" alt="Damage Indicator" />
                                    </div>
                                    <div className="accident-icons-row">
                                        <div className="accident-icon-item active-orange">
                                            <img src="https://www.autocheck.com/reportservice/report/fullReport/img/accident-airbag-deployed-on.svg" alt="Airbag Deployed" />
                                            <span>Airbag Deployed</span>
                                        </div>
                                        <div className="accident-icon-item">
                                            <img src="https://www.autocheck.com/reportservice/report/fullReport/img/accident-structural-damage-off.svg" alt="Structural Damage" />
                                            <span>Structural Damage</span>
                                        </div>
                                        <div className="accident-icon-item">
                                            <img src="https://www.autocheck.com/reportservice/report/fullReport/img/accident-overturned-off.svg" alt="Overturned" />
                                            <span>Overturned</span>
                                        </div>
                                        <div className="accident-icon-item active-red">
                                            <img src="https://www.autocheck.com/reportservice/report/fullReport/img/accident-severe-red.svg" alt="Severe" />
                                            <span>Severe</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="accident-right-panel">
                                    <table className="ac-light-table">
                                        <thead>
                                            <tr>
                                                <th>Damage Date</th>
                                                <th>Location</th>
                                                <th>Severity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.accident_records.data.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td>{row.date}</td>
                                                    <td>{row.location || 'Reported'}</td>
                                                    <td className={idx === 0 ? "severity-red" : ""}>{idx === 0 ? "Severe" : "Unknown"}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="accident-disclaimer">
                                        Not all accidents and/or damage events are reported to Experian. Inspection by a third party prior to purchase is recommended. See <strong>Detailed Vehicle History</strong> for more information regarding accident/damage events.
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Open Recall Check */}
                    <div className="recall-section" id="recall-section">
                        <div className="ac-blue-header">
                            <h2><i className="fa-solid fa-triangle-exclamation gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Open Recall Check</h2>
                            <a href="#top">Back to Top</a>
                        </div>
                        {data.recalls?.data?.length > 0 ? (
                            <>
                                <div className="recall-banner">
                                    <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '36px', color: '#f0ad4e' }}></i>
                                    <div className="recall-banner-text">
                                        <h3>Information Reported: AutoCheck found {data.recalls.data.length} open recall(s).</h3>
                                        <p>It is recommended that this vehicle be taken to the nearest dealer to have the recalled components replaced or fixed. Service bulletins if available are not part of open recalls and can be found in the vehicle history details.</p>
                                    </div>
                                </div>
                                <div className="report-table-wrapper">
                                    <table className="recall-table">
                                        <thead>
                                            <tr>
                                                {data.recalls.titles?.map((t, i) => <th key={i}>{t}</th>)}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.recalls.data.map((row, idx) => (
                                                <tr key={idx}>
                                                    <td>{row.date || row.Date}</td>
                                                    <td>{row.campaign_number || row['Campaign Number']}</td>
                                                    <td>{row.recall_number || row['Recall Number']}</td>
                                                    <td>{row.summary || row.Summary}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="recall-footer">
                                    <a href="#">More information</a> including remedy or risk factors. Locate your nearest authorized Dealer to schedule repair.
                                </div>
                            </>
                        ) : (
                            <div className="recall-banner" style={{ backgroundColor: '#f0f8ff', borderColor: '#cce5ff' }}>
                                <i className="fa-solid fa-check-circle" style={{ fontSize: '36px', color: '#28a745' }}></i>
                                <div className="recall-banner-text" style={{ color: '#004085' }}>
                                    <h3>AutoCheck found 0 open recall(s).</h3>
                                    <p>No open recalls have been reported to AutoCheck for this vehicle.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Title Checks */}
                    <div className="report-section">
                        <h2 className="section-title">
                            <i className="fa-solid fa-file-contract title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Title Checks
                        </h2>
                        <div className="checks-grid">
                            {data.checks?.data?.map((check, idx) => (
                                <div className="check-item" key={idx}>
                                    <div className="check-text">{check.text}</div>
                                    <StatusBadge status={check.status} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Damage & Issue Verification */}
                    <div className="report-section">
                        <h2 className="section-title">
                            <i className="fa-solid fa-screwdriver-wrench title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Damage & Issue Verification
                        </h2>
                        <div className="checks-grid">
                            {data.damage_verification?.data?.map((check, idx) => (
                                <div className="check-item" key={idx}>
                                    <div className="check-text">{check.details}</div>
                                    <StatusBadge status={check.status} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Event Verification */}
                    <div className="report-section">
                        <h2 className="section-title">
                            <i className="fa-solid fa-calendar-check title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Event Verification
                        </h2>
                        <div className="checks-grid">
                            {data.vehicle_checks?.data?.map((check, idx) => (
                                <div className="check-item" key={idx}>
                                    <div className="check-text">{check.details || check.text}</div>
                                    <StatusBadge status={check.status} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Vehicle History */}
                    <div className="report-section">
                        <h2 className="section-title">
                            <i className="fa-solid fa-list-ul title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Detailed Vehicle History
                        </h2>
                        <div className="report-table-wrapper">
                            <table className="report-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th>Source</th>
                                        <th>Odometer</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.detailed_vehicle_history?.data?.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.date}</td>
                                            <td>{row.location}</td>
                                            <td>{row.source?.join(', ') || ''}</td>
                                            <td>{row.odometer || '-'}</td>
                                            <td className="details-cell">{row.details?.join('\n') || ''}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Mileage Records */}
                    {data.mileage_records?.data?.length > 0 && (
                        <div className="report-section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-gauge-high title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Odometer & Mileage Records
                            </h2>
                            <div className="report-table-wrapper">
                                <table className="report-table">
                                    <thead>
                                        <tr>
                                            {data.mileage_records.titles.map((title, idx) => (
                                                <th key={idx}>{title}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.mileage_records.data.map((row, idx) => (
                                            <tr key={idx}>
                                                <td>{row.date}</td>
                                                <td><StatusBadge status={row.status} /></td>
                                                <td>{row.mileage}</td>
                                                <td><StatusBadge status={row.other} /></td>
                                                <td>{row.location || '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Auctions History */}
                    {data.auctions && data.auctions.length > 0 && (
                        <div className="report-section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-gavel title-icon gradient-text" style={{ fontSize: '24px', marginRight: '12px' }}></i> Auction Records & Photos
                            </h2>
                            {data.auctions.map((auction, idx) => (
                                <div className="sales-record-box" style={{marginBottom: 30}} key={idx}>
                                    <h3 style={{marginTop:0, marginBottom:15, color:'#0056b3'}}>Auction Record #{idx+1}</h3>
                                    
                                    {auction.auction_market_value && (
                                        <div className="auction-values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                                            {Object.entries(auction.auction_market_value).map(([k, v], i) => (
                                                <div className="sales-data-point" key={i}>
                                                    <strong>{k.replace(/_/g, ' ').toUpperCase()}:</strong> {v}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {auction.images && auction.images.length > 0 && (
                                        <div className="report-gallery">
                                            {auction.images.map((img, i) => (
                                                <img key={i} src={img} alt={`Auction photo ${i+1}`} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Technical Specifications */}
                    <div className="report-section tech-specs-section">
                        <h2 className="section-title" style={{backgroundColor: '#0056b3', color: '#fff', padding: '10px 15px', borderRadius: '4px', margin: 0}}>
                            TECHNICAL SPECIFICATIONS
                        </h2>
                        <div className="tech-specs-container" style={{ border: '1px solid #0056b3', padding: '20px', borderTop: 'none', backgroundColor: '#fff', marginBottom: '30px' }}>
                            
                            {/* Summary */}
                            <div className="spec-card" style={{ marginBottom: '20px' }}>
                                <h3 style={{ backgroundColor: '#0056b3', color: '#fff', display: 'inline-block', padding: '5px 15px', borderRadius: '8px', margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'normal' }}>Summary</h3>
                                <div style={{ border: '1px solid #0056b3', padding: '15px', borderRadius: '4px', fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
                                    {data.summary || 'Summary unavailable.'}
                                </div>
                            </div>

                            <div className="spec-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                                
                                {/* Price */}
                                {data.price && Object.keys(data.price).length > 0 && (
                                    <div className="spec-card">
                                        <h3 style={{ backgroundColor: '#0056b3', color: '#fff', display: 'inline-block', padding: '5px 15px', borderRadius: '8px', margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'normal' }}>Price</h3>
                                        <div style={{ border: '1px solid #0056b3', borderRadius: '4px', overflow: 'hidden' }}>
                                            <table className="ac-light-table" style={{ margin: 0, width: '100%' }}>
                                                <tbody>
                                                    {Object.entries(data.price).map(([k, v], i) => (
                                                        <tr key={i}>
                                                            <td style={{ textTransform: 'capitalize', width: '50%' }}>{k.replace(/_/g, ' ')}</td>
                                                            <td style={{ width: '50%' }}>{v}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {/* Vehicle */}
                                {data.vehicle && Object.keys(data.vehicle).length > 0 && (
                                    <div className="spec-card">
                                        <h3 style={{ backgroundColor: '#0056b3', color: '#fff', display: 'inline-block', padding: '5px 15px', borderRadius: '8px', margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'normal' }}>Vehicle</h3>
                                        <div style={{ border: '1px solid #0056b3', borderRadius: '4px', overflow: 'hidden' }}>
                                            <table className="ac-light-table" style={{ margin: 0, width: '100%' }}>
                                                <tbody>
                                                    {Object.entries(data.vehicle).map(([k, v], i) => (
                                                        <tr key={i}>
                                                            <td style={{ textTransform: 'capitalize', width: '50%' }}>{k.replace(/_/g, ' ')}</td>
                                                            <td style={{ width: '50%' }}>{v}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                                {/* Specifications mapped dynamically */}
                                {data.specifications && data.specifications.map((spec, idx) => {
                                    const key = Object.keys(spec)[0];
                                    const values = spec[key];
                                    if (!values || Object.keys(values).length === 0) return null;
                                    
                                    return (
                                        <div className="spec-card" key={idx}>
                                            <h3 style={{ backgroundColor: '#0056b3', color: '#fff', display: 'inline-block', padding: '5px 15px', borderRadius: '8px', margin: '0 0 10px 0', fontSize: '14px', textTransform: 'capitalize', fontWeight: 'normal' }}>
                                                {key === 'exterior' ? 'Dimensions - Exterior' : `Specifications - ${key}`}
                                            </h3>
                                            <div style={{ border: '1px solid #0056b3', borderRadius: '4px', overflow: 'hidden' }}>
                                                <table className="ac-light-table" style={{ margin: 0, width: '100%' }}>
                                                    <tbody>
                                                        {Object.entries(values).map(([k, v], i) => (
                                                            <tr key={i}>
                                                                <td style={{ textTransform: 'capitalize', width: '50%' }}>{k.replace(/_/g, ' ')}</td>
                                                                <td style={{ width: '50%' }}>{v}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SampleReportPage;
