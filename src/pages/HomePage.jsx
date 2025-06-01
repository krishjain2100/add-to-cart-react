import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import ShoppingTab from '../components/ShoppingTab';
import '../components/styles/homepage.css'

export default function HomePage() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });
  const [badge, setBadge] = useState(0);
  const [price, setPrice] = useState('0.00');
  const [tabActive, setTabActive] = useState(false);

  const openCart = () => setTabActive(true)

  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;
    for (const item of Object.values(cart)) {
      totalQty += item.qty;
      totalPrice += item.qty * item.price;
    }
    setBadge(totalQty);
    setPrice(totalPrice.toFixed(2));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
