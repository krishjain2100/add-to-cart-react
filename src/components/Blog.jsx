import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import '../styles/blog.css';    

export default function Blog({handleAddToCart}) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      setIsLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      }
      catch (error) {
        setError("Unable to show contents");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div className="error"> {error} </div>
    )
  }

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    )
  }

  const {thumbnail, title, description, price, rating, stock} = product

  return (
    <div className="blog-container">
      <div className="blog-card">
        <img src={thumbnail} alt={title} className="blog-image"/>
        <h1 className="blog-title">{title}</h1>
        <p className="blog-description">{description}</p>
        <div className="blog-details">
          <span className="blog-price">Price: ${price}</span>
          <span className="blog-rating">Rating: {rating} ⭐</span>
          <span className="blog-stock">{stock} in stock</span>
        </div>
        <button className="add-to-cart" onClick={() => handleAddToCart(product)}> Add to Cart </button>
      </div>
    </div>
  )
}
