import React from 'react';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity, total }) => {
  if (!isOpen) return null;

  return (
    <div className="cart-sidebar open">
      <div className="cart-header">
        <h2>Votre Panier</h2>
        <button className="close-cart" onClick={onClose}>×</button>
      </div>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Votre panier est vide</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">{item.price}</p>
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>
                <button 
                  className="remove-item" 
                  onClick={() => onRemoveItem(item.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>{total} DT</span>
        </div>
        <button className="checkout-btn">Passer la commande</button>
      </div>
    </div>
  );
};

export default CartSidebar;