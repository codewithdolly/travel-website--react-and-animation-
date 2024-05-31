import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import './ExplorePage.css';
import Rectangle1 from "../Images/Rectangle 1.png";
import Rectangle2 from "../Images/Rectangle 2.png";
import Rectangle3 from "../Images/Rectangle 3.png";
import erroow from "../Images/erroow.png";
import addUser from "../Images/add-user.png";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaceIcon from '@mui/icons-material/Place';



const ExplorePage = () => {
  return (
    <Container  className="explorePage">
      <Row className="min-vh-100">
        {/* Left Column */}
        <Col md={5} className="d-flex flex-column justify-content-center align-items-start TravelMain">
          <Button className="ExploreBtn shadow border-0 p-2 px-4 mb-4 d-flex align-items-center">Explore the World <BusinessCenterIcon fontSize="small" className='ml-2' /></Button>
          <h1>Travel <span className='TravelDestination'>top destination</span> <br /> of theworld</h1>
          <p className='text-muted'>We always make our customer happy by providing as many choices as possible.</p>
          <div>
            <Button className="startBtn mr-2 px-3" href="https://www.makemytrip.com/" target="_blank">Get Started</Button>
            <Button variant="outline-secondary" className='watchDemo px-3' href="https://www.apple.com/in/app-store/" target="_blank"><PlayCircleIcon className='watchDemo-Icon mr-2' />Watch Demo</Button>
          </div>
        </Col>
        
        {/* Right Column */}
        <Col md={7} className="position-relative d-none d-md-block">
          <div className="backgroundImage"></div>
          <div className="floatingCards">
            <Card className="floatingCard">
              <Card.Img variant="top" src={Rectangle1} />
            </Card>
            <Card className="floatingCard">
              <Card.Img variant="top" src={Rectangle2} />
            </Card>
            <Card className="floatingCard">
              <Card.Img variant="top" src={Rectangle3} />
            </Card>
          </div>
          <Image src={erroow} className="travelError p-3" roundedCircle alt="img" />
          <Image src={addUser} className="traveluser p-3" roundedCircle alt="img" />
          <Button variant="light" className='locationBtns btn rounded shadow'><PlaceIcon className='locationIcon' /> Top Places</Button>{' '}
        </Col>
      </Row>
    </Container>
  );
};

export default ExplorePage;
