import React from "react";
import Home from "../Home/Home";
import Jewelery from "../Jewelery/jewelery";
import Mens from "../Mens/mens";
import Electronics from "../Electronics/electronics";
import Nav from "../Nav/nav";
import Women from "../Womens/Women";
import { Routes, Route } from "react-router-dom";
import Checkout from "../Checkout/checkout";

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
