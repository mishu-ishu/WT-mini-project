import React from "react";
import '../App.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import img1 from "../assets/buy/prop1.jpg"
import img2 from "../assets/buy/prop2.jpg"
import img3 from "../assets/buy/prop3.avif"
import img4 from "../assets/buy/prop4.avif"
import img5 from "../assets/buy/prop5.avif"
import img6 from "../assets/buy/prop6.jpg"
import img7 from "../assets/buy/prop7.jpeg"
import img8 from "../assets/buy/prop8.jpg"
import img9 from "../assets/buy/prop9.avif"

const Rent = () => {
  const properties = [
    { id: 1, title: "2 BHK Apartment", location: "Pune", price: "₹25,000/month", image: img1 },
    { id: 2, title: "Studio Apartment", location: "Mumbai", price: "₹18,000/month", image: img2 },
    { id: 3, title: "1 BHK Flat", location: "Bangalore", price: "₹20,000/month", image: img3 },
    { id: 4, title: "Furnished Apartment", location: "Hyderabad", price: "₹28,000/month", image: img4 },
    { id: 5, title: "Single Room", location: "Chennai", price: "₹12,000/month", image: img5 },
    { id: 6, title: "3 BHK Apartment", location: "Delhi", price: "₹35,000/month", image: img6 },
    { id: 7, title: "Shared PG", location: "Kolkata", price: "₹9,000/month", image: img7 },
    { id: 8, title: "Compact Studio", location: "Ahmedabad", price: "₹14,000/month", image: img8 },
    { id: 9, title: "Bachelor Pad", location: "Jaipur", price: "₹11,000/month", image: img9 }
  ];

  const rowHeadings = [
    "Stylish & Comfortable Rentals",
    "Family-Friendly Spaces",
    "Budget Rooms & Studios"
  ];

  const chunkedProperties = [];
  for (let i = 0; i < properties.length; i += 3) {
    chunkedProperties.push(properties.slice(i, i + 3));
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Properties for Rent</h2>

      {chunkedProperties.map((group, rowIndex) => (
        <div key={rowIndex}>
          <h4 className="mb-3 mt-4">{rowHeadings[rowIndex] || "Other Listings"}</h4>
          <div className="row">
            {group.map((prop) => (
              <div className="col-md-4 mb-4" key={prop.id}>
                <div className="card h-100 d-flex flex-column">
                  <img
                    src={prop.image}
                    className="card-img-top"
                    alt={prop.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{prop.title}</h5>
                      <p className="card-text mb-1">{prop.location}</p>
                      <p className="card-text fw-bold">{prop.price}</p>
                    </div>
                    <div className="mt-auto">
                      <button className="btn btn-warning w-100">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rent;
