import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
    <nav className='navWrapper'>
     <Link className='navList' to="/">
           Home
          </Link>
          <Link to="/mens">
           Mens
          </Link>
          <Link to="/jewelery">
           Jewelery
          </Link>
          <Link to="/women">
            Women
          </Link>
          <Link to="/electronics" >
          Electronics
          </Link>
          </nav>
    </div>
  )
}
