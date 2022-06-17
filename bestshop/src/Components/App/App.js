import React from "react";
import Home from "../Home/Home";
import Jewelery from "../Jewelery/Jewelery";
import Mens from "../Mens/Mens";
import Electronics from "../Electronics/electronics";
import Nav from "../Nav/Nav";
import Women from "../Womens/Women";
import Checkout from "../Checkout/checkout";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <Nav/>
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
