import React from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import ShoppingTab from '../components/ShoppingTab';
import useCart from '../components/useCart';
import '../components/styles/homepage.css'

export default function HomePage() {
  const { cart, setCart, badge, price, tabActive, setTabActive, openCart } = useCart();
  return (
    <div className="App">
      <div className={tabActive ? 'main-content shifted' : 'main-content'}>
        <Header tabActive={tabActive} setTabActive={setTabActive} badge={badge}/>
        <Cards cart={cart} setCart={setCart} openCart = {openCart} />
      </div>
      <ShoppingTab cart={cart} setCart={setCart} price={price} visible={tabActive}/>
    </div>
  );
}
