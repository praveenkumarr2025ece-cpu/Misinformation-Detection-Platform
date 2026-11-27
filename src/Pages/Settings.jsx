
import { useState, useEffect } from 'react';

function Settings() {

    // Load registered user information
    const [name, setName] = useState(() => {
        const user = JSON.parse(
            localStorage.getItem('registeredUser') || 'null'
        );

        return user?.name || '';
    });

    const [email, setEmail] = useState(() => {
        const user = JSON.parse(
            localStorage.getItem('registeredUser') || 'null'
        );

        return user?.email || '';
    });

    // Load saved preferences
    const [notifications, setNotifications] = useState(
        localStorage.getItem('notifications') !== 'false'
    );

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true'
    );

    const [message, setMessage] = useState('');

    // Apply dark mode whenever its state changes
    useEffect(() => {
        document.documentElement.classList.toggle(
            'dark',
            darkMode
        );
    }, [darkMode]);

    // Handle dark mode checkbox
    function handleDarkModeChange(e) {
        const enabled = e.target.checked;

        setDarkMode(enabled);

        localStorage.setItem('darkMode', enabled);
    }

    // Save profile and preferences
    function handleSave(e) {
        e.preventDefault();

        const existingUser = JSON.parse(
            localStorage.getItem('registeredUser') || 'null'
        );

        if (existingUser) {
            const updatedUser = {
                ...existingUser,
                name: name,
                email: email
            };

            localStorage.setItem(
                'registeredUser',
                JSON.stringify(updatedUser)
            );
        }

        localStorage.setItem(
            'notifications',
            notifications
        );

        localStorage.setItem(
            'darkMode',
            darkMode
        );

        setMessage('Settings saved successfully!');
    }

    return (
        <main className="flex-1 min-w-0 p-4 md:p-8 bg-gray-50 dark:bg-gray-950 min-h-screen">

            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Settings
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8">
                Manage your TruthLens workspace preferences.
            </p>

            <form
                onSubmit={handleSave}
                className="max-w-3xl space-y-6"
            >

                {/* Profile Information */}

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">

                    <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-white">
                        Profile Information
                    </h2>

                    <div className="space-y-4">

                        <div>
                            <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2 text-gray-700 dark:text-gray-300">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>

                </div>

                {/* Application Preferences */}

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">

                    <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-white">
                        Application Preferences
                    </h2>

                    {/* Notifications */}

                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">

                        <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">
                                Email Notifications
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Receive updates about verification activity.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.target.checked)}
                            className="w-5 h-5 accent-blue-600"
                        />

                    </div>

                    {/* Dark Mode */}

                    <div className="flex justify-between items-center py-3">

                        <div>
                            <h3 className="font-medium text-gray-800 dark:text-white">
                                Dark Mode
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Switch between light and dark appearance.
                            </p>
                        </div>

                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={handleDarkModeChange}
                            className="w-5 h-5 accent-blue-600"
                        />

                    </div>

                </div>

                {/* Save Button */}

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Save Settings
                </button>

                {message && (
                    <p className="text-green-600 dark:text-green-400 font-medium">
                        {message}
                    </p>
                )}

            </form>

        </main>
    );
}

export default Settings;
