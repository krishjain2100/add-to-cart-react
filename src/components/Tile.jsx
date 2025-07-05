import React from 'react'
import { Trash } from "lucide-react";

export default function Tile({title, item, changeQty}) {
    const {price, qty, thumbnail} = item;
    return (
        <div className='item-tile'> 
            <div className="prod-img"> <img src={thumbnail} alt={title}/></div>
            <div className="prod-info">
                <div className="prod-name">{title}</div>
                <div className="prod-price">${price}</div>
                <div className="quantity-controller">
                    <div className="left-arrow" onClick={()=>{changeQty(-1, title)}}>{qty===1 ? <Trash/> : "◀"}</div>
                    <div className="quantity">{qty}</div>
                    <div className="right-arrow" onClick={()=>{changeQty(1, title)}}>▶</div>
                </div>
            </div>
        </div>
    )
}
