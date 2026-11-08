
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./FeatureCard.css";

function FeatureCard({ products, detailsLink = false }) {
  const hasSale = products.sale != null;

  return (
    <div className="card product-card h-100">
      <div className="product-image">
        {hasSale && <span className="sale-badge">SALE</span>}
        <img src={products.image} alt={products.name} />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{products.name}</h5>

        <div className="product-price">
          {hasSale && (
            <span className="old-price">${products.price}</span>
          )}

          <strong className={hasSale ? "sale-price" : "normal-price"}>
            ${hasSale ? products.sale : products.price}
          </strong>
        </div>

        {detailsLink ? (
          <Link className="buy-btn mt-auto" to={`/products/${products.id}`}>
            View Details →
          </Link>
        ) : (
          <button className="buy-btn mt-auto">
            Buy Now <FaShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
