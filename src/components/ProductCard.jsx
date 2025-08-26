import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <span className="product-brand">{product.brand}</span>
          <span className="product-compatibility">
            Compatible: {product.compatibility.join(", ")}
          </span>
        </div>
        
        <p className="product-price">{product.price}</p>
        <div className="product-actions">
          <button 
            className="add-to-cart" 
            onClick={() => onAddToCart(product)}
          >
            Ajouter
          </button>
          <button className="view-details">Détails</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;