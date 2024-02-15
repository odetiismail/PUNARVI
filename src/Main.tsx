//import React from "react";

import { Home } from "./Home";
import Products from "./Products";
import { Error } from "./Error";
import { Navbar } from "./Navbar";
import { NavNext } from "./NavNext";
import Section from "./Section";
import { Footer } from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Cart } from "./Cart";
import {Fav} from './Fav';
export const Main = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BrowserRouter>
        <Navbar />
        <NavNext />
        <Section />
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/favrate" element={<Fav/>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/*
        Footer
         */}

        <Footer />
      </BrowserRouter>
    </div>
  );
};
