import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
    <Container className="explorePage">
      <Row className="min-vh-100">
        {/* Left Column */}
        <Col md={5} className="d-flex flex-column justify-content-center align-items-start TravelMain">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Button className="ExploreBtn shadow border-0 p-2 px-4 mb-4 d-flex align-items-center">
              Explore the World <BusinessCenterIcon fontSize="small" className='ml-2' />
            </Button>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Travel <span className='TravelDestination'>top destination</span> <br /> of the world
          </motion.h1>
          <motion.p 
            className='text-muted'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We always make our customer happy by providing as many choices as possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button className="startBtn mr-2 px-3" href="https://www.makemytrip.com/" target="_blank">Get Started</Button>
            <Button variant="outline-secondary" className='watchDemo px-3' href="https://www.apple.com/in/app-store/" target="_blank">
              <PlayCircleIcon className='watchDemo-Icon mr-2' />Watch Demo
            </Button>
          </motion.div>
        </Col>
        
        {/* Right Column */}
        <Col md={7} className="position-relative d-none d-md-block">
          <div className="backgroundImage"></div>
          <div className="floatingCards">
            <motion.div 
              className="floatingCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <Card.Img variant="top" src={Rectangle1} />
              </Card>
            </motion.div>
            <motion.div 
              className="floatingCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <Card.Img variant="top" src={Rectangle2} />
              </Card>
            </motion.div>
            <motion.div 
              className="floatingCard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <Card.Img variant="top" src={Rectangle3} />
              </Card>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Image src={erroow} className="travelError p-3" roundedCircle alt="img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <Image src={addUser} className="traveluser p-3" roundedCircle alt="img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
          >
            <Button variant="light" className='locationBtns btn rounded shadow'>
              <PlaceIcon className='locationIcon' /> Top Places
            </Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default ExplorePage;
