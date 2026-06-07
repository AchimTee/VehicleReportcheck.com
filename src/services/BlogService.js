export const BlogService = {
    getAllBlogs: async () => {
        try {
            const res = await fetch('/api/blogs');
            if (!res.ok) return [];
            const data = await res.json();
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('Error fetching blogs:', error);
            return [];
        }
    },

    addBlog: async (blog) => {
        try {
            const res = await fetch('/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            });
            return await res.json();
        } catch (error) {
            console.error('Error adding blog:', error);
            throw error;
        }
    },

    updateBlog: async (id, updatedData) => {
        try {
            const res = await fetch('/api/blogs/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...updatedData })
            });
            return await res.json();
        } catch (error) {
            console.error('Error updating blog:', error);
            throw error;
        }
    },

    deleteBlog: async (id) => {
        try {
            await fetch('/api/blogs/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    }
};
