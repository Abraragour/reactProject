import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

const [counter,setCounter]=useState(0)
useEffect(()=>{},[])

  return (
    <>
    <nav className='bg-gray-100 static lg:fixed z-50 top-0 left-0 right-0 '>
<div className="container justify-between lg text-slate-900 font-lightmx-auto py-2 flex flex-col lg:flex-row">

<div className='flex flex-col lg:flex-row'>
<img width={110}  src={logo} alt="freshcart logo" />
<ul className='flex flex-col lg:flex-row'>
<li className='py-2' ><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to=''>   Home     </NavLink>  </li>
<li className='py-2' ><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='cart'>   cart     </NavLink>  </li>
<li  className='py-2'><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='product'>   product     </NavLink>  </li>
<li  className='py-2'><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='Brands'>   Brands     </NavLink>  </li>
<li  className='py-2'><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='categories'>   categories     </NavLink>  </li>
</ul>

</div >



<div>
<ul className='flex flex-col lg:flex-row'>
  <><li  className='py-2'><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='login'>   Login     </NavLink>  </li>
<li  className='py-2'><NavLink  className={'mx-2  text-lg text-slate-900 font-light'}   to='register'>   Register     </NavLink>  </li></>:
<li className='py-2'><span  className={'mx-2  text-lg text-slate-900 font-light cursor-pointer'}  >   Logout     </span>  </li>

<li className='flex items-center mx-2 '>
  <i className='fab  mx-2 fa-facebook '></i>
  <i className='fab mx-2  fa-twitter '></i>
  <i className='fab mx-2  fa-instagram '></i>
  <i className='fab mx-2  fa-youtube '></i>
  <i className='fab mx-2  fa-tiktok '></i>
</li>
</ul>


   
</div>








</div>






</nav>

    </>
  )
}
