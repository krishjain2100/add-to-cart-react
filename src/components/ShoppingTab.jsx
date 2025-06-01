import React from 'react';
import './styles/tab.css';
import Tile from './Tile';

export default function ShoppingTab({ cart = {}, setCart, price, visible }) {
  const names = Object.keys(cart);
  const containerClasses = visible ? 'shopping-tab visible' : 'shopping-tab';
  return (
    <div className={containerClasses}>
      <div className="tab-content">
        <div className="tab-heading">Shopping Cart</div>
        <div className="total">
          <div className="label-price"> Total: <span className="price">${price}</span></div>
          <button className="clear" onClick={() => {setCart({});}}>Clear</button>
        </div>
        <div className="items">
          {names.map((name) => {
            const item = cart[name];
            return <Tile key={name} name={name} price={item.price} image={item.image} qty={item.qty} cart={cart} setCart={setCart}/>
          })}
          {names.length === 0 && <div className="empty-msg">Your cart is empty.</div>}
        </div>
      </div>
    </div>
  );
}
