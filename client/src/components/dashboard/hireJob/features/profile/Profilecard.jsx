import React from "react";
import TextField from "@mui/material/TextField";

const Profilecard = () => {
  return (
    <div>
      <div className="d-flex" style={{ marginLeft: "5rem" }}>
        <img
          className="rounded-circle"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <div className="mx-4 mt-5">
          <p style={{ fontSize: "1.5rem" }}>Yash Nerkar</p>
          <p>Upload your photo and personal profile</p>
        </div>
      </div>
      <hr width="90%" className="mx-5"></hr>
      {/*  */}
      <div className="d-flex mt-3 justify-content-around">
        <p className="mx-5 text-center mt-1" style={{ fontSize: "1.2rem" }}>
          username
        </p>
        <TextField
          id="outlined-basic"
          className="mx-5"
          label="outlined"
          variant="outlined"
          sx={{ width: "35rem" }}
        />
      </div>
      <div className="d-flex mt-3 justify-content-around">
        <p className="mx-5 mt-1" style={{ fontSize: "1.2rem" }}>
          Email ID
        </p>
        <TextField
          id="outlined-basic"
          className="mx-5"
          label="outlined"
          variant="outlined"
          sx={{ width: "35rem" }}
        />
      </div>
      <div className="d-flex mt-3  justify-content-around">
        <p className="mx-5 mt-1" style={{ fontSize: "1.2rem" }}>
          Website
        </p>
        <TextField
          id="outlined-basic"
          className="mx-5"
          label="outlined"
          variant="outlined"
          sx={{ width: "35rem" }}
        />
      </div>
      <div className="d-flex mt-3 justify-content-around">
        <p className="mx-5 mt-1" style={{ fontSize: "1.2rem" }}>
          Your Bio
        </p>
        <TextField
          id="outlined-basic"
          className="mx-5"
          label="outlined"
          variant="outlined"
          sx={{ width: "35rem" }}
        />
      </div>
    </div>
  );
};

export default Profilecard;
