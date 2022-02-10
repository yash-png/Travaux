import React from "react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

const LeftContainer = () => {
  return (
    <Container
      className="m-0 p-0 d-flex my-3  d-flex justify-content-center "
      style={{}}
    >
      <Card
        className="border border-dark"
        style={{
          width: "16rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        <Container
          className="text-center"
          style={{
            height: "5rem",
            backgroundColor: "#dcf0fa",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
          }}
        ></Container>

        <Card.Img
          style={{
            width: "5rem",
            height: "5rem",
            position: "relative",
            bottom: "2.5rem",
          }}
          variant="top"
          src="https://images.unsplash.com/photo-1644169342452-a127938af7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80"
          alt="..."
          className="text-center border border-dark rounded-circle"
        />

        <Card.Body className="pt-0">
          <Card.Title className="text-center">Profile Name</Card.Title>
          <Card.Text className="text-center">
            About me very nice hello bye hehe sdakfjsf asjjasfdklj{" "}
          </Card.Text>
          <hr />
          <ListGroup className="list-group-flush pt-0">
            <ListGroupItem>
              <Card.Link className="text-decoration-none" href="#">
                Resume
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link className="text-decoration-none" href="#">
                Settings
              </Card.Link>
            </ListGroupItem>
            <ListGroupItem>
              <Card.Link className="text-decoration-none" href="#">
                Logout
              </Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LeftContainer;
