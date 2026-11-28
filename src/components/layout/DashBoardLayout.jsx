
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-background text-foreground">

            {/* Desktop Sidebar */}
            <div className={`hidden md:block shrink-0 transition-all duration-300 ${
                sidebarOpen ? 'w-64' : 'w-0'
            }`}>
                {sidebarOpen && (
                    <Sidebar
                        collapsed={false}
                        onNavigate={() => {}}
                    />
                )}
            </div>

            {/* Mobile Overlay */}
            {mobileSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setMobileSidebarOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 md:hidden transform transition-transform duration-300 ${
                    mobileSidebarOpen
                        ? 'translate-x-0'
                        : '-translate-x-full'
                }`}
            >
                <div className="relative h-full">
                    <button
                        onClick={() => setMobileSidebarOpen(false)}
                        className="absolute right-3 top-4 z-10 p-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground"
                        aria-label="Close sidebar"
                    >
                        <X size={20} />
                    </button>

                    <Sidebar
                        collapsed={false}
                        onNavigate={() => setMobileSidebarOpen(false)}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0 min-h-screen">

                {/* Dashboard Header */}
                <header className="h-16 flex items-center px-4 md:px-6 border-b border-border bg-background">

                    {/* Desktop Hamburger */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="hidden md:flex p-2 rounded-lg hover:bg-accent"
                        aria-label="Toggle sidebar"
                    >
                        <Menu size={22} />
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileSidebarOpen(true)}
                        className="md:hidden p-2 rounded-lg hover:bg-accent"
                        aria-label="Open sidebar"
                    >
                        <Menu size={22} />
                    </button>

                    <h2 className="ml-3 font-semibold text-lg">
                        Workspace
                    </h2>

                </header>

                {/* Page Content */}
                <main className="min-w-0">
                    <Outlet />
                </main>

            </div>
        </div>
    );
}

export default DashboardLayout;
