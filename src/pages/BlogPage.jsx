import React from 'react';
import Blog from '../components/Blog'
import BlogHeader from '../components/BlogHeader';
import ShoppingTab from '../components/ShoppingTab';
import '../styles/page.css'

export default function BlogPage({ cart, setCart, badge, price, tabActive, toggleCart, handleAddToCart, changeQty }) {
  return (
    <div className="App">
      <div className={tabActive ? 'main-content shifted' : 'main-content'}>
        <BlogHeader toggleCart={toggleCart} badge={badge}/>
        <Blog handleAddToCart={handleAddToCart}/>
      </div>
      <ShoppingTab cart={cart} setCart={setCart} price={price} visible={tabActive} changeQty={changeQty}/>
    </div>
  );
}
