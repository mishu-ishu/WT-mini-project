// src/pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [category, setCategory] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ category, propertyType, location });
    // Implement search functionality or navigation
  };

  // Featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: "Division Road house",
      address: "31 Division Road Piscataway, Pisca, FL 33018",
      price: 250000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1500,
      garages: 1,
      type: "For sale",
      image: "/images/property1.jpg"
    },
    {
      id: 2,
      title: "North Road house",
      address: "19 North Road Piscataway, NJ 08854",
      price: 222000,
      bedrooms: 2,
      bathrooms: 3,
      sqft: 1200,
      garages: 1,
      type: "For sale",
      image: "/images/property2.jpg"
    },
    {
      id: 3,
      title: "Bloomfield house",
      address: "42 Bloomfield, NJ 07003",
      price: 250000,
      bedrooms: 4,
      bathrooms: 2,
      sqft: 1800,
      garages: 2,
      type: "For rent",
      image: "/images/property3.jpg"
    },
    {
      id: 4,
      title: "Rockville Ave villa",
      address: "8 Rockville Ave, Raleigh, NC 27614",
      price: 180000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1300,
      garages: 2,
      type: "For sale",
      image: "/images/property4.jpg"
    },
    {
      id: 5,
      title: "Scotch Plains villa",
      address: "15 Scotch Plains, NJ 07076",
      price: 160000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      garages: 2,
      type: "For sale",
      image: "/images/property5.jpg"
    },
    {
      id: 6,
      title: "Lees Creek house",
      address: "23 Lees Creek, Cincinnati, OH 45220",
      price: 210000,
      bedrooms: 3,
      bathrooms: 1,
      sqft: 1400,
      garages: 1,
      type: "For sale",
      image: "/images/property6.jpg"
    },
  ];

  // Format price with currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="position-relative bg-dark text-white" style={{ height: "500px" }}>
        {/* Background image with overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "0.6"
          }}
        ></div>
        
        {/* Content overlay */}
        <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center px-4">
          <h1 className="display-4 fw-bold mb-3">Find a home that suits your lifestyle.</h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px" }}>
            We help you find the perfect property from our extensive listings in prime locations.
          </p>
          
          {/* Search form */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <div className="bg-white rounded shadow p-3">
                  <form onSubmit={handleSearch}>
                    <div className="row g-3">
                      <div className="col-md-3">
                        <select 
                          className="form-select"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="">Category</option>
                          <option value="buy">Buy</option>
                          <option value="rent">Rent</option>
                          <option value="sell">Sell</option>
                        </select>
                      </div>
                      
                      <div className="col-md-3">
                        <select 
                          className="form-select"
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                        >
                          <option value="">Property Type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="villa">Villa</option>
                        </select>
                      </div>
                      
                      <div className="col-md-3">
                        <select 
                          className="form-select"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        >
                          <option value="">Location</option>
                          <option value="nj">New Jersey</option>
                          <option value="ny">New York</option>
                          <option value="fl">Florida</option>
                          <option value="nc">North Carolina</option>
                          <option value="oh">Ohio</option>
                        </select>
                      </div>
                      
                      <div className="col-md-3">
                        <button 
                          type="submit"
                          className="btn btn-warning text-white w-100"
                        >
                          SEARCH
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Discover your featured property</h2>
          <p className="text-secondary">
            Let novel facilities multi-property setup affordable and efficient
          </p>
        </div>

        <div className="row g-4">
          {featuredProperties.map(property => (
            <div key={property.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm hover-shadow transition">
                <div className="position-relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                    }}
                  />
                  <div className={`position-absolute top-0 start-0 m-3 badge ${
                    property.type === "For rent" ? "bg-warning" : "bg-success"
                  }`}>
                    {property.type}
                  </div>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text text-secondary small mb-3">{property.address}</p>
                  <h4 className="fw-bold mb-4">{formatPrice(property.price)}</h4>

                  <div className="row text-center g-0">
                    <div className="col-3">
                      <div className="d-flex flex-column">
                        <span className="fw-medium">{property.bedrooms}</span>
                        <small className="text-secondary">Bedrooms</small>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex flex-column">
                        <span className="fw-medium">{property.bathrooms}</span>
                        <small className="text-secondary">Bathrooms</small>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex flex-column">
                        <span className="fw-medium">{property.sqft}</span>
                        <small className="text-secondary">Sq Ft</small>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="d-flex flex-column">
                        <span className="fw-medium">{property.garages}</span>
                        <small className="text-secondary">Garages</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Looking to sell your property?</h2>
              <p className="lead mb-4">
                We can help you get the best value for your property. Our team of experts will guide you through the entire process.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <Link to="/contact" className="btn btn-warning btn-lg text-white px-4">Contact Us Today</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;