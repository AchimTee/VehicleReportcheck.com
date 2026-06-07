import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReportService } from '../services/ReportService';
import { FileText, ArrowLeft, Printer } from 'lucide-react';
import './InvoiceView.css';

const InvoiceView = () => {
    const { vin } = useParams();
    const navigate = useNavigate();
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReport = async () => {
            const userStr = localStorage.getItem('user');
            if (!userStr) {
                navigate('/login');
                return;
            }
            const user = JSON.parse(userStr);
            try {
                const reports = await ReportService.getUserReports(user.email);
                const found = reports.find(r => r.vin === vin);
                if (found) {
                    setReport(found);
                }
            } catch (err) {
                console.error("Failed to load invoice:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchReport();
    }, [vin, navigate]);

    if (loading) {
        return (
            <div className="invoice-loading">
                <div className="spinner"></div>
                <p>Loading invoice...</p>
            </div>
        );
    }

    if (!report) {
        return (
            <div className="invoice-error">
                <h2>Invoice Not Found</h2>
                <p>We couldn't find a transaction for this report.</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="invoice-page">
            <div className="invoice-actions no-print">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <ArrowLeft size={18} /> Back
                </button>
                <button className="btn-print" onClick={handlePrint}>
                    <Printer size={18} /> Print Invoice
                </button>
            </div>

            <div className="invoice-container">
                <div className="invoice-header">
                    <div className="company-details">
                        <img src="/logo.png" alt="Vehicle Report Check" className="invoice-logo" />
                        <h2>Vehicle Report Check LLC</h2>
                        <p>123 Auto Avenue</p>
                        <p>support@vehiclereportcheck.com</p>
                        <p>+1 (613) 366-4271</p>
                    </div>
                    <div className="invoice-meta">
                        <h1>INVOICE</h1>
                        <p><strong>Date:</strong> {report.date}</p>
                        <p><strong>Invoice #:</strong> INV-{report.id || Math.floor(Math.random() * 100000)}</p>
                        <p className="payment-status">Paid</p>
                    </div>
                </div>

                <div className="invoice-billing">
                    <div className="bill-to">
                        <h3>Billed To:</h3>
                        <p>{report.email}</p>
                    </div>
                </div>

                <table className="invoice-table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Vehicle History Report<br/>
                                <small>VIN: {report.vin} - {report.year} {report.make} {report.model}</small>
                            </td>
                            <td>1</td>
                            <td>${Number(report.amount || 14).toFixed(2)}</td>
                            <td>${Number(report.amount || 14).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="invoice-summary">
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${Number(report.amount || 14).toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total Paid:</span>
                        <span>${Number(report.amount || 14).toFixed(2)}</span>
                    </div>
                </div>

                <div className="invoice-footer">
                    <p>Thank you for your business!</p>
                    <p>If you have any questions about this invoice, please contact support.</p>
                </div>
            </div>
        </div>
    );
};

export default InvoiceView;
