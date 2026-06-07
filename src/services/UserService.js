const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', joined: '2023-01-15', password: '123456', credits: 0 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Dealer', status: 'Active', joined: '2023-02-20', password: '123456', credits: 0 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive', joined: '2023-03-10', password: '123456', credits: 0 },
    { id: 4, name: 'Super Admin', email: 'Admin@vehiclereportcheck.com', role: 'Admin', status: 'Active', joined: '2022-11-05', password: '02413', credits: 999 },
    { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Active', joined: '2023-04-01', password: '123456', credits: 0 },
];

export const UserService = {
    getAllUsers: async () => {
        // Legacy: Fetch large batch
        const result = await UserService.getUsers({ limit: 1000 });
        return result.data;
    },

    getUsers: async ({ page = 1, limit = 50, search = '', role = '' } = {}) => {
        try {
            const query = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
                search,
                role
            });
            const res = await fetch(`/api/users?${query.toString()}`);
            if (!res.ok) throw new Error('Failed to fetch users');

            const response = await res.json();
            let users = response.data || [];

            // Seed if empty (Legacy check moved inside data check, effectively disabling auto-seed on search, which is good)
            if (users.length === 0 && !search && !role && page === 1) {
                // Only seed if main list is empty
                console.log('Seeding initial users...');
                for (const user of initialUsers) {
                    await fetch('/api/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(user) });
                }
                const res2 = await fetch(`/api/users?limit=${limit}`);
                const data2 = await res2.json();
                users = data2.data || [];
            }

            return {
                data: users,
                total: response.total || 0,
                page: response.page || 1,
                totalPages: response.totalPages || 1
            };
        } catch (error) {
            console.error('Error fetching users:', error);
            return { data: [], total: 0, page: 1, totalPages: 1 };
        }
    },

    getUserByEmail: async (email) => {
        const users = await UserService.getAllUsers();
        return users.find(u => u.email.toLowerCase() === email.toLowerCase());
    },

    addUser: async (user) => {
        const newUser = {
            id: Date.now(),
            ...user,
            password: user.password || '123456',
            joined: new Date().toISOString().split('T')[0],
            status: 'Active',
            role: 'User',
            credits: 0
        };

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });
            return await res.json();
        } catch (error) {
            console.error('Error adding user:', error);
            return newUser; // Fallback?
        }
    },

    deleteUser: async (id) => {
        try {
            await fetch('/api/users/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    },

    updateUser: async (id, data) => {
        try {
            await fetch('/api/users/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, ...data })
            });
        } catch (error) {
            console.error('Error updating user:', error);
        }
    },

    changePassword: async (id, newPassword) => {
        await UserService.updateUser(id, { password: newPassword });
    },

    addCredits: async (email, amount) => {
        const user = await UserService.getUserByEmail(email);
        if (user) {
            const newCredits = (user.credits || 0) + amount;
            await UserService.updateUser(user.id, { credits: newCredits });

            // Sync session
            ['user', 'vehiclereportcheck_user'].forEach(key => {
                const sessionData = localStorage.getItem(key);
                if (sessionData) {
                    try {
                        const sessionUser = JSON.parse(sessionData);
                        if (sessionUser.email === email) {
                            sessionUser.credits = newCredits;
                            localStorage.setItem(key, JSON.stringify(sessionUser));
                        }
                    } catch(e) {}
                }
            });
        }
    },

    deductCredit: async (email) => {
        let user = await UserService.getUserByEmail(email);
        
        if (!user) {
            const sessionUser = JSON.parse(localStorage.getItem('vehiclereportcheck_user') || localStorage.getItem('user') || '{}');
            if (sessionUser.email === email) user = sessionUser;
        }

        if (user && (user.credits || 0) > 0) {
            const newCredits = user.credits - 1;
            await UserService.updateUser(user.id, { credits: newCredits });

            // Sync session
            ['user', 'vehiclereportcheck_user'].forEach(key => {
                const sessionData = localStorage.getItem(key);
                if (sessionData) {
                    try {
                        const sessionUser = JSON.parse(sessionData);
                        if (sessionUser.email === email) {
                            sessionUser.credits = newCredits;
                            localStorage.setItem(key, JSON.stringify(sessionUser));
                        }
                    } catch(e) {}
                }
            });
            return true;
        }
        return false;
    },

    mockGoogleLogin: async (email) => {
        // 1. Basic Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            throw new Error("Invalid email format");
        }

        const mockGoogleUser = {
            email: email,
            name: email.split('@')[0],
            profilePic: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
            google: true
        };

        // 2. Check if user exists
        let user = await UserService.getUserByEmail(email);

        if (user) {
            // 3. SECURE LOGIN: If user exists, challenge for password
            // This prevents impersonation using the Google button
            const enteredPassword = window.prompt(`Welcome back, ${user.name}! Please enter your password to verify ownership of this email:`);

            if (!enteredPassword) {
                throw new Error("Login cancelled");
            }

            if (enteredPassword !== user.password) {
                alert("Incorrect password. Verification failed.");
                throw new Error("Invalid password for existing user");
            }

            // Password correct - proceed
        } else {
            // 4. New User - Auto Create (Mock Behavior)
            // Ideally we should ask them to set a password here too, so they can login normally later.
            const newPassword = window.prompt("Welcome! Please set a password for your new account:");

            if (!newPassword || newPassword.length < 6) {
                alert("Password is required and must be at least 6 characters.");
                throw new Error("Password setup cancelled or invalid");
            }

            user = await UserService.addUser({
                ...mockGoogleUser,
                password: newPassword
            });
        }

        // Simulate login session
        localStorage.setItem('user', JSON.stringify(user));
        window.dispatchEvent(new Event('storage'));

        return user;
    }
};
