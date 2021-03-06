import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Savedjobs from "./Savedjobs";
import Appliedjobs from "./Appliedjobs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Badge, Tab, Box } from "@mui/material";

const Rightcontainer = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className="p-0">
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          border: "1px solid #D9D3D2",
          borderRadius: "1rem",
          maxheight: "85vh",
         boxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
        WebkitBoxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
        MozBoxShadow: "12px 10px 5px -6px rgba(0,0,0,0.4)",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              Bottom: 1,
              position: "sticky",
              top: 0,
              zIndex: 1,
              bgcolor: "background.paper",
              Color: "divider",
              borderRadius: "1rem 1rem 0 0",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
              sx={{}}
            >
              <Tab label="Saved Jobs" value="1" />

              <span>
                <Badge badgeContent={45} color="success"></Badge>
              </span>
              <Tab label="Applied Jobs" value="2" />
              <span>
                <Badge badgeContent={105} color="success"></Badge>
              </span>
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0" }} value="1">
            <Savedjobs />
          </TabPanel>
          <TabPanel sx={{ padding: "0" }} value="2">
            <Appliedjobs />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default Rightcontainer;
