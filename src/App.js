import React, { useState } from "react";
import "./App.css";

// Import des images
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import product6 from "./assets/images/product6.jpg";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Données des produits avec les images importées
  const products = [
    {
      id: 1,
      name: "Plaquettes de frein avant",
      price: "45 DT",
      image: product1,
      category: "freinage",
      description: "Plaquettes de frein haute performance pour motos et scooters.",
      brand: "EBC",
      compatibility: ["Yamaha", "Honda", "Suzuki"]
    },
    {
      id: 2,
      name: "Chaîne de transmission",
      price: "85 DT",
      image: product2,
      category: "transmission",
      description: "Chaîne de transmission renforcée 525 pitch.",
      brand: "DID",
      compatibility: ["Kawasaki", "Yamaha", "BMW"]
    },
    {
      id: 3,
      name: "Filtre à air",
      price: "35 DT",
      image: product3,
      category: "moteur",
      description: "Filtre à air sport pour une meilleure respiration du moteur.",
      brand: "K&N",
      compatibility: ["Honda", "Suzuki", "Vespa"]
    },
    {
      id: 4,
      name: "Rétroviseur droit",
      price: "28 DT",
      image: product4,
      category: "accessoires",
      description: "Rétroviseur universel pour moto et scooter.",
      brand: "EMGO",
      compatibility: ["Tous modèles"]
    },
    {
      id: 5,
      name: "Bougie d'allumage",
      price: "22 DT",
      image: product5,
      category: "moteur",
      description: "Bougie d'allumage iridium pour une combustion optimale.",
      brand: "NGK",
      compatibility: ["Honda", "Yamaha", "Kymco"]
    },
    {
      id: 6,
      name: "Pneu arrière",
      price: "180 DT",
      image: product6,
      category: "roues",
      description: "Pneu arrière pour scooter 130/70-12.",
      brand: "Michelin",
      compatibility: ["Peugeot", "Piaggio", "Yamaha"]
    }
  ];

  const categories = [
    { id: "all", name: "Toutes les pièces", icon: "fas fa-motorcycle" },
    { id: "moteur", name: "Moteur", icon: "fas fa-cog" },
    { id: "freinage", name: "Freinage", icon: "fas fa-stop-circle" },
    { id: "transmission", name: "Transmission", icon: "fas fa-link" },
    { id: "roues", name: "Roues & Pneus", icon: "fas fa-circle" },
    { id: "accessoires", name: "Accessoires", icon: "fas fa-tools" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(' DT', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartItemsCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Composant Header intégré
  const Header = () => (
    <header className="header">
      <div className="header-content">
        <div className="logo">Ma<span>Boutique</span></div>
        <nav>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#produits">Produits</a></li>
            <li><a href="#categories">Catégories</a></li>
          </ul>
        </nav>
        <div className="header-icons">
          <a href="#recherche"><i className="fas fa-search"></i></a>
          <a href="#compte"><i className="fas fa-user"></i></a>
          <a href="#panier" className="cart-icon" onClick={() => setIsCartOpen(true)}>
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{getCartItemsCount()}</span>
          </a>
        </div>
      </div>
    </header>
  );

  // Composant ProductCard intégré
  const ProductCard = ({ product, onAddToCart }) => (
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

  // Composant CartSidebar intégré
  const CartSidebar = () => {
    if (!isCartOpen) return null;

    return (
      <div className="cart-sidebar open">
        <div className="cart-header">
          <h2>Votre Panier</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
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
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button 
                    className="remove-item" 
                    onClick={() => removeFromCart(item.id)}
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
            <span>{getCartTotal()} DT</span>
          </div>
          <button className="checkout-btn">Passer la commande</button>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <Header />
      
      <div className="main-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Pièces de Rechange Moto & Scooter</h1>
            <p>Des pièces de qualité pour entretenir et réparer votre deux-roues</p>
            <button className="cta-button">Voir le catalogue</button>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="categories-section">
          <h2>Catégories de Pièces</h2>
          <div className="categories-filter">
            {categories.map(category => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="section-header">
            <h2>Nos Pièces</h2>
          </div>
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature">
            <i className="fas fa-truck"></i>
            <h3>Livraison Rapide</h3>
            <p>Expédition sous 24h pour toutes les commandes</p>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Garantie Pièces</h3>
            <p>Toutes nos pièces sont garanties 6 mois</p>
          </div>
          <div className="feature">
            <i className="fas fa-tools"></i>
            <h3>Conseils Experts</h3>
            <p>Notre équipe vous aide à choisir les bonnes pièces</p>
          </div>
        </section>
      </div>

      <CartSidebar />
    </div>
  );
}

export default App;