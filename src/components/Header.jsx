import React from 'react';
import './styles/header.css';

export default function Header({ tabActive, setTabActive, badge }) {
  return (
    <div className="header">
      <div className="title">Products</div>
      <div className="cart-container" onClick={() => {setTabActive(!tabActive)}}> 🛒
        <div className="number">{badge}</div>
      </div>
    </div>
  );
}
