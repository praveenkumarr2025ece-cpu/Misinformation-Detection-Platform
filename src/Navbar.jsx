import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">

            <h2 className="logo">DIGITAL SPAM DETECTION</h2>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;