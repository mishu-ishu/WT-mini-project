import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Real Estate</span>
        </div>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/buy">Buy</Link></li>
          <li><Link to="/rent">Rent</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

        </ul>

        {/* Icons Section */}
        <div className="nav-icons">
          <FaUser className="icon" />
          <span className="login-text">Login</span>
          <FaPhone className="icon phone-icon" />
          <span className="phone-number">(257) 388-6895</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
