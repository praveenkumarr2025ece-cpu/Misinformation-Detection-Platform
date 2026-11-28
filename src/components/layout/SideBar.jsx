
import { NavLink } from 'react-router-dom';

import {
    LayoutDashboard,
    FileSearch,
    History,
    ChartBar,
    Settings
} from 'lucide-react';

function Sidebar({ onNavigate }) {

    const menuItems = [
        { name: 'Dashboard', path: '/home', icon: LayoutDashboard },
        { name: 'Verify News', path: '/verify', icon: FileSearch },
        { name: 'Verification History', path: '/history', icon: History },
        { name: 'Reports', path: '/reports', icon: ChartBar },
        { name: 'Settings', path: '/settings', icon: Settings }
    ];

    return (
        <aside className="w-64 min-w-64 min-h-screen h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-4">

            {/* Sidebar Heading */}
            <h2 className="font-bold text-lg mb-8 mt-2 px-3">
                TruthLens
            </h2>

            {/* Navigation Items */}
            <div className="flex flex-col gap-2">

                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={onNavigate}
                            className={({ isActive }) =>
                                `flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-sidebar-accent text-sidebar-accent-foreground font-semibold'
                                        : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                                }`
                            }
                        >
                            <Icon size={21} className="shrink-0" />

                            <span className="block text-sm whitespace-nowrap">
                                {item.name}
                            </span>

                        </NavLink>
                    );
                })}

            </div>

        </aside>
    );
}

export default Sidebar;
