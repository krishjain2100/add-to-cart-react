import React from 'react';
import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import useCart from './hooks/useCart';

function App() {
  const cartState = useCart();
  
  const router = createBrowserRouter([
    {path: '/', element: <HomePage {...cartState}/>},
    {path: '/:id', element: <BlogPage {...cartState}/>}
  ])
  
  return <RouterProvider router={router}/> 
}
export default App;
