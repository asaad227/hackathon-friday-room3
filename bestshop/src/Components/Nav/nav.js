import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
    <nav>
     <Link to="/">
           Home
          </Link>
          <Link to="/mens">
           Mens
          </Link>
          <Link to="/jewelery">
           Jewelery
          </Link>
          <Link to="/womens">
            Womens
          </Link>
          <Link to="/electronics" >
          Electronics
          </Link>
          </nav>
    </div>
  )
}
