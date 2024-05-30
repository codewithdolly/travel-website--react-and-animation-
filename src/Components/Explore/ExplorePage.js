import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './ExplorePage.css';
import Rectangle1 from "../Images/Rectangle 1.png";
import Rectangle2 from "../Images/Rectangle 2.png";
import Rectangle3 from "../Images/Rectangle 3.png";

const ExplorePage = () => {
  return (
    <Container fluid className="explore-page">
      <Row className="min-vh-100">
        {/* Left Column */}
        <Col md={6} className="d-flex flex-column justify-content-center align-items-start p-5">
          <Button variant="primary" className="mb-3">Explore the World</Button>
          <h1>Travel Top Destination of the World</h1>
          <p>We always make our customer happy by providing as many choices as possible.</p>
          <div>
            <Button variant="success" className="mr-2">Get Started</Button>
            <Button variant="outline-secondary">Watch Demo</Button>
          </div>
        </Col>
        
        {/* Right Column */}
        <Col md={6} className="position-relative d-none d-md-block">
          <div className="background-image"></div>
          <div className="floating-cards-container">
            <Card className="floating-card">
              <Card.Img variant="top" src={Rectangle1} />
            </Card>
            <Card className="floating-card">
              <Card.Img variant="top" src={Rectangle2} />
            </Card>
            <Card className="floating-card">
              <Card.Img variant="top" src={Rectangle3} />
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExplorePage;
