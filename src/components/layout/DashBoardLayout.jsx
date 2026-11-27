
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">

            <Sidebar />

            <div className="flex-1 min-w-0 min-h-screen bg-background text-foreground">
                <Outlet />
            </div>

        </div>
    );
}

export default DashboardLayout;
