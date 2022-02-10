import React from "react";
import {Navbar,Container,Nav,Button}from 'react-bootstrap';

const Homenavbar = () => {
  return (
    <div>
      <Navbar bg="white" variant="light">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:"2.2rem", fontFamily:"Varela Round', sans-serif;"}}>Travaux</Navbar.Brand>
          
          <Nav className="d-flex">
            <Nav.Link href="/login"><Button className="px-3 " variant="white">Login</Button></Nav.Link>
            <Nav.Link href="/register"><Button className="px-3" variant="dark">Sign Up</Button></Nav.Link>
            {/* <Nav.Link href="#pricing">contact</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Homenavbar;
