import React from 'react';
import Cards from '../components/Cards';
import HomeHeader from '../components/HomeHeader';
import ShoppingTab from '../components/ShoppingTab';
import '../styles/page.css'

export default function HomePage({ cart, setCart, badge, price, tabActive, toggleCart, handleAddToCart, changeQty }) {
  return (
    <div className="App">
      <div className={tabActive ? 'main-content shifted' : 'main-content'}>
        <HomeHeader toggleCart={toggleCart} badge={badge}/>
        <Cards handleAddToCart={handleAddToCart} />
      </div>
      <ShoppingTab cart={cart} setCart={setCart} price={price} visible={tabActive} changeQty={changeQty}/>
    </div>
  );
}
