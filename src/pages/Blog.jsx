import React, { useState, useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';
import ShoppingTab from '../components/ShoppingTab';
import '../components/styles/header.css';  
import '../components/styles/homepage.css';
import '../components/styles/blog.css';    

export default function Blog() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : {};
  });
  const [badge, setBadge] = useState(0);
  const [price, setPrice] = useState('0.00');
  const [tabActive, setTabActive] = useState(false);
  
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

  const openCart = () => setTabActive(true);
  const toggleCart = () => setTabActive((prev) => !prev);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <div className="blog-container"></div>;

  const handleAddToCart = () => {
    const name = product.title;
    const priceNum = product.price;
    const image = product.thumbnail;
    const newCart = { ...cart };
    if (newCart[name]) newCart[name].qty += 1;
    else newCart[name] = { price: priceNum, qty: 1, image };
    setCart(newCart);
    openCart();
  };

  return (
    <div className="App">
      <div className={tabActive ? 'main-content shifted' : 'main-content'}>
        <div className="header">
          <Link to="/" className="home-title"> Home </Link>
          <div className="cart-container" onClick={toggleCart}> 🛒
            <div className="number">{badge}</div>
          </div>
        </div>
        <div className="blog-container">
          <div className="blog-card">
            <img src={product.thumbnail} alt={product.title} className="blog-image"/>
            <h1 className="blog-title">{product.title}</h1>
            <p className="blog-description">{product.description}</p>
            <div className="blog-details">
              <span className="blog-price">Price: ${product.price}</span>
              <span className="blog-rating">Rating: {product.rating} ⭐</span>
              <span className="blog-stock">{product.stock} in stock</span>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}> Add to Cart </button>
          </div>
        </div>
      </div>
      <ShoppingTab cart={cart} setCart={setCart} price={price} visible={tabActive}/>
    </div>
  );
}
