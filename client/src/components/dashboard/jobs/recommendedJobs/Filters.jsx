import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const Filters = () => {
  return (
    <>
      <Container>
        Compensation{" "}
        <Container>
          <FormControl fullWidth sx={{ m: 1,width:"70%" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              // value={values.amount}
              // onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
          </Container>
          {/* first input closed */}
        </Container>
        <Container>
        <Box width={300}>
          <Slider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Box>
      </Container>

      <Container>
        Areas of Interest
        <p>Skills</p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      </Container>
    </>
  );
};

export default Filters;
