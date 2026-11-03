import { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { useTheme } from "../Context/ThemeContext";
import instance from "../Api/axiosInstance";
function Api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const{darkMode}=useTheme();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await instance.get("/products");

        setProducts(response.data);
        toast.success("Products loaded successfully!");
      } catch (err) {
        setError("Failed to load products!");
        toast.error("Failed to load products!");
      } finally {
        setLoading(false);
      }
      
    };

    getProducts();
  }, []);
  console.log(products,"kkk");
  

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-2">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-center" />

      <div className={`container-fluid py-5 ${darkMode ? "bg-dark text-white" : "bg-light text-dark"}`}>
        <h1 className="text-center mb-4">Our Products</h1>

        <div className="row g-4">
          {products.map((product) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              key={product.id}
            >
              <div className={`card ${darkMode ? "bg-secondary text-white border-light" : ""}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-3"
                  style={{ height: "250px", objectFit: "contain" }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>

                  <p className="text-muted">{product.category}</p>

                  <p className="fw-bold fs-5 mt-auto">
                    ${product.price}
                  </p>

                  <button
                    className="btn btn-dark"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="card shadow mt-5">
            <div className="card-body">
              <h2>{selectedProduct.title}</h2>

              <p>
                <strong>Product ID:</strong> {selectedProduct.id}
              </p>

              <p>
                <strong>Category:</strong> {selectedProduct.category}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {selectedProduct.description}
              </p>

              <p>
                <strong>Price:</strong> ${selectedProduct.price}
              </p>

              <p>
                <strong>Rating:</strong>{" "}
                {selectedProduct.rating?.rate ?? "N/A"}
              </p>

              <button
                className="btn btn-outline-secondary"
                onClick={() => setSelectedProduct(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Api;