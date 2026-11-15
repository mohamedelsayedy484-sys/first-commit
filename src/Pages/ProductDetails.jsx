
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import instance from "../Api/axiosInstance";

function ApiProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProductDetails() {
      try {
        setLoading(true);
        setError("");

        const response = await instance.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    }

    getProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading Product Details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/api-products")}
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div
      className={`product-details-page ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="container py-5">
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => navigate("/api-products")}
        >
          Back to Products
        </button>

        <div className="product-details-card">
          <div className="row align-items-center g-4">
            <div className="col-md-5">
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>

            <div className="col-md-7">
              <span className="product-category">
                {product.category}
              </span>

              <h2 className="my-3">{product.title}</h2>

              <p className="product-rating">
                Rating: {product.rating?.rate ?? "N/A"}
                {" "}({product.rating?.count ?? 0} reviews)
              </p>

              <h3 className="product-price">
                ${product.price}
              </h3>

              <div className="product-description">
                <h5>Product Description</h5>
                <p>{product.description}</p>
              </div>

              <p className="product-id">
                Product ID: {product.id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiProductDetails;
