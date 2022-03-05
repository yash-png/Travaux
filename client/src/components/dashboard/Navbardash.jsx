import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
const Navbardash = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand style={{fontSize:"1.5rem"}}  href="/">
            Travaux
          </Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link href="/jobdetail">
              <Button className="px-4" variant="dark">
                Jobs
              </Button>
            </Nav.Link>
            <Nav.Link href="/hire">
              <Button className="px-4" variant="dark">
                Hire
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// 

export default Navbardash;
