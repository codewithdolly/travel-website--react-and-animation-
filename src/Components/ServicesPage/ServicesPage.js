import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesPage.css';

const servicesData = [
  {
    avatar: 'avatar1-url.jpg',
    name: 'Service 1',
    description: 'Description for Service 1'
  },
  {
    avatar: 'avatar2-url.jpg',
    name: 'Service 2',
    description: 'Description for Service 2'
  },
  {
    avatar: 'avatar3-url.jpg',
    name: 'Service 3',
    description: 'Description for Service 3'
  },

];

const ServicesPage = () => {
  return (
    <Container className="services-page my-5">
      <Row>
        {/* Left Column */}
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h5 className="text-pink">Services</h5>
          <h2>Our top value categories for you</h2>
        </Col>
        
        {/* Right Column */}
        <Col md={6}>
          <Row className="d-flex justify-content-center">
            {servicesData.map((service, index) => (
              <Col xs={12} md={6} lg={4} key={index} className="mb-3">
                <Card className="h-100">
                  <Card.Body className="d-flex align-items-center">
                    <img
                      src={service.avatar}
                      alt={service.name}
                      className="avatar-image mr-3"
                    />
                    <div>
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </div>
                  </Card.Body>
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
