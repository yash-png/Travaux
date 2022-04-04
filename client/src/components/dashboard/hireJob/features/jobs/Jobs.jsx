import React, { useState } from "react";
import Jobcard from "./Jobcard";
import Button from "@mui/material/Button";
import JobModal from "./JobModal";
const Jobs = () => {
  const [modalShow, setModalShow] = useState(true);
  return (
    <>
      <div className="text-center container my-4">
        <Button variant="contained" onClick={() => setModalShow(true)}>
          Add Job
        </Button>
        <JobModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      <div className="d-flex justify-content-evenly p-2">
        <Jobcard />
        <Jobcard />
        <Jobcard />
      </div>
    </>
  );
};

export default Jobs;
