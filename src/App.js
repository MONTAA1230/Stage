import React from "react";
import "./App.css";

// Composant Header
function Header() {
  return (
    <header className="header">
      <h1 className="logo">🛒 MyShop</h1>
      <nav>
        <a href="#products">Produits</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// Composant Hero
function Hero() {
  return (
    <section className="hero">
      <h2>Bienvenue sur MyShop</h2>
      <p>Découvrez nos meilleurs produits au meilleur prix 🚀</p>
      <button className="cta-btn">Voir les produits</button>
    </section>
  );
}

// Composant Produits
function Products() {
  const items = [
    { id: 1, name: "Produit 1", price: "50 DT" },
    { id: 2, name: "Produit 2", price: "80 DT" },
    { id: 3, name: "Produit 3", price: "120 DT" },
  ];

  return (
    <section id="products" className="products">
      <h2>Nos Produits</h2>
      <div className="product-list">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Acheter</button>
          </div>
        ))}
      </div>
    </section>
  );
}

// Composant Call To Action
function CTA() {
  return (
    <section className="cta">
      <h2>Rejoignez-nous dès aujourd’hui 🎉</h2>
      <button className="cta-btn">Créer un compte</button>
    </section>
  );
}

// Composant Footer
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 MyShop - Tous droits réservés</p>
    </footer>
  );
}

// App principale
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
