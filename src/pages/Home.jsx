import React from 'react';
import '../App.css'; // Custom styles
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      {/* Updated Hero Section */}
      <section className="hero-section" style={{
        backgroundImage: "url('/images/herosection.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#cccccc', // Fallback color if image doesn't load
      }}>
        <Container className="py-5">
          <h1 className="display-4 fw-bold mb-3">Find a home that suits your lifestyle.</h1>
          <p className="lead mb-4">
            Whether you're looking to buy, rent, or explore investment opportunities, we make the process smooth,
            transparent, and tailored to your needs.
          </p>
          
          <div className="search-container bg-white p-3 rounded shadow mt-4">
            <Row className="g-2 align-items-center">
              <Col xs={12} md={3}>
                <Form.Select className="border-0">
                  <option>Category</option>
                  <option>Buy</option>
                  <option>Rent</option>
                  <option>PG/Co-living</option>
                  <option>Plots</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={3}>
                <Form.Select className="border-0">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Independent House</option>
                  <option>Studio Apartment</option>
                  <option>Commercial Space</option>
                  <option>Land</option>
                </Form.Select>
              </Col>
              <Col xs={12} md={3}>
                <Form.Select className="border-0">
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
              </Col>
              <Col xs={12} md={3}>
                <Button variant="warning" className="w-100">SEARCH</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Rest of your code remains unchanged */}
      <section className="py-5 section-cards">
  <Container>
    <Row className="g-5">
      {[
        {
          title: "BUY A HOME",
          subtitle: "Find, Buy & Own Your Dream Home",
          desc: "Explore from Apartments, Land, Builder Floors, Villas, and more.",
          image: "/images/buy.jpg",
          buttonText: "Explore Buying"
        },
        {
          title: "RENT A HOME",
          subtitle: "Affordable & Comfortable Living",
          desc: "Explore rental homes suitable for every lifestyle and budget.",
          image: "/images/rent.jpg",
          buttonText: "Explore Renting"
        },
        {
          title: "PG/CO-LIVING",
          subtitle: "Live with Comfort & Ease",
          desc: "Live with like-minded people in well-furnished and managed spaces.",
          image: "/images/pg.jpg",
          buttonText: "Explore PGs"
        }
      ].map((card, idx) => (
        <Col md={12} key={idx}>
          <div className="card-horizontal d-flex align-items-center shadow-sm rounded overflow-hidden bg-white">
            <div className="card-image-container">
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <div className="card-text-content p-4">
              <div className="caption text-muted fw-bold mb-1">{card.title}</div>
              <h4 className="fw-bold text-dark">{card.subtitle}</h4>
              <p className="text-secondary mb-3">{card.desc}</p>
              <button className="btn btn-warning fw-semibold">{card.buttonText}</button>
            </div>
          </div>
        </Col>
      ))}
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
                <Card className="shadow-sm hover-zoom">
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
                <Card className="shadow-sm h-100 hover-zoom">
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
