import React from "react";
import "./BuyRent.css"; // Reuse same styling
import propertyImage from "../assets/herosection.jpeg"; // Replace if needed

const Rent = () => {
  const properties = [
    { id: 1, title: "2 BHK Flat", location: "Delhi", price: "₹20,000/month" },
    { id: 2, title: "1 BHK Flat", location: "Noida", price: "₹12,000/month" },
    { id: 3, title: "3 BHK House", location: "Chennai", price: "₹30,000/month" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Properties for Rent</h2>
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

export default Rent;
