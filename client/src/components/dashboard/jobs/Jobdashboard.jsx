import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rightcontainer from "./jobsummary/Rightcontainer";
import Middlecontainer from "./recommendedJobs/Middlecontainer";
import ProfileSection from "./profile/ProfileSection";
import Navbardash from "../Navbardash";
const Jobdashboard = () => {
 
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX:"hidden",
        backgroundColor: "#f6f6f6",

       
      }}
    >
      <Navbardash />

      <Container fluid style={{ padding: "0 4rem 0 4rem" }}>
        <Row>
          <Col xs={12} md={2} className="">
            <ProfileSection />
          </Col>

          <Col xs={12} md={7} className="">
           
              <Middlecontainer />
     
          </Col>

          <Col xs={12} md={3} >
         
              <Rightcontainer />
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobdashboard;
