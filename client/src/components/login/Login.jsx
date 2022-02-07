import React from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../home/Navbar";
import { Form,Container} from "react-bootstrap";
const Login = () => {
  return (
    <div style={{height: '100vh',width: '100vw'}}>
      <Homenavbar />
      <Container className="w-50 border border-dark p-5 bg-dark mt-5 text-light" >
      <h3 className="text-center">Sign In</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="mb-3" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
          <Form.Text className="text-muted"/>
        </Form.Group>
        </Form>
      </Container>
      </div>
  );
};

export default Login;
