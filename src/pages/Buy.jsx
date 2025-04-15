import React from "react";
import "./BuyRent.css"; // Optional CSS for extra styling
import propertyImage from "../assets/herosection.jpeg"; // Replace if needed

const Buy = () => {
  const properties = [
    { id: 1, title: "3 BHK Villa", location: "Pune", price: "₹85 Lakh" },
    { id: 2, title: "2 BHK Apartment", location: "Mumbai", price: "₹65 Lakh" },
    { id: 3, title: "1 BHK Studio", location: "Bangalore", price: "₹45 Lakh" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Properties for Buy</h2>
      <div className="row">
        {properties.map((prop) => (
          <div className="col-md-4 mb-4" key={prop.id}>
            <div className="card">
              <img src={propertyImage} className="card-img-top" alt={prop.title} />
              <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">{prop.location}</p>
                <p className="card-text fw-bold">{prop.price}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
