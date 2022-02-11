import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterModal from "./FilterModal";

const Searchbar = () => {
  // Filters Modal
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Paper
      component="form"
      // className="border border-dark"
      sx={{
        p: "0.5rem 0.6rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "85%",
        borderRadius: "1.5rem",
      }}
    >
      <div className="d-flex flex-row">
        <IconButton sx={{}} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1 }} placeholder="Search Travaux" />
      </div>

      <div
        style={{ width: "36%", height: "100%" }}
        className="d-flex align-items-center justify-content-between"
      >
        <div
          className="d-flex align-items-center justify-content-center "
          onClick={handleShow}
        >
          <IconButton aria-label="search">
            <FilterListIcon />
          </IconButton>
          <div style={{ fontSize: "1.2rem" }}>Filters</div>
        </div>
        <span
          style={{
            borderRight: "thin solid",
            borderColor: "rgba(0,0,0,0.25)",
            height: "60%",
          }}
        ></span>
        <Button
          className="btn btn-md btn-primary px-3 ml-4"
          style={{ borderRadius: "1.5rem" }}
        >
          SEARCH
        </Button>
      </div>
      <FilterModal show={show} handleClose={handleClose} />
    </Paper>
  );
};
/*   // Filter Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
        <Filters show={show} handleClose={handleClose} />
   */
export default Searchbar;
