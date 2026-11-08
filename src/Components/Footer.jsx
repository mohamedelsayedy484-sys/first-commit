
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/home" className="footer-logo">
              My<span>Website</span>
            </Link>

            <p>
              Your trusted destination for the latest technology
              and premium electronic products.
            </p>

            <Link to="/products" className="footer-shop-btn">
              Explore Products →
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h5>Quick Links</h5>
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/api-products">Online Products</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* Account */}
          <div className="footer-column">
            <h5>My Account</h5>
            <Link to="/register">Login / Register</Link>
            <Link to="/products">Shop Now</Link>
            <Link to="/about">Customer Support</Link>
          </div>

          {/* About */}
          <div className="footer-column footer-info">
            <h5>Why MyWebsite?</h5>
            <p> Latest Technology</p>
            <p> Quality Products</p>
            <p> Modern Shopping Experience</p>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>

          <p>
            Built with <span>♥</span> using React & Bootstrap
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
