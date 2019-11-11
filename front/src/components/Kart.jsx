import React from "react";

export default function Kart({ kart }) {
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="shopping-cart-head">
          <span className="product-quantity">{kart.cantidad}</span> Kart:{" "}
          {kart.kartId}
        </div>
        <ul className="shopping-cart-list"></ul>
        <div className="cart-buttons">
          <a href="#0" className="button empty-cart-btn">
            Agregar
          </a>
          <a href="#0" className="button empty-cart-btn">
            Vaciar
          </a>
          <a href="#0" className="button cart-checkout">
            Checkout - <span className="total-price">$0</span>
          </a>
        </div>
      </div>
    </div>
  );
}
