import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './NewsletterPage.css';

const NewsletterPage = () => {
  return (
    <Container className="newsletter-page my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="text-pink">Subscribe to our Newsletter</h1>
          <h2 className="mt-3">Prepare yourself & let’s explore the beauty of the world</h2>
          <Form className="mt-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email" className="email-input" />
            </Form.Group>
            <Button variant="primary" type="submit" className="subscribe-button mt-3">
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterPage;
