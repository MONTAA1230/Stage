// src/App.jsx
import React from "react";
import ProductCard from "./components/ProductCard";
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";

function App() {
  const products = [
    { id: 1, title: "Chaussures de sport", price: 120, image: product1 },
    { id: 2, title: "T-shirt tendance", price: 60, image: product2 },
    { id: 3, title: "Sac à dos", price: 150, image: product3 }
  ];

  return (
    <div style={styles.container}>
      <h1>Bienvenue dans ma boutique</h1>
      <div style={styles.productsContainer}>
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            image={prod.image}
            title={prod.title}
            price={prod.price}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center"
  },
  productsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "20px"
  }
};

export default App;
