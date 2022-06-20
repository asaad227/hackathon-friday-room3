import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
    <nav className='navWrapper'>
     <Link className='navList' to="/">
           Home
          </Link>
          <Link className='navList' to="/mens">
           Mens
          </Link>
          <Link className='navList' to="/jewelery">
           Jewelery
          </Link>
          <Link className='navList' to="/women">
            Women
          </Link>
          <Link className='navList' to="/electronics" >
          Electronics
          </Link>
          <Link className='navList' to="/checkout" >
          Checkout
          </Link>
          </nav>
    </div>
  )
}
