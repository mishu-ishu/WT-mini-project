// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Real Estate Logo" className="me-2" height="32" />
          <span className="fw-bold">Real Estate</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/buy')}`} to="/buy">Buy</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/rent')}`} to="/rent">Rent</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/plots')}`} to="/plots">Plots</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/pg-co')}`} to="/pg-co">PG/Co-Living</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <Link to="/signup" className="btn btn-outline-warning me-3">
              Sign Up
            </Link>
            <span className="text-secondary d-none d-lg-inline">(201) 988-8882</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;