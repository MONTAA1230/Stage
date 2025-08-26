// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card" style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>Prix : {price} TND</p>
      <button style={styles.button}>Acheter</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    borderRadius: "10px"
  },
  button: {
    padding: "10px 15px",
    marginTop: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ProductCard;
