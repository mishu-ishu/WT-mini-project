import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FA7070', color: '#FEFDED' }}>
      <Container className="py-4">
        <Row>
          {/* Logo and About Section */}
          <Col md={4} className="mb-4">
            <h3 className="fw-bold" style={{ color: '#FEFDED' }}>RealEstate</h3>
            <p>
              Find your perfect home with us. Whether you’re buying, renting, or investing, we are here to assist you every step of the way.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold" style={{ color: '#FEFDED' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" style={{ color: '#FEFDED' }}>Home</Link></li>
              <li><Link to="/buy" style={{ color: '#FEFDED' }}>Buy</Link></li>
              <li><Link to="/rent" style={{ color: '#FEFDED' }}>Rent</Link></li>
              <li><Link to="/about" style={{ color: '#FEFDED' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: '#FEFDED' }}>Contact Us</Link></li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold" style={{ color: '#FEFDED' }}>Contact Us</h5>
            <p><strong>Email:</strong> support@realestate.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
          </Col>
        </Row>

        <Row>
          {/* Social Media Section */}
          <Col className="text-center">
            <div>
              <a href="#" className="me-3" style={{ color: '#FEFDED' }}>Facebook</a>
              <a href="#" className="me-3" style={{ color: '#FEFDED' }}>Twitter</a>
              <a href="#" className="me-3" style={{ color: '#FEFDED' }}>Instagram</a>
              <a href="#" style={{ color: '#FEFDED' }}>LinkedIn</a>
            </div>
            <p className="mt-3" style={{ color: '#FEFDED' }}>&copy; 2025 RealEstate. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
