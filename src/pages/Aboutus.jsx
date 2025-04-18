import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import featureImg from "../assets/featureImg.jpg";
import customImg from "../assets/custom.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light text-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={featureImg}
                alt="Project Preview"
                className="img-fluid rounded"
              />
            </Col>
            <Col md={6} className="text-start">
              <h2>Expert advice for all your real estate needs</h2>
              <p className="text-muted">
                We're a passionate group of college students building a modern real estate platform as part of our academic project. Our aim? To create something simple, helpful, and real-world ready.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Boxes */}
      <section className="py-5 text-center bg-white">
        <Container>
          <h3 className="mb-4">Our mission as student developers</h3>
          <p className="text-muted mb-4">
            We focus on simplicity, clarity, and intuitive experience.
          </p>
          <Row>
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm">
                <Card.Body>
                  <h5>Buy a Property</h5>
                  <p>Explore listings for your dream home.</p>
                  <Button variant="warning">Browse</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm">
                <Card.Body>
                  <h5>Sell Your Property</h5>
                  <p>List your property and reach buyers.</p>
                  <Button variant="warning">Get Started</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="p-4 border-0 shadow-sm">
                <Card.Body>
                  <h5>Rent a Property</h5>
                  <p>Find flexible rental options with ease.</p>
                  <Button variant="warning">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Property Section */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage: `url(${featureImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <Container>
          <h2 className="fw-bold">Discover your featured property</h2>
          <p>Handpicked listings by our team for learning and demo purposes</p>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-5 text-center bg-white">
        <Container>
          <h3 className="mb-4">Our development team</h3>
          <Row>
            {[{ name: "Tanvi Sharma", role: "Frontend Dev", img: team1 },
              { name: "Aryan Mehta", role: "Backend Dev", img: team2 },
              { name: "Neha Iyer", role: "UI/UX Designer", img: team3 }].map(
              (member, idx) => (
                <Col md={4} key={idx} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img
                      variant="top"
                      src={member.img}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <h5>{member.name}</h5>
                      <p className="text-muted">{member.role}</p>
                      <p>3rd Year B.Tech Student</p>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>

      {/* Personalized Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h4>Real estate, personalized for you</h4>
              <p className="text-muted">
                As students, we're blending academic concepts with real-life
                applications. This site is not just a project, but a stepping
                stone into real-world software building.
              </p>
              <Button variant="warning">Learn More</Button>
            </Col>
            <Col md={6}>
              <img
                src={customImg}
                alt="Personalized"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
