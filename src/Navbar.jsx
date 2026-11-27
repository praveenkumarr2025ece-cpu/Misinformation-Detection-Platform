
import { NavLink } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-5 bg-white dark:bg-gray-900 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">

            {/* Logo */}
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                TruthLens
            </h2>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">

                <NavLink
                    to="/home"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 dark:border-blue-400 pb-2"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pb-2 transition-all duration-200"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 dark:border-blue-400 pb-2"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pb-2 transition-all duration-200"
                    }
                >
                    About Us
                </NavLink>

                <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 dark:border-blue-400 pb-2"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pb-2 transition-all duration-200"
                    }
                >
                    SignUp
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700 dark:text-blue-400 font-semibold border-b-2 border-blue-700 dark:border-blue-400 pb-2"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 pb-2 transition-all duration-200"
                    }
                >
                    Contact
                </NavLink>

            </div>

            {/* Navbar Icons */}
            <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300">

                <Search size={20} className="cursor-pointer hover:text-blue-600" />

                <Bell size={20} className="cursor-pointer hover:text-blue-600" />

                <User size={20} className="cursor-pointer hover:text-blue-600" />

            </div>

        </nav>
    );
}

export default Navbar;
