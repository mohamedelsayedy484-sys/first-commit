import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const{darkMode,toggleTheme}=useTheme();

  const navClass = ({ isActive }) =>
    `nav-link px-3 ${
      isActive ? "text-warning fw-bold" : "text-white"
    }`;

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      window.location.href =
        `/products?search=${encodeURIComponent(search.trim())}`;
    }
  }

  return (
    <nav className="navbar navbar-dark bg-dark sticky-top border-bottom border-secondary shadow ">
      <div className="container py-2">
        <Link to="/home" className="navbar-brand fw-bold fs-3">
          My<span className="text-warning">Website</span>
          <span className="d-block text-secondary " style={{ fontSize: "10px", letterSpacing: "3px" }}>
            TECH STORE
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="mainNavbar"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="mainNavbar"
          className={`w-100 ${
            menuOpen ? "d-block" : "d-none"
          }`}
        >
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3 mt-3">
            <div className="navbar-nav flex-lg-row align-items-center gap-lg-3">
              <NavLink to="/" end className={navClass} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/products" className={navClass} onClick={() => setMenuOpen(false)}>
                Products
              </NavLink>

              <NavLink to="/api-products" className={navClass} onClick={() => setMenuOpen(false)}>
               Online Products 
              </NavLink>

              <NavLink to="/about" className={navClass} onClick={() => setMenuOpen(false)}>
                About
              </NavLink>

              <NavLink to="/register" className={navClass} onClick={() => setMenuOpen(false)}>
                Login
              </NavLink>

             
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <form onSubmit={handleSearch} className="d-flex rounded-pill border border-secondary overflow-hidden">
                <input
                  type="search"
                  className="form-control bg-dark text-white border-0 shadow-none"
                  placeholder="Search products..."
                  aria-label="Search products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit" className="btn btn-warning">
                  🔍
                </button>
              </form>

              <Link
                to="/products"
                className="btn btn-outline-warning rounded-pill text-nowrap"
                onClick={() => setMenuOpen(false)}
              >
                🛒 Shop
              </Link>
              
              <button className="btn btn-outline-warning rounded-pill" onClick={toggleTheme}>
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