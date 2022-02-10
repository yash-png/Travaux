import React,{useState}from 'react';
import { Container, Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../home/Navbar';  

const Register = () => {
  const [registerInfo,setregisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const{name, value} = e.target;
    setregisterInfo({
      ...registerInfo,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch('xyz',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    });
    const result = await data.json();
    console.log(result);
    setregisterInfo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (<div>
  <Navbar />
    <Container className="w-50 p-5 bg-dark mt-5 text-light">
      <h3 className="text-center">Register</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Enter your name" name="name" value={registerInfo.name} onChange={handleChange}/>
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="mb-3" type="email" placeholder="Enter email"  name="email" value={registerInfo.email} onChange={handleChange}/>
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password" value={registerInfo.password} onChange={handleChange} />
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Container className="d-flex justify-content-center">
        <Button class variant="primary" type="submit">Register</Button>
        </Container>
        </Form>
      </Container>
  </div>);
};

export default Register;
