import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <Container>
        <Row>
          {/* First Column */}
          <Col md={3}>
            <img src="your-logo-url.png" alt="Logo" className="mb-3" />
            <p>Our company is dedicated to providing top-notch services and making our customers happy with the best choices available.</p>
            <div className="social-media">
              <a href="#facebook" className="mr-2">Facebook</a>
              <a href="#twitter" className="mr-2">Twitter</a>
              <a href="#instagram">Instagram</a>
            </div>
          </Col>

          {/* Second Column */}
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </Col>

          {/* Third Column */}
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </Col>

          {/* Fourth Column */}
          <Col md={3}>
            <h5>Meet Us</h5>
            <ul className="list-unstyled">
              <li><a href="#location">Our Location</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#partners">Partners</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
