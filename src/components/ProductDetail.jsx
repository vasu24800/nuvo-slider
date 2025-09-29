import React from "react";
import "../styles/ProductDetail.scss";

const ProductDetail = ({ product, isActive }) => (
  <div className={`product-detail${isActive ? " active" : ""}`}>
    <div className="product-content">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button className="add-cart-btn" tabIndex={-1} aria-disabled="true">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductDetail;
