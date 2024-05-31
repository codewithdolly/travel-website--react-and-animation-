import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../Images/Logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <Container>
        <Row>
          {/* First Column */}
          <Col md={3}>
            <img src={logo} alt="Logo" className="mb-3" />
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="socialMedia">
              <a href="#facebook" className="mr-2">
                <FacebookIcon />
              </a>
              <a href="#x" className="mr-2">
             <XIcon />
              </a>
              <a href="#instagram"><InstagramIcon /></a>
            </div>
          </Col>

          {/* Second Column */}
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#blog">Mobile</a>
              </li>
            </ul>
          </Col>

          {/* Third Column */}
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#travlog">Why Travlog?</a>
              </li>
              <li>
                <a href="#partnership">Partner with us</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </Col>

          {/* Fourth Column */}
          <Col md={3}>
            <h5>Meet Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#phone">+00 92 1234 56789</a>
              </li>
              <li>
                <a href="#email">info@travlog.com</a>
              </li>
              <li>
                <a href="#address">
                  205. R Street, New York <br /> BD23200
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
