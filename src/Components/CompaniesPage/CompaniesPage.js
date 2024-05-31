import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './CompaniesPage.css';
import  errow from "../Images/OBJECTS.png";
import  company1 from "../Images/New folder/1.png";
import  company2 from "../Images/New folder/2.png";
import  company3 from "../Images/New folder/3.png";
import  company4 from "../Images/New folder/4.png";

const CompaniesPage = () => {
  return (
    <Container fluid className="companiesPage mb-5">
      <Image src={errow}  alt="Company 1" className="companiesPageErrow" />
      <Row className="companiesPage-row justify-content-center">
        <Col xs={6} md={3} className="text-center mb-4">
          <Image src={company1} alt="Company 1" fluid className="companyImage" />
        </Col>
        <Col xs={6} md={3} className="text-center mb-4">
          <Image src={company2} alt="Company 2" fluid className="companyImage" />
        </Col>

        <Col xs={6} md={3} className="text-center mb-4">
          <Image src={company4} alt="Company 4" fluid className="companyImage" />
        </Col>
        <Col xs={6} md={3} className="text-center mb-4">
          <Image src={company3} alt="Company 3" fluid className="companyImage" />
        </Col>
      </Row>
    </Container>
  );
};

export default CompaniesPage;
