import React from 'react';
import { X } from 'lucide-react';
import './SampleReportModal.css';

const SampleReportModal = ({ report, onClose }) => {
    if (!report) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
                <div className="pdf-header">
                    <h3>{report.title}</h3>
                    <div className="pdf-actions">
                        <a
                            href={report.pdfFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn"
                        >
                            Download PDF
                        </a>
                        <button className="close-modal-btn" onClick={onClose}>
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div className="pdf-content-wrapper">
                    <object
                        data={report.pdfFile}
                        type="application/pdf"
                        className="pdf-iframe"
                    >
                        <div className="pdf-fallback">
                            <p>Unable to display PDF directly.</p>
                            <a
                                href={report.pdfFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-fallback-btn"
                            >
                                Download Report
                            </a>
                        </div>
                    </object>
                </div>
            </div>
        </div>
    );
};

export default SampleReportModal;
