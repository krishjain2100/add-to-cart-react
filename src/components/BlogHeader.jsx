import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/header.css';  

export default function BlogHeader({ toggleCart, badge }) {
  return (
    <div className="header">
        <Link to="/" className="home-title"> Home </Link>
        <div className="cart-container" onClick={toggleCart}> 🛒
            <div className="number">{badge}</div>
        </div>
    </div>
  );
}

