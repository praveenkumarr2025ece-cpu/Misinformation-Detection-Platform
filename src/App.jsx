import VerifyNews from './Pages/VerifyNews';
import History from './Pages/History';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import SystemBanner from './components/layout/SystemBanner';

function App() {

    return (
        <BrowserRouter>
        <SystemBanner />

            <Navbar />

            <Routes>
                <Route path="/verify" element={<VerifyNews />} />
                <Route path="/history" element={<History />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;