import React, {useState, useEffect} from 'react'
import Card from './Card'  
import './styles/content.css'

export default function Cards({cart,setCart, openCart}) {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function fetchFunc() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    }; 
    fetchFunc();},[]);
  return (
    <div className="content">
      {products.map(product => <Card key={product.id} id = {product.id} name={product.title} price={product.price} image={product.thumbnail} cart={cart} setCart={setCart} openCart = {openCart}/>)}
    </div>
  )
}
