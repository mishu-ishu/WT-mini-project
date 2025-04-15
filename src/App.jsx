// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";

>>>>>>> 999418e23ea2068d565b565861f9fe1849695341


function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <Home />
      <Footer/>
     
=======
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>


>>>>>>> 999418e23ea2068d565b565861f9fe1849695341
    </>
  );
}

export default App;
