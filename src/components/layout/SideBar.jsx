
import { NavLink } from 'react-router-dom';

import {
    LayoutDashboard,
    FileSearch,
    History,
    ChartBar,
    Settings
} from 'lucide-react';

function Sidebar() {

    const menuItems = [
        { name: "Dashboard", path: "/home", icon: LayoutDashboard },
        { name: "Verify News", path: "/verify", icon: FileSearch },
        { name: "Verification History", path: "/history", icon: History },
        { name: "Reports", path: "/reports", icon: ChartBar },
        { name: "Settings", path: "/settings", icon: Settings }
    ];

    return (
        <aside className="w-16 md:w-64 min-h-screen shrink-0 bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-2 md:p-5 transition-colors duration-300">

            <h2 className="hidden md:block text-lg font-bold mb-6">
                Workspace
            </h2>

            <div className="flex flex-col gap-2">

                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            title={item.name}
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                                    : "flex items-center gap-3 p-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                            }
                        >
                            <Icon size={20} />

                            <span className="hidden md:inline">
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
