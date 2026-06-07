const API_URL = '/api/settings';

const defaultSettings = {
    reportPackages: [
        { id: 1, name: 'Single Report', credits: 1, price: 14.00, perReport: 14.00 },
        { id: 2, name: '2 Reports', credits: 2, price: 24.00, perReport: 12.00, popular: true },
        { id: 3, name: '5 Reports', credits: 5, price: 45.00, perReport: 9.00, bestValue: true },
        { id: 4, name: '10 Reports', credits: 10, price: 70.00, perReport: 7.00 }
    ]
};

export const PricingService = {
    // Fetch from backend
    getSettings: async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error('Failed to fetch settings');
            return await res.json();
        } catch (error) {
            console.error('Error fetching pricing settings:', error);
            return defaultSettings;
        }
    },

    // Save to backend
    updateSettings: async (newSettings) => {
        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSettings)
            });
            if (!res.ok) throw new Error('Failed to save settings');
            return true;
        } catch (error) {
            console.error('Error updating pricing settings:', error);
            return false;
        }
    },

    updatePackage: async (type, packageId, updates) => {
        const settings = await PricingService.getSettings();
        const key = 'reportPackages';

        settings[key] = settings[key].map(pkg =>
            pkg.id === packageId ? { ...pkg, ...updates } : pkg
        );

        await PricingService.updateSettings(settings);
        return settings;
    },

    getPackage: async (type, packageId) => {
        const settings = await PricingService.getSettings();
        const key = 'reportPackages';
        return settings[key].find(pkg => pkg.id === packageId);
    }
};
