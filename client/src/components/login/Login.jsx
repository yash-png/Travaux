import React,{useState}from "react";
import { Link } from "react-router-dom";
import Homenavbar from "../home/Navbar";
import { Form,Container,Button} from "react-bootstrap";
const Login = () => {
  const [loginInfo,setloginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const{name, value} = e.target;
    setloginInfo({
      ...loginInfo,
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
      body: JSON.stringify(loginInfo),
    });
    const result = await data.json();
    console.log(result);
    setloginInfo({
      email: "",
      password: "",
    });
  };
  return (
    <div style={{height: '100vh',width: '100vw'}}>
      <Homenavbar />
      <Container className="w-50 p-5 bg-dark mt-5 text-light" >
      <h3 className="text-center">Sign In</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className="mb-3" type="email" placeholder="Enter email" name="email" value={loginInfo.email} onChange={handleChange} />
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" name="password" value={loginInfo.password} onChange={handleChange} />
          <Form.Text className="text-muted"/>
        </Form.Group>
        <Container className="d-flex justify-content-center py-3">
        <Button class variant="primary" type="submit">Register</Button>
        </Container>
        </Form>
      </Container>
      </div>
  );
};

export default Login;
