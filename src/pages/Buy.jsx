import React from "react";
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import img1 from "../assets/buy/prop1.jpg"
import img2 from "../assets/buy/prop2.jpg"
import img3 from "../assets/buy/prop3.avif"
import img4 from "../assets/buy/prop4.avif"
import img5 from "../assets/buy/prop5.avif"
import img6 from "../assets/buy/prop6.jpg"
import img7 from "../assets/buy/prop7.jpeg"
import img8 from "../assets/buy/prop8.jpg"
import img9 from "../assets/buy/prop9.avif"


const Buy = () => {
  const properties = [
    { id: 1, title: "3 BHK Villa", location: "Pune", price: "₹85 Lakh", image: img1 },
    { id: 2, title: "2 BHK Apartment", location: "Mumbai", price: "₹65 Lakh", image: img2 },
    { id: 3, title: "1 BHK Studio", location: "Bangalore", price: "₹45 Lakh", image: img3 },
    { id: 4, title: "Luxury Penthouse", location: "Hyderabad", price: "₹1.2 Cr", image: img4 },
    { id: 5, title: "1 RK", location: "Chennai", price: "₹35 Lakh", image: img5 },
    { id: 6, title: "3 BHK Duplex", location: "Delhi", price: "₹95 Lakh", image: img6 },
    { id: 7, title: "Independent House", location: "Kolkata", price: "₹70 Lakh", image: img7 },
    { id: 8, title: "Studio Apartment", location: "Ahmedabad", price: "₹40 Lakh", image: img8 },
    { id: 9, title: "Compact Flat", location: "Jaipur", price: "₹55 Lakh", image: img9 }
  ];

  const rowHeadings = [
    "Premium Villas & Homes",
    "Urban Apartments",
    "Budget-Friendly Options"
  ];

  const chunkedProperties = [];
  for (let i = 0; i < properties.length; i += 3) {
    chunkedProperties.push(properties.slice(i, i + 3));
  }

  return (
    <div className="container mt-4">
  <h2 className="mb-4 text-center">Properties for Buy</h2>

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

export default Buy;
