
import DashboardLayout from './components/layout/DashboardLayout';
import AuthPage from './Pages/AuthPage';

import VerifyNews from './Pages/VerifyNews';
import History from './Pages/History';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from 'react-router-dom';

import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import SystemBanner from './components/layout/SystemBanner';

function Layout() {
    const location = useLocation();

    const isLoginPage =
        location.pathname === '/' ||
        location.pathname === '/signin';

    return (
        <>
            {!isLoginPage && <SystemBanner />}
            {!isLoginPage && <Navbar />}

            <Routes>

                {/* Authentication */}
                <Route path="/" element={<AuthPage />} />
                <Route path="/signin" element={<AuthPage />} />

                {/* Dashboard Layout */}
                <Route element={<DashboardLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/verify" element={<VerifyNews />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>

                {/* Other Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
