import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Error from "./pages/Error"
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import './App.css'
import Footer from "./Component/Footer";
import { ProductProvider } from "./contexts/productcontext";



const App = () => {

  return (
      <ProductProvider>
       <BrowserRouter >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path="/product" element={<Product />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </ProductProvider>
  )
};

export default App;
