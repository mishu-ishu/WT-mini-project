// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="mb-3">Real Estate</h5>
            <p className="text-white-50">
              Finding your dream property has never been easier. Browse our extensive collection of properties and find the perfect home.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/buy" className="text-white-50 text-decoration-none">Buy</Link></li>
              <li className="mb-2"><Link to="/rent" className="text-white-50 text-decoration-none">Rent</Link></li>
              <li className="mb-2"><Link to="/plots" className="text-white-50 text-decoration-none">Plots</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="mb-3">Useful Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-4">
            <h6 className="mb-3">Contact Info</h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                123 Real Estate St, New York, NY 10001
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                (201) 988-8882
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@realestate.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-secondary pt-4 mt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0 text-white-50">© 2025 Real Estate. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0 text-white-50">Designed with Bootstrap</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;