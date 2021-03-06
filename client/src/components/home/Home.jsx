import React from "react";
import Homenavbar from "../home/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "./Card";

const classes = {
  col1: {
    display: "flex",
  },
};

const Home = () => {
  return (
    <div  style={{ height: "100vh", width: "100vw" }}>
      {/* <Homenavbar/> */}
      <Homenavbar/>
      <Container fluid className="d-flex align-items-center">
        <Row>
          <Col xs={12} sm={12} md={6} className=" p-5">
            <Container className="mt-5 p-1">
            <p className="text-center " style={{fontFamily:"Open sans, sans-serif",fontSize:"2.7rem"}}>Hire & Explore</p>
            </Container><br></br>
            <Container className=" mt-3" style={classes.col1}>
              <HomeCard link="recruit" title="For Companies" text="Hire the employee for your company" btnText="Start Hiring" />
              <HomeCard link="register" title="For Job Seekers" text="Join to find your desired Job!" btnText="Sign Up & connect" />
            </Container>
          </Col>
          <Col xs={12} sm={12} md={6} className=" py-5">
            <img className="img-fluid" src="images/home.svg" alt="img" />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Home;
