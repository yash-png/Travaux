import React from 'react';
import { Container, Form } from 'react-bootstrap';

const Register = () => {
  return (<div>
    <Container className="w-50 border border-dark p-5 bg-dark mt-5 text-light" >
      <h3 className="text-center">Register</h3>
      <Form>
      <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Enter your name" />
          <Form.Text className="text-muted"/>
        </Form.Group>
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
  </div>);
};

export default Register;
