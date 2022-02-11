import React, { useState } from "react";
import List from "@mui/material/List";
// import { FormControl, Input, InputLabel, InputAdornment} from "@mui/material";
import { Form, Button, Container } from "react-bootstrap";
import JobSummaryCard from "../jobsummary/JobSummaryCard";
import Searchbar from "./Searchbar";

const Middlecontainer = () => {
  const [searchResult, setSearchResult] = useState({
    skill: "",
    location: "",
  });
  const [response, setResponse] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("xyz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchResult),
    });
    const result = await data.json();
    console.log(result);
    setResponse(result);
    setSearchResult({
      skill: "",
      location: "",
    });
  };
  console.log(searchResult);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchResult({
      ...searchResult,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        height: "85vh",
        overflowY: "scroll",
        backgroundColor: "#fff",
        padding: "1rem",
        margin: "0",
        borderRadius: "1rem",
        border: "1px solid #D9D3D2",
        boxShadow: "31px 29px 21px -26px rgba(0,0,0,0.47)", 
  WebkitBoxShadow: "31px 29px 21px -26px rgba(0,0,0,0.47)", 
  MozBoxShadow: "31px 29px 21px -26px rgba(0,0,0,0.47)"
      }}
    >
      <h5 className="text-align-left">Recommended Jobs for You</h5>
      <p>The best recommended jobs based on your skills!!!</p>
      <Form className="p-3" onSubmit={handleSubmit}>
        <Container className="d-flex justify-content-evenly">
        <Searchbar/>

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="skill"
              placeholder="Search Job by skills"
              value={searchResult.skill}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="location"
              placeholder="Search Job by location"
              value={searchResult.location}
              onChange={handleChange}
            />
          </Form.Group> */}
        </Container>
        <Container className="text-center">
          <Button className="px-4 mt-2" variant="success" type="submit">
            SEARCH
          </Button>
        </Container>
      </Form>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <JobSummaryCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
      </List>
    </div>
  );
};

export default Middlecontainer;
