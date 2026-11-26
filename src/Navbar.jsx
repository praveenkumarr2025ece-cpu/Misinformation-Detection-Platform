
import { NavLink } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

function Navbar() {
    return (
       <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-200 shadow-sm">

            {/* Logo */}
            <h2 className="text-xl font-bold text-blue-700">
                TruthLens
            </h2>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">

                <NavLink
                 to="/"
                 end
               className={({ isActive }) =>
                isActive
                ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-2"
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 pb-2 transition-all duration-200"
                }>Home
                </NavLink>
                <NavLink
                 to="/about"
                className={({ isActive }) =>
                isActive
                ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-2"
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 pb-2 transition-all duration-200"
                }>About Us
                </NavLink>
                <NavLink
                 to="/signin"
                className={({ isActive }) =>
                isActive
                ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-2"
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 pb-2 transition-all duration-200"
                }>SignIn
                </NavLink>
                <NavLink
                 to="/signup"
                className={({ isActive }) =>
                isActive
                ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-2"
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 pb-2 transition-all duration-200"
                }>SignUp
                </NavLink>
                <NavLink
                 to="/contact"
                className={({ isActive }) =>
                isActive
                ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-2"
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300 pb-2 transition-all duration-200"
                }>Contact
                </NavLink>

            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-5">

                <Search size={20} />
                <Bell size={20} />
                <User size={20} />

            </div>

        </nav>
    );
}

export default Navbar;
