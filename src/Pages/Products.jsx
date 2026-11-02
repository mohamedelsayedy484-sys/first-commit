

import products from "../Data/products";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";

function Products() {
  const{darkMode}=useTheme();
 return (
  <div className={`container-fluid py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
    <div className="container">
      <Link to="/home" className={`btn ${darkMode ? "btn-outline-light" : "btn-outline-dark"} mb-4`}>
        ← Back to Home
      </Link>

      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 col-lg-3" key={product.id}>
            <div className={`card h-100 ${darkMode ? "bg-secondary text-white border-light" : ""}`}>
              <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "200px", objectFit: "cover" }} />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>

                {product.sale !== null ? (
                  <p>
                    <span className="text-decoration-line-through text-muted me-2">${product.price}</span>
                    <span className="text-success fw-bold">${product.sale}</span>
                  </p>
                ) : (
                  <p className="fw-bold">${product.price}</p>
                )}

                <Link to={`/products/${product.id}`} className={`btn ${darkMode ? "btn-light" : "btn-dark"} w-100 mt-auto`}>
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Products;