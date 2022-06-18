import React from "react";
import Home from "../Home/Home";
import Jewelery from "../Jewelery/jewelery";
import Mens from "../Mens/mens";
import Electronics from "../Electronics/electronics";
import Women from "../Womens/Women";
import Checkout from "../Checkout/checkout";
import { Routes, Route } from "react-router-dom";
import Nav from "../Nav/nav";


function App() {
  return (
    <div className="App">
    <div>
    <Nav/>
    </div>
 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="mens" element={<Mens />} />
      <Route path="women" element={<Women />} />
      <Route path="jewelery" element={<Jewelery />} />
      <Route path="electronics" element={<Electronics />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
   
    </div>
  );
}

export default App;
