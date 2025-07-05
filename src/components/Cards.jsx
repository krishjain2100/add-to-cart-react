import React, {useState, useEffect} from 'react'
import Card from './Card'  
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/content.css'

export default function Cards({handleAddToCart}) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        setError("Unable to show contents");
      } finally {
        setIsLoading(false);
      }
    }; 
    fetchProducts();
  },[]);


  return error ? (
    <div className="error">{error}</div>
  ) : isLoading ? (
    <div className="loading">
      <CircularProgress />
    </div>
  ) : (
    <div className="content">
      {products.map(product => (
        <Card
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );  
}
