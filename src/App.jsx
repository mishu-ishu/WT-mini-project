// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contact";
import Footer from "./components/Footer";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Login from './pages/Login.jsx'
import SignUp from './pages/Signup.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'






function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path ="/contact" element={<Contactus />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer/>
    
     
    </>
  )
  

    
  
}

export default App;
