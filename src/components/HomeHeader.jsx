import React from 'react';
import '../styles/header.css';

export default function HomeHeader({ toggleCart, badge }) {
  return (
    <div className="header">
      <div className="title">Products</div>
      <div className="cart-container" onClick={toggleCart}> 🛒
        <div className="number">{badge}</div>
      </div>
    </div>
  );
}
