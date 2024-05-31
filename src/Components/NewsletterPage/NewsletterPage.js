import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import './NewsletterPage.css';
import Graphic_Elements from "../Images/Graphic_Elements.png";

const NewsletterPage = () => {
  return (
    <Container className="newsletterPage py-5">
      <Image src={Graphic_Elements} className='graphicImg' width={130} />
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="subsPink">Subscribe to our Newsletter</h1>
          <h2 className="Explore mt-3">Prepare yourself & let’s explore the beauty of the world</h2>
          {/* <Form className="mt-4">
            <Form.Group controlId="formBasicEmail d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="subsInput" />
              <Button variant="primary" type="submit" className="input-group-append">
              Subscribe
            </Button>
            </Form.Group>
              </Form> */}
            <div className="input-group my-4 w-80">
  <input type="text" className="form-control" placeholder=" ✉️Your Email" aria-label="Your Email" aria-describedby="basic-addon2" />
  <div className="input-group-append">
    <span className="input-group-text subsBtn" id="basic-addon2">Subscribe</span>
  </div>
</div>
           
        
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterPage;
