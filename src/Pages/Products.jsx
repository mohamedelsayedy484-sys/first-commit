
import products from "../Data/products";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import FeatureCard from "../Components/FeatureCard";

function Products() {
  const { darkMode } = useTheme();

  return (
    <div className={`container-fluid py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <div className="container">
        <Link
          to="/home"
          className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"} mb-4`}
        >
          ← Back to Home
        </Link>

        <h2 className="text-center mb-4">Our Products</h2>

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product.id}>
              <FeatureCard products={product} detailsLink={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
