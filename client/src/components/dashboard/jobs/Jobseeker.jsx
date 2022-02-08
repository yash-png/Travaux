import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Rightcontainer from "./Rightcontainer";
import Middlecontainer from "./Middlecontainer";
import Leftcontainer from "./Leftcontainer";

const Jobseeker = () => {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
    <Container fluid className="border border-dark">
      <Row> 
      <Col  className="border border-dark">
        <Container className="border border-dark">
          <Leftcontainer />
        </Container>
      </Col>
      {/* left container ends */}
      <Col className="border border-dark">
        <Container className="border border-dark">
          <Middlecontainer />
        </Container>
      </Col>
      {/* middle container ends */}
      <Col className="border border-dark"> 
        <Container className="border border-dark">
          <Rightcontainer />
        </Container>
      </Col>
      {/*right container ends */}
      </Row>
      </Container>
    </div>
  );
};

export default Jobseeker;
