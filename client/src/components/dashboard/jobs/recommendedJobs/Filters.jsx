import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Popular from "./Popular";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import SelectDropDown from "./SelectDropdown";
// list item

const Filters = () => {
  return (
    <>
      <Container
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Compensation</p>
        <Container>
          <FormControl fullWidth sx={{ m: 1, width: "70%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              placeholder=""
              // value={values.amount}
              // onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </Container>
        {/* slider */}
        <Box width={300} sx={{ marginLeft: "1.5rem" }}>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Box>
      </Container>
      {/* compensation closed */}

      <Container
        className="mt-2"
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Skills</p>

        <FormControl fullWidth sx={{ marginLeft: "1.3rem", width: "70%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Skills</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange("amount")}
            startAdornment={
              <InputAdornment position="start">Skills</InputAdornment>
            }
            label="skills"
          />
        </FormControl>
        <Popular skills="" />
      </Container>
      {/* area of interest closed */}

      <Container
        className="mt-2"
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Work Sector</p>

        <FormControl fullWidth sx={{ marginLeft: "1.3rem", width: "70%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Work</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange("amount")}
            startAdornment={
              <InputAdornment position="start">Work sector</InputAdornment>
            }
            label="skills"
          />
        </FormControl>
        <Popular work="" />
      </Container>

      {/* job details opened */}
      <Container
        className="mt-2"
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Job Details</p>

        <Container>
          <Row>
            <Col md={6}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Full Time" />
                <FormControlLabel control={<Checkbox />} label="Contract" />
                <FormControlLabel control={<Checkbox />} label="Part Time" />
                <FormControlLabel control={<Checkbox />} label="Internship" />
              </FormGroup>
            </Col>

            {/* experience and work from home section! */}
            <Col md={6}>
              <Container>
                <Typography id="input-slider" gutterBottom>
                  Required Experience
                </Typography>
                <Box width={300} className="">
                  <Box sx={{ width: 300 }}>
                    <Slider
                      aria-label="input-slider"
                      defaultValue={0}
                      // getAriaValueText={valuetext}
                      valueLabelDisplay="auto"
                      step={1}
                      marks
                      min={0}
                      max={10}
                    />
                  </Box>
                </Box>
              </Container>
              <Container className="mt-3" style={{padding:"0 0 0 1rem"}}>
                <FormGroup>
                  <FormControlLabel
                    label="Work From Home"
                    control={<Switch />}
                  />
                </FormGroup>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* location opened */}

      <Container
        className="mt-2"
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Location</p>

        <FormControl fullWidth sx={{ marginLeft: "1.3rem", width: "70%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">location</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange("amount")}
            startAdornment={
              <InputAdornment position="start">location</InputAdornment>
            }
            label="location"
          />
        </FormControl>
        <Popular location="airoli" />
      </Container>
      {/* education opened */}
      <Container
        className="mt-2"
        style={{
          borderRadius: "1rem",
          border: "1px solid #D9D3D2",
          paddingTop: "0.4rem",
        }}
      >
        <p className="fw-bold fs-5">Education</p>

        <FormControl fullWidth sx={{ marginLeft: "1.3rem", width: "70%" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Education</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            // onChange={handleChange("amount")}
            startAdornment={
              <InputAdornment position="start">Education</InputAdornment>
            }
            label="Education"
          />
        </FormControl>
        <SelectDropDown />
      </Container>
      {/* education closed */}
    </>
  );
};

export default Filters;
