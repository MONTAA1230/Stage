import React from 'react';

const Header = ({ cartItemsCount, openCart }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Ma<span>Boutique</span></div>
        <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="#">Catégories</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="fas fa-user"></i></a>
          <a href="#" className="cart-icon" onClick={openCart}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartItemsCount}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;