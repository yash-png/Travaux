import React from "react";
import { Container } from "react-bootstrap";
import JobSummaryCard from "./JobSummaryCard";
import List from "@mui/material/List";
const Savedjobs = () => {

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        padding: "1rem",
        maxHeight: "70vh",
        overflowY: "scroll",
        borderRadius: "0 0 1rem 1rem",
      }}
    >
      <JobSummaryCard
        avatar="1.jpg"
        s
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
  );
};

export default Savedjobs;
