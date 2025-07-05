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

  const handleAddToCart = (product) => {
    const {title, price, thumbnail} = product;
    const newCart = {...cart};
    if (newCart[title]) newCart[title].qty += 1;
    else newCart[title] = { price: price, qty: 1, thumbnail };
    setCart(newCart);
    openCart();
  }

  function changeQty(delta, title) {
      const newCart = { ...cart };
      const currentItem = newCart[title];
      const newQty = currentItem.qty + delta;
      if (newQty <= 0) delete newCart[title];
      else newCart[title].qty = newQty;
      setCart(newCart);
  }

  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;
    for (const item of Object.values(cart)) {
      totalQty += item.qty;
      totalPrice += item.qty * Number(item.price);
    }
    setBadge(totalQty);
    setPrice(totalPrice.toFixed(2));
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return { cart, setCart, badge, price, tabActive, setTabActive, openCart, toggleCart, handleAddToCart, changeQty };
}
