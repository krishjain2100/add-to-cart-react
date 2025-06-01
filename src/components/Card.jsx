import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({id, name, price,image,cart,setCart,openCart}) {
  const isInCart = Boolean(cart[name]);
  function addOne() {
    const newCart = { ...cart };
    if (isInCart) newCart[name].qty = cart[name].qty + 1;
    else newCart[name] = { price, qty: 1, image };
    setCart(newCart);
    openCart();
  }
  return (
    <div className='product-card'>
        <div className="product-img"> <img src={image} alt={name}/> </div>
        <div className="product-name">{name}</div>
        <div className="product-price">${price}</div>
        <div><button className="add-to-cart" onClick={addOne}>Add to Cart</button></div>
        <div><Link to = {`/${id}`}><button className="read-more"> Read More</button></Link></div>
    </div>
  )
}
