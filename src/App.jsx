import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import PopularProduct from "./components/PopularProducts/PopularProduct";
import Footer from "./components/Footer/Footer";
import {Routes, Route } from "react-router-dom";
import Canon from "./page/Canon";
import Cart from "./page/cart";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./Auth/Login";
// import ProductHome from "./components/ProductHome";






function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/canon" element={<Canon />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
