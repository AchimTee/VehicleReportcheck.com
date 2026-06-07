

import { ReportService } from './ReportService';

// Always use internal proxy/backend to leverage Smart Decode & Caching
const API_BASE_URL = '/api';
const REPORT_API_URL = '/api/reports';

export const VinService = {
    decodeVin: async (vin) => {
        try {
            console.log(`Fetching VIN data for ${vin}`);
            // Use our Smart Backend Endpoint
            const response = await fetch(`${API_BASE_URL}/vin-decode/${vin}`);

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`API Error: ${response.status} ${response.statusText} - ${text}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error decoding VIN:', error);
            throw error;
        }
    },

    getReport: async (vin) => {
        try {
            // 1. Check local cache first
            const cachedContent = ReportService.getReportContent(vin);
            if (cachedContent) {
                console.log('Serving report from cache');
                try {
                    const parsed = JSON.parse(cachedContent);
                    return { type: 'json', data: parsed };
                } catch (e) {
                    return { type: 'html', data: cachedContent };
                }
            }

            // 2. Fetch from external API with a 15-second timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            let response;
            try {
                // Use the Vite proxy (/vehicle-api) to avoid CORS issues
                response = await fetch(`/vehicle-api/vin-report-auction/${vin}`, {
                    method: 'GET',
                    signal: controller.signal
                });
            } catch (fetchErr) {
                if (fetchErr.name === 'AbortError') {
                    throw new Error('API Request Timed Out. The national database is taking too long to respond.');
                }
                throw fetchErr;
            } finally {
                clearTimeout(timeoutId);
            }

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`API Error: ${response.status} ${response.statusText} - ${text}`);
            }

            const text = await response.text();
            
            // 3. Cache the successful response content so it opens instantly next time
            try {
                localStorage.setItem(`vehiclereportcheck_report_content_${vin}`, text);
            } catch (cacheErr) {
                console.warn('Failed to cache report locally:', cacheErr);
            }

            try {
                const json = JSON.parse(text);
                if (json.status === 'error' || json.error) {
                    throw new Error(json.message || json.error || 'API Error');
                }
                return { type: 'json', data: json };
            } catch (e) {
                // If it's not JSON (or parsing failed but we know it's not an error response)
                // it might be raw HTML from the API
                if (e.message.includes('API Error')) throw e;
                return { type: 'html', data: text };
            }
        } catch (error) {
            console.error('Error fetching report data:', error);
            throw error;
        }
    },

};
