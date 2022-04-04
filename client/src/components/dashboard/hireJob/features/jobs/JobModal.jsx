import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const JobModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Jobs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                />{" "}
                <TextField
                  id="outlined-basic"
                  label="Company"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Salary"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Education"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Skills"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Work-Sector"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Job-Type"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Experience"
                  variant="outlined"
                />{" "}
              </Box>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JobModal;
