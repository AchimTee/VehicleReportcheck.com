
export const PaymentService = {
    getAllPayments: async () => {
        try {
            const res = await fetch('/api/payments');
            if (!res.ok) return [];
            const data = await res.json();
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('Error fetching payments:', error);
            return [];
        }
    },

    // Kept for compatibility, but primarily payments come from server callbacks
    addPayment: async (payment) => {
        console.warn('Manual payment addition via frontend is deprecated. Payments are recorded via server callbacks.');
        // If we really needed manual add, we'd need a POST /api/payments endpoint which we didn't create.
        return payment;
    }
};
