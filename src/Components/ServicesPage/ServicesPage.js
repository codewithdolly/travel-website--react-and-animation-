import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesPage.css';
// import Group from "../Images/booking 1.png";

const servicesData = [
  {
    avatar: '../Images/booking 1.png',
    name: 'Easy Booking',
    description: 'Square, was moving across the sand in their direction.'
  },
  {
    avatar: '../Images/Group.png',
    name: 'Best Tour Guide',
    description: 'What looked like a small patch of purple grass, above five feet.'
  },

];

const ServicesPage = () => {
  return (
    <Container fluid className="servicePage my-5">
      <Row>
        {/* Left Column */}
        <Col md={3} className="ServiceValues d-flex flex-column justify-content-center">
          <h5 className="text-pink">Services</h5>
          <h2>Our top value categories for you</h2>
        </Col>
        
        {/* Right Column */}
        <Col md={9} className='Servicecard'>
          <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} lg={4} className="mb-3">
          <Card className="h-100 serviceCard1 align-items-center">
                <img
                      src="../Images/Group.png"
                      alt="Best Tour Guide"
                      className="avatar-image mr-3"
                    />
                     <Card.Title className='mt-3'>Best Tour Guide</Card.Title>
                      <Card.Text className='serviceDesc text-justify'>What looked like a small patch of purple grass, above five feet.</Card.Text>
                </Card>
              </Col>
            {servicesData.map((service, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-3">
                <Card className="h-100 serviceCards align-items-center shadow">
                <img
                      src={service.avatar}
                      alt={service.name}
                      className="avatar-image mr-3"
                    />
                     <Card.Title className='mt-3'>{service.name}</Card.Title>
                      <Card.Text className='serviceDesc text-justify'>{service.description}</Card.Text>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
