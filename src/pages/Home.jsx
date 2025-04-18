import React from 'react';
import '../App.css'; // Custom styles
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import bgHero from "../assets/herosection.jpeg"


const Home = () => {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="text-center py-5"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white", // ensure text shows on dark background
          position: "relative",
          minHeight: "60vh", // full viewport height
          display: "flex",
          alignItems: "center"
        }}
      >
        {/* Optional Overlay */}
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
          <h1 className="display-5 fw-bold">Find Better Places to Live, Work and Wonder...</h1>
          <p className="lead">
            Explore your perfect home with our platform. Whether you’re looking to buy, rent, or invest, we can help.
          </p>
          <div className="d-flex justify-content-center mt-4 flex-wrap">
            <Form.Select className="me-2 mb-2" style={{ maxWidth: "180px" }}>
              <option>Category</option>
              <option>Buy</option>
              <option>Rent</option>
              <option>PG/Co-living</option>
              <option>Plots</option>
            </Form.Select>
            <Form.Select className="me-2 mb-2" style={{ maxWidth: "180px" }}>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Independent House</option>
              <option>Studio Apartment</option>
              <option>Commercial Space</option>
              <option>Land</option>
            </Form.Select>
            <Form.Select className="me-2 mb-2" style={{ maxWidth: "180px" }}>
              <option>Location</option>
              <option>Pune City</option>
              <option>Hinjawadi</option>
              <option>Pimple Saudagar</option>
              <option>Baner</option>
              <option>Kalyani Nagar</option>
              <option>Viman Nagar</option>
              <option>Magarpatta</option>
              <option>Balewadi</option>
              <option>Shivaji Nagar</option>
            </Form.Select>
            <Button variant="warning">Search</Button>
          </div>
        </Container>
      </section>

      {/* Buy, Rent, PG/Co-living Section */}
      {/* Buy, Rent, PG/Co-living Section */}
      <section className="py-5 section-cards">
        <Container>
          <Row className="g-4">
            {/* Buy a Home Card */}
            <Col md={12} lg={4}>
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Buy+Home" alt="Buy Home" />
                <Card.Body>
                  <h3 className="fw-bold">Buy a Home</h3>
                  <p className="lead">Find, Buy & Own Your Dream Home</p>
                  <p>Explore from Apartments, Land, Builder Floors, Villas, and more.</p>
                  <Button variant="warning">Explore Buying</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Rent a Home Card */}
            <Col md={12} lg={4}>
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=Rent+Home" alt="Rent Home" />
                <Card.Body>
                  <h3 className="fw-bold">Rent a Home</h3>
                  <p className="lead">Affordable & Comfortable Living</p>
                  <p>Explore rental homes suitable for every lifestyle and budget.</p>
                  <Button variant="warning">Explore Renting</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* PG/Co-living Card */}
            <Col md={12} lg={4}>
              <Card className="text-center shadow-sm">
                <Card.Img variant="top" src="https://via.placeholder.com/350x200?text=PG+Co-living" alt="PG/Co-living" />
                <Card.Body>
                  <h3 className="fw-bold">PG/Co-living</h3>
                  <p className="lead">Live with Comfort & Ease</p>
                  <p>Live with like-minded people in well-furnished and managed spaces.</p>
                  <Button variant="warning">Explore Co-living</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      {/* Featured Properties */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Discover Your Featured Property</h2>
          <Row className="g-4">
            {['For sale', 'For sale', 'For rent', 'For sale', 'For rent', 'For sale'].map((tag, idx) => (
              <Col md={4} key={idx}>
                <Card className="shadow-sm">
                  <Card.Img variant="top" src={`https://via.placeholder.com/300x180?text=Property+${idx + 1}`} />
                  <Card.Body>
                    <span className={`badge ${tag === 'For rent' ? 'bg-warning' : 'bg-success'} mb-2`}>{tag}</span>
                    <Card.Title>Sample House {idx + 1}</Card.Title>
                    <Card.Text>$250000</Card.Text>
                    <div className="d-flex justify-content-between small text-muted">
                      <span>2 Beds</span>
                      <span>2 Baths</span>
                      <span>1200 sqft</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <Container>
          <h4 className="text-center fw-bold mb-4">Our Services</h4>
          <Row className="g-4">
            {['Real Estate Consultancy', 'Property Management', 'Home Loans', 'Legal Assistance'].map((service, idx) => (
              <Col md={3} key={idx}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                      We offer top-notch services to help you buy, sell, or rent your dream property.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(to right, #4a6fa5, #3b8d99)' }}>
        <Container>
          <Row>
            <Col md={6}>
              <Card className="p-4">
                <h5>Get in Touch</h5>
                <p>We are here to help you find the perfect property. Reach out to us with any inquiries.</p>
                <Form>
                  <Form.Control className="mb-2" placeholder="Your name" />
                  <Form.Control className="mb-2" placeholder="Your email" />
                  <Form.Control className="mb-2" placeholder="Your phone" />
                  <Form.Control as="textarea" rows={3} className="mb-3" placeholder="Your message" />
                  <Button variant="warning">Send Message</Button>
                </Form>
              </Card>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center text-center">
              <div>
                <h4>Putting a Plan to Action, Assuring Your Satisfaction</h4>
                <p>Your dream property is just a click away. Let us assist you every step of the way.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>



    </div>
  );
};

export default Home;
