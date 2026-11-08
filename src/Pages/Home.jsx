
import { Link } from "react-router-dom";
import products from "../Data/products";
import { useTheme } from "../Context/ThemeContext";
import FeatureCard from "../Components/FeatureCard";

function Home() {
  const { darkMode } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="text-warning fw-bold">
                PREMIUM QUALITY • BEST PRICES
              </p>

              <h1 className="display-3 fw-bold">
                Upgrade Your
                <span className="text-warning"> Tech Experience</span>
              </h1>

              <p className="lead text-light my-4">
                Discover the latest gadgets, electronics and accessories.
                Find your favorite products at the best prices.
              </p>

              <Link to="/products" className="btn btn-warning btn-lg fw-bold">
                Shop Now →
              </Link>
            </div>

            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200"
                alt="Modern electronics and gadgets"
                className="img-fluid rounded-4 shadow"
                style={{
                  width: "100%",
                  height: "380px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-4">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-lg-3">
              <h5>🚚 Free Shipping</h5>
              <p className="text-secondary mb-0">On selected orders</p>
            </div>

            <div className="col-6 col-lg-3">
              <h5>🔒 Secure Payment</h5>
              <p className="text-secondary mb-0">Safe checkout</p>
            </div>

            <div className="col-6 col-lg-3">
              <h5>↩️ Easy Returns</h5>
              <p className="text-secondary mb-0">Shop with confidence</p>
            </div>

            <div className="col-6 col-lg-3">
              <h5>🎧 Support</h5>
              <p className="text-secondary mb-0">We're here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Featured Products</h2>
            <p className="text-secondary">
              Discover our latest gadgets
            </p>
          </div>

          <Link to="/products" className="btn btn-outline-dark">
            View All →
          </Link>
        </div>

        <div className="row g-4">
          {products.slice(0, 6).map((product) => (
            <div className="col-6 col-lg-4 col-xl-2" key={product.id}>
              <FeatureCard products={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/products" className="btn btn-warning btn-lg fw-bold">
            Explore All Products →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
