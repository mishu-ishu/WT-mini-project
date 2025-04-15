import React from "react";
import { FaUser, FaPhone } from "react-icons/fa";
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
          <li><a href="#">Home</a></li>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Rent</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact us</a></li>
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
