import React from 'react'
import {Link} from 'react-router-dom'

export default function Card({product, handleAddToCart}) {
  const {id, title, price, thumbnail} = product;
  return (
    <div className='product-card'>
        <div className="product-img"> <img src={thumbnail} alt={title}/> </div>
        <div className="product-name">{title}</div>
        <div className="product-price">${price}</div>
        <div><button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button></div>
        <div><Link to = {`/${id}`}><button className="read-more"> Read More</button></Link></div>
    </div>
  )
}
