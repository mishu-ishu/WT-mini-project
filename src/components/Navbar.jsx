import React from "react";
import "../styles.css"; // ✅ Use absolute path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🏡 HOUSING</div>
      <div className="nav-links">
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Commercial</a>
        <a href="#">PG/Co-Living</a>
        <a href="#">Plots</a>
        <button className="search-button">Post Property</button>
      </div>
    </nav>
  );
};

export default Navbar;
