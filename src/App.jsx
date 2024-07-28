import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Products from './components/products/products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [count, setCount] = useState(0)
   
  let x=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'categories',element:<Categories/>},
      {path:'brands',element:<Brands/>},
      {path:'cart',element:<Cart/>},
      {path:'products',element:<Products/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'*',element:<NotFound/>},

    ]}
  ])








  return (
   <>


<RouterProvider router={x}></RouterProvider>

   </>
  )
}

export default App
