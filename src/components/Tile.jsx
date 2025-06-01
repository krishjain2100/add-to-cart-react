import React from 'react'
import { Trash } from "lucide-react";

export default function Tile({name, price, image, qty, cart, setCart}) {
    function changeQty(delta) {
        const newCart = { ...cart };
        const currentItem = newCart[name];
        const newQty = currentItem.qty + delta;
        if (newQty <= 0) delete newCart[name];
        else newCart[name].qty = newQty;
        setCart(newCart);
    }
    return (
        <div className='item-tile'> 
            <div className="prod-img"> <img src={image} alt={name}/></div>
            <div className="prod-info">
                <div className="prod-name">{name}</div>
                <div className="prod-price">${price}</div>
                <div className="quantity-controller">
                    <div className="left-arrow" onClick={()=>{changeQty(-1)}}>{qty===1 ? <Trash/> : "◀"}</div>
                    <div className="quantity">{qty}</div>
                    <div className="right-arrow" onClick={()=>{changeQty(1)}}>▶</div>
                </div>
            </div>
        </div>
    )
}
