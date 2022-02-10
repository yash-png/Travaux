import React from "react";
import { Container } from "react-bootstrap";
import Jobcards from "./Jobcards";
import List  from "@mui/material/List";
const Savedjobs = () => {
  return (
    <div>
      
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
        <Jobcards
          avatar="1.jpg"
          title="React Developer"
          description="Looking for a React Developer"
        />
      </List>
      {/* </Container> */}
    </div>
  );
};

export default Savedjobs;
