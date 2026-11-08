
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navClass = ({ isActive }) =>
    `nav-link-custom ${isActive ? "active" : ""}`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="site-navbar sticky-top">
      <div className="container">
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/home" className="brand-logo" onClick={closeMenu}>
            <span className="brand-icon">M</span>
            <span>
              My<span className="brand-highlight">Website</span>
              <small>TECH STORE</small>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Navigation */}
          <div className={`navbar-content ${menuOpen ? "show" : ""}`}>

            <div className="nav-links">
              <NavLink to="/" end className={navClass} onClick={closeMenu}>
                Home
              </NavLink>

              <NavLink to="/products" className={navClass} onClick={closeMenu}>
                Products
              </NavLink>

              <NavLink to="/api-products" className={navClass} onClick={closeMenu}>
                Online Products
              </NavLink>

              <NavLink to="/about" className={navClass} onClick={closeMenu}>
                About
              </NavLink>

              <NavLink to="/register" className={navClass} onClick={closeMenu}>
                Login
              </NavLink>
            </div>

            {/* Actions */}
            <div className="nav-actions">
              <Link
                to="/products"
                className="shop-btn"
                onClick={closeMenu}
              >
                🛒 Shop Now
              </Link>

              <button className="theme-btn" onClick={toggleTheme}>
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
