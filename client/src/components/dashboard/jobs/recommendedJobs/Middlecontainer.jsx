import React, { useState } from "react";
import List from "@mui/material/List";
import { Container } from "react-bootstrap";
import RecommendedJobCard from "./RecommendedJobCard";
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
        boxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
        WebkitBoxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
        MozBoxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
      }}
    >
      {/* <h5 className="text-align-left">Recommended Jobs for You</h5>
      <p>For the Jobs you don't yet know!</p> */}

      <Container className="d-flex justify-content-evenly">
        <Searchbar />
      </Container>

      <hr />

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <RecommendedJobCard
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
      </List>
    </div>
  );
};

export default Middlecontainer;

// the ultimate job machine
