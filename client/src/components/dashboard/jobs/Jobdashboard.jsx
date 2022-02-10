import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rightcontainer from "./Rightcontainer";
import Middlecontainer from "./Middlecontainer";
import ProfileSection from "./ProfileSection";
import Navbardash from "../Navbardash";
const Jobdashboard = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f6f6f6",
      }}
    >
      <Navbardash />

      <Container fluid style={{ padding: "0 4rem 0 4rem" }}>
        <Row>
          <Col xs={12} md={3} className="">
            <ProfileSection />
          </Col>

          <Col xs={12} md={6} className="">
            <Container className>
              <Middlecontainer />
            </Container>
          </Col>

          <Col xs={12} md={3} className="">
            <Container
              className
              style={{ maxHeight: "80vh", overflowY: "scroll" }}
            >
              <Rightcontainer />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobdashboard;
