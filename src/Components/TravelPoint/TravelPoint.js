import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./TravelPoint.css";
import travelgirl from "../Images/Group 9238.png";
import discount from "../Images/discount.png";
import star from "../Images/ticket-star.png";

const TravelPoint = () => {
  return (
    <Container fluid className="travelPoint p-0 my-5 py-5 pr-5 ">
      <Row>
        {/* Image Column */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <img src={travelgirl} alt="Travel girl" className="img-fluid" />
          <Button className="shadow discountBtn d-flex align-items-center px-4 ">
            <img src={discount} alt="Discount" className="  mr-2" />
            Discount
          </Button>
        </Col>

        {/* Text Column */}
        <Col
          md={5}
          className="d-flex flex-column justify-content-center TravelPointRight p-5"
        >
          <h5 className="TravelHeader text-uppercase ">Travel Point</h5>
          <h2 className="travelHeader2">
            We helping you find your dream location
          </h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>

          {/* Info Boxes */}
          <Row className="mt-4">
            <Col xs={12} sm={6} className="mb-3">
              <Card className="infoBox">
                <Card.Body>
                  <h3 className="travelSuccess">500+</h3>
                  <p>Holidays Packages</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} className="mb-3">
              <Card className="infoBox">
                <Card.Body>
                  <h3 className="travelSuccess">100+</h3>
                  <p>Luxury Hotels</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} className="mb-3">
              <Card className="infoBox">
                <Card.Body>
                  <h3 className="travelSuccess">10+</h3>
                  <p>Premium Airlines</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} className="mb-3">
              <Card className="infoBox">
                <Card.Body>
                  <h3 className="travelSuccess">10K+</h3>
                  <p>Happy Customers</p>
                </Card.Body>
              </Card>
            </Col>
            <div>
              <img
                src={star}
                width={75}
                alt="Travel girl"
                className="starImg img-fluid"
              />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelPoint;
