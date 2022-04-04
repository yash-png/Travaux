import React, { useState, useEffect } from "react";
import Features from "./features/Features";
import Dashboard from "./recruiterDashboard/RecruiterDashboard";
import { Container, Row, Col } from "react-bootstrap";
const Recruiter = () => {
  let obj = {
    Candidates: true,
    Jobs: false,
    Profile: false,
  };

  const [open, setOpen] = useState(obj);

  const handleClick = (e) => {
    let name = e.target.innerHTML;
    // console.log(name);
    setOpen((prev) => {
      let obj = { ...prev };
      for (let key in obj) {
        if (key === name) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
      }
      return obj;
    });
    console.log(open);
  };

  return (
    <Container fluid>
      <h2>Travaux</h2>
      <Row className="mt-5">
        <Col md={2} className="ml-3">
          <Features handleClick={handleClick} />
        </Col>
        <Col
          md={9}
          className="p-2"
          style={{
            borderRadius: "10px",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
          }}
        >
          <Dashboard features={open} />
        </Col>
      </Row>
    </Container>
  );
};

export default Recruiter;
