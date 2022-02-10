import React from "react";
import { Navbar,Nav ,Container} from "react-bootstrap";

const Navbardash = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Travaux</Navbar.Brand>
          <Nav className="ml-5">
            {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
            <Navbar.Brand href="#home">Jobs</Navbar.Brand>
            <Navbar.Brand href="#home">Hire</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbardash;
