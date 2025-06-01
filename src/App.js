import React from 'react';
import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {path: '/', element: <HomePage/>},
  {path: '/:id', element: <Blog/>}
])

function App() {
  return <RouterProvider router={router}/> 
}

export default App;
