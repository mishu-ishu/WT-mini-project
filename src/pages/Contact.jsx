import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import img1 from "../assets/contact/img1.jpg";
import img2 from "../assets/contact/img2.jpg";
import img3 from "../assets/contact/img3.jpg";
import contact from "../assets/contactus.jpg";

const Contact = () => {
  return (
    <div>
      {/* Contact Form & Info */}
      <section 
      className="text-center py-5"
              style={{
                backgroundImage: `url(${contact})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white", // ensure text shows on dark background
                position: "relative",
                minHeight: "40vh", // full viewport height
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 0
                }}
              ></div>
      
        <Container style={{ position: "relative", zIndex: 1 }}>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-bold">Get in touch</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your mail" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" placeholder="Your phone" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your message" />
                </Form.Group>
                <Button variant="warning" type="submit">Send message</Button>
              </Form>
            </Col>
            <Col md={6}>
              <h3 className="fw-bold">Feel free to contact us</h3>
              <ul className="list-unstyled">
                <li><strong>📍</strong> 8911 Tanglewood Ave. Capitol Heights, MD 20743</li>
                <li><strong>📞</strong> (566) 237-4687</li>
                <li><strong>📱</strong> (239) 319-8083</li>
                <li><strong>📧</strong> moinefou@hotmail.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Locations */}
      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-3">Our Offices</h2>
          <Row>
            {[
              {
                name: "Smoky Hollow",
                address: "9514 Smoky Hollow St, Sulphur, LA 70663",
                phone: "(736) 267-8659",
                email: "rsnamtri@gmail.com",
                image: img1
              },
              {
                name: "North Road",
                address: "19 North Road Piscataway, NJ 08854",
                phone: "(736) 267-8659",
                email: "rsnamtri@gmail.com",
                image: img2
              },
              {
                name: "Rockville Ave",
                address: "8460 Rockville Ave, Greenville, NC 27834",
                phone: "(736) 267-8659",
                email: "rsnamtri@gmail.com",
                image: img3
              },
            ].map((office, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                 
                  <Card.Img
                    variant="top"
                    src={office.image}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{office.name}</Card.Title>
                    <Card.Text>{office.address}</Card.Text>
                    <Card.Text>Phone: {office.phone}</Card.Text>
                    <Card.Text>Email: {office.email}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
