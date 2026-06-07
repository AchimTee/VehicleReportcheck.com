
const STORAGE_KEY = 'vehiclereportcheck_reports'; // Legacy key reference

export const ReportService = {
    getAllReports: async () => {
        let backendReports = [];
        try {
            const res = await fetch('/api/reports');
            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) backendReports = data;
            }
        } catch (error) {
            console.warn("Backend reports fetch failed", error);
        }
        
        const localReports = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        
        // Merge local and backend reports, preferring local if IDs match
        const allReports = [...backendReports, ...localReports];
        const uniqueReports = Array.from(new Map(allReports.map(r => [r.id, r])).values());
        
        return uniqueReports;
    },

    getUserReports: async (email) => {
        const reports = await ReportService.getAllReports();
        if (!email) return [];
        return reports.filter(r => r.email && r.email.toLowerCase() === email.toLowerCase());
    },

    addReport: async (report, reportContent = null) => {
        const newReport = {
            id: `R-${Date.now().toString().slice(-4)}`,
            ...report,
            date: new Date().toISOString().split('T')[0],
            status: 'Completed',
            amount: report.amount || 150
        };

        // Always save to localStorage to ensure it's never lost
        try {
            const reports = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            reports.unshift(newReport);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));

            if (reportContent) {
                localStorage.setItem(`vehiclereportcheck_report_content_${newReport.vin}`, reportContent);
            }
        } catch (e) {
            console.warn('Failed to cache report locally', e);
        }

        try {
            const res = await fetch('/api/reports', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReport)
            });
            if (!res.ok) throw new Error('API missing');
            const savedReport = await res.json();
            return savedReport;
        } catch (error) {
            return newReport;
        }
    },

    getReportByVin: async (vin) => {
        const reports = await ReportService.getAllReports();
        return reports.find(r => r.vin === vin);
    },

    getReportContent: (vin) => {
        // Keep utilizing local storage for content cache for now
        return localStorage.getItem(`vehiclereportcheck_report_content_${vin}`);
    }
};
