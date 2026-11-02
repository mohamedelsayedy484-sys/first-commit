import { Link, useParams } from "react-router-dom";
import products from "../Data/products";



function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div className="container py-5">Product Not Found</div>;
  }

  return (
    <div className="container py-5">
      <Link to="/products"
       className="btn btn-outline-dark mb-4"
      >
       ← Back to Products
      </Link>

        
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>Product ID: {product.id}</p>

          <h4>
            {product.sale !== null ? (
              <>
                <span className="text-success me-2">
                  ${product.sale}
                </span>
                <del>${product.price}</del>
              </>
            ) : (
              `$${product.price}`
            )}
          </h4>
        </div>
      </div>
            
    </div>
  );
}

export default ProductDetails;