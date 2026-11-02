import { FaShoppingCart } from "react-icons/fa";

function FeatureCard({ products }) {
  return (
    <div className="card shadow-sm h-100">
      <img
        src={products.image}
        className="card-img-top"
        alt={products.name}
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>

        {products.sale !== null ? (
          <p className="card-text">
            <del className="text-muted">${products.price}</del>{' '}
            <strong className="text-danger">${products.sale}</strong>
          </p>
        ) : (
          <p className="card-text">${products.price}</p>
        )}
          
        <button className=" d-flex btn btn-dark justify-between   w-50">
          Buy
          <FaShoppingCart />
         
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;
