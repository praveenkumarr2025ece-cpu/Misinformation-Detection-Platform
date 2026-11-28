
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
    Search,
    Bell,
    User,
    X,
    Settings,
    LogOut,
    CheckCheck,
    Menu
} from 'lucide-react';

function Navbar() {
    const navigate = useNavigate();

    // Search states
    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [articles, setArticles] = useState([]);

    // Notification states
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState(() => {
        return JSON.parse(
            localStorage.getItem('truthLensNotifications') || '[]'
        );
    });

    // Profile state
    const [showProfile, setShowProfile] = useState(false);

    // Hamburger menu state
    const [showMenu, setShowMenu] = useState(false);

    // Get registered user details
    const user = JSON.parse(
        localStorage.getItem('registeredUser') || 'null'
    );

    // Update notifications
    useEffect(() => {
        function updateNotifications() {
            const savedNotifications = JSON.parse(
                localStorage.getItem('truthLensNotifications') || '[]'
            );

            setNotifications(savedNotifications);
        }

        window.addEventListener(
            'notificationsUpdated',
            updateNotifications
        );

        return () => {
            window.removeEventListener(
                'notificationsUpdated',
                updateNotifications
            );
        };
    }, []);

    // Search functionality
    function handleSearchClick() {
        if (!showSearch) {
            const savedArticles = JSON.parse(
                localStorage.getItem('articles') || '[]'
            );

            setArticles(savedArticles);
        }

        setShowSearch(!showSearch);
        setShowNotifications(false);
        setShowProfile(false);
        setShowMenu(false);
        setSearchTerm('');
    }

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleArticleClick() {
        setShowSearch(false);
        setSearchTerm('');
        navigate('/history');
    }

    // Notification functionality
    const unreadCount = notifications.filter(
        (notification) => !notification.read
    ).length;

    function handleBellClick() {
        setShowNotifications(!showNotifications);
        setShowSearch(false);
        setShowProfile(false);
        setShowMenu(false);
    }

    function markAllAsRead() {
        const updatedNotifications = notifications.map((notification) => ({
            ...notification,
            read: true
        }));

        localStorage.setItem(
            'truthLensNotifications',
            JSON.stringify(updatedNotifications)
        );

        setNotifications(updatedNotifications);
    }

    function handleNotificationClick(notification) {
        const updatedNotifications = notifications.map((item) =>
            item.id === notification.id
                ? { ...item, read: true }
                : item
        );

        localStorage.setItem(
            'truthLensNotifications',
            JSON.stringify(updatedNotifications)
        );

        setNotifications(updatedNotifications);
        setShowNotifications(false);
        navigate('/history');
    }

    // Profile functionality
    function handleProfileClick() {
        setShowProfile(!showProfile);
        setShowSearch(false);
        setShowNotifications(false);
        setShowMenu(false);
    }

    function handleLogout() {
        setShowProfile(false);
        navigate('/signin');
    }

    // Hamburger functionality
    function handleMenuClick() {
        setShowMenu(!showMenu);
        setShowSearch(false);
        setShowNotifications(false);
        setShowProfile(false);
    }

    function closeMenu() {
        setShowMenu(false);
    }

    return (
        <nav className="relative z-30 flex items-center justify-between px-4 md:px-8 py-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">

            {/* Logo */}
            <div
                onClick={() => navigate('/home')}
                className="text-xl font-bold text-blue-700 dark:text-blue-400 cursor-pointer"
            >
                TruthLens
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">

                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 pb-2"
                            : "hover:text-blue-600 dark:hover:text-blue-400"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                    About Us
                </NavLink>

                <NavLink
                    to="/signup"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                    Sign Up
                </NavLink>

                <NavLink
                    to="/contact"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                    Contact
                </NavLink>

            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 md:gap-5">

                {/* Hamburger Menu - Mobile */}
                <button
                    onClick={handleMenuClick}
                    aria-label="Toggle navigation menu"
                    className="md:hidden hover:text-blue-600"
                >
                    {showMenu ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Search */}
                <button
                    onClick={handleSearchClick}
                    aria-label="Search articles"
                    className="hover:text-blue-600"
                >
                    {showSearch ? <X size={20} /> : <Search size={20} />}
                </button>

                {/* Notification Bell */}
                <button
                    onClick={handleBellClick}
                    aria-label="Notifications"
                    className="relative hover:text-blue-600"
                >
                    <Bell size={20} />

                    {unreadCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                            {unreadCount}
                        </span>
                    )}
                </button>

                {/* Profile */}
                <button
                    onClick={handleProfileClick}
                    aria-label="Profile"
                    className="hover:text-blue-600"
                >
                    <User size={20} />
                </button>

            </div>

            {/* Mobile Navigation Dropdown */}
            {showMenu && (
                <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg p-5 flex flex-col gap-4 md:hidden">

                    <NavLink
                        to="/home"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 dark:text-blue-400 font-semibold"
                                : "hover:text-blue-600 dark:hover:text-blue-400"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/signup"
                        onClick={closeMenu}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Sign Up
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        Contact
                    </NavLink>

                </div>
            )}

            {/* Search Dropdown */}
            {showSearch && (
                <div className="absolute right-4 md:right-32 top-16 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4">

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search articles..."
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white outline-none"
                    />

                    <div className="mt-3 max-h-60 overflow-y-auto">

                        {searchTerm && filteredArticles.length === 0 && (
                            <p className="text-sm text-gray-500 p-2">
                                No articles found.
                            </p>
                        )}

                        {searchTerm && filteredArticles.map((article) => (
                            <button
                                key={article.id}
                                onClick={handleArticleClick}
                                className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                {article.title}
                            </button>
                        ))}

                    </div>
                </div>
            )}

            {/* Notification Dropdown */}
            {showNotifications && (
                <div className="absolute right-12 md:right-16 top-16 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4">

                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">
                            Notifications
                        </h3>

                        {unreadCount > 0 && (
                            <button
                                onClick={markAllAsRead}
                                className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1"
                            >
                                <CheckCheck size={14} />
                                Mark all read
                            </button>
                        )}
                    </div>

                    <div className="max-h-64 overflow-y-auto">

                        {notifications.length === 0 && (
                            <p className="text-sm text-gray-500 p-3">
                                No notifications yet.
                            </p>
                        )}

                        {notifications.map((notification) => (
                            <button
                                key={notification.id}
                                onClick={() =>
                                    handleNotificationClick(notification)
                                }
                                className={`w-full text-left p-3 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                    !notification.read
                                        ? 'bg-blue-50 dark:bg-gray-700'
                                        : ''
                                }`}
                            >
                                <p className="text-sm font-medium">
                                    {notification.message || notification.title || 'New notification'}
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                    {notification.time || notification.createdAt || ''}
                                </p>
                            </button>
                        ))}

                    </div>
                </div>
            )}

            {/* Profile Dropdown */}
            {showProfile && (
                <div className="absolute right-4 top-16 w-64 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-4">

                    <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-3">

                        <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                                <User size={22} />
                            </div>

                            <div className="min-w-0">
                                <p className="font-semibold truncate">
                                    {user?.name || 'User'}
                                </p>

                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    {user?.email || 'No email available'}
                                </p>
                            </div>

                        </div>

                    </div>

                    <button
                        onClick={() => {
                            setShowProfile(false);
                            navigate('/settings');
                        }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
                    >
                        <Settings size={18} />
                        Settings
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 text-left"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            )}

        </nav>
    );
}

export default Navbar;
