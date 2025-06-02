import { useState, useEffect } from 'react';

export default function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });
  const [badge, setBadge] = useState(0);
  const [price, setPrice] = useState('0.00');
  const [tabActive, setTabActive] = useState(false);

  const openCart = () => setTabActive(true);
  const toggleCart = () => setTabActive(prev => !prev);

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

  return { cart, setCart, badge, price, tabActive, setTabActive, openCart, toggleCart };
}
