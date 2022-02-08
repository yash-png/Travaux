import React from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

const LeftContainer = () => {
  return (
    <div>
      <Container>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Img variant="top" style={{width: "30", height: "30", borderRadius: "50%", verticalAlign: "middle"}} src="https://images.unsplash.com/photo-1644169342452-a127938af7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80" alt="..." className=" img-fluid" roundedCircle/>
          <Card.Body>
            <Card.Title className="text-center">Profile Name</Card.Title>
            <Card.Text  className="text-center">Designation of User: Software Developer</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Card.Link className="text-decoration-none"  href="#">Resume Builder</Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link className="text-decoration-none" href="#">Logout</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default LeftContainer;
