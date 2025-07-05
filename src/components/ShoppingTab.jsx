import React from 'react';
import '../styles/tab.css';
import Tile from './Tile';

export default function ShoppingTab({ cart, setCart, price, visible, changeQty }) {
  const titles = Object.keys(cart);
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
          {titles.map((title) => {
            const item = cart[title];
            return <Tile key={title} title={title} item = {item} changeQty={changeQty}/>
          })}
          {titles.length === 0 && <div className="empty-msg">Your cart is empty.</div>}
        </div>
      </div>
    </div>
  );
}
