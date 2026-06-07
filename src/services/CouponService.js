
export const CouponService = {
    // Fetch all coupons from server
    getAllCoupons: async () => {
        try {
            const res = await fetch('/api/coupons');
            if (!res.ok) throw new Error('Failed to fetch coupons');
            return await res.json(); // Returns array
        } catch (error) {
            console.error('Error fetching coupons:', error);
            return [];
        }
    },

    // Validate a specific code via server
    validateCoupon: async (code) => {
        try {
            const res = await fetch('/api/validate-coupon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            });
            // Returns { valid: true/false, coupon: Object, message: String }
            return await res.json();
        } catch (error) {
            console.error('Error validating coupon:', error);
            return { valid: false, message: 'Server error during validation' };
        }
    },

    // Add a new coupon
    addCoupon: async (couponData) => {
        try {
            const res = await fetch('/api/coupons', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(couponData)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to add coupon');
            return data;
        } catch (error) {
            console.error('Error adding coupon:', error);
            throw error;
        }
    },

    // Delete a coupon
    deleteCoupon: async (id) => {
        try {
            await fetch('/api/coupons/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            return true;
        } catch (error) {
            console.error('Error deleting coupon:', error);
            return false;
        }
    },

    // Increment usage count
    incrementUsage: async (code) => {
        try {
            const res = await fetch('/api/coupons/use', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            });
            return await res.json();
        } catch (error) {
            console.error('Error incrementing coupon usage:', error);
            return { success: false };
        }
    }
};
