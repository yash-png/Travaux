import React from "react";
import Navbardash from "../Navbardash";
import Container from "react-bootstrap/Container";
import Button from "@mui/material/Button";

const Jobsdetails = () => {
  return (
    <>
      <div>
        <Navbardash />
      </div>

      <Container className="my-3 p-4 border border-dark ">
        <h1>
          <strong>Teacher</strong>
        </h1>
        <br />
        <h4>
          <strong> Company : </strong> Datta Meghe College of Engineering
        </h4>
        <br />
        <h4>
          <strong> Location : </strong>
          Mumbai, India
        </h4>

        {/* Job Description container */}
        <div className=" container mx-0 p-0  w-50 my-5">
          <h4>
            <strong>Job Description:</strong>
          </h4>
          <p>
            Teaching students in the field of computer science.Teaching students
            in the field of computer science.Teaching students in the field of
            computer science.
          </p>
        </div>

        <div className="container mx-0 p-0 my-5 w-50">
          <h5>
            <strong>Skills Required : </strong>Java, Python, C++, C, HTML, CSS
          </h5>
          <br></br>
          <h5>
            <strong>Experience Required : </strong>2 years
          </h5>
        </div>
        <Button
          type="submit"
          // fullWidth
          // style={{bgcolor}}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{
            borderRadius: "50px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            minWidth: "100px",
            minHeight: "40px",
            backgroundColor: "#01692C",
          }}
        >
          Apply Now
        </Button>
      </Container>
    </>
  );
};

export default Jobsdetails;
