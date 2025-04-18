// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";

import Buy from "./pages/Buy";
import Rent from "./pages/Rent";




function App() {
  return (
    <>
      <Navbar />

     
      
     

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>


      <Footer/>
    </>
  );
}

export default App;
