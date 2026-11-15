
return (
  <div className={`product-details-page ${darkMode ? "dark" : ""}`}>
    <div className="container py-5">

      <button
        className="btn btn-outline-secondary mb-4"
        onClick={() => navigate(-1)}
      >
        Back to Products
      </button>

      <div className="product-details-card">
        <div className="row g-4 align-items-center">

          {/* Product Image */}
          <div className="col-md-5">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="col-md-7">
            <div className="product-info">

              <span className="product-category">
                {product.category}
              </span>

              <h2>{product.title}</h2>

              <div className="product-rating">
                Rating: {product.rating?.rate ?? "N/A"}
                ({product.rating?.count ?? 0} reviews)
              </div>

              <h3 className="product-price">
                ${product.price}
              </h3>

              <div className="product-description">
                <h5>Product Description</h5>
                <p>{product.description}</p>
              </div>

              <div className="product-id">
                Product ID: {product.id}
              </div>

              <button
                className="btn btn-dark w-100 mt-4"
                onClick={() => navigate("/api-products")}
              >
                Back to Products
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);
