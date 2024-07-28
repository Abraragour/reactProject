import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
export default function Home() {

const [counter,setCounter]=useState(0)
useEffect(()=>{},[])

  return (
    <div>
      <h2 className='bg-slate-950'>Home</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, fuga.</p>
    </div>
  )
}
