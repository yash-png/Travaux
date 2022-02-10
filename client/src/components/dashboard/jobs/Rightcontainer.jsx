import React, { useState } from "react";
import { Row, Col} from "react-bootstrap";
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
    <div>
      <div className="container" style={{backgroundColor:"#f6f6f6"}}>
        <Row>
          <Col sm={12} className="">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box
                  sx={{
                    Bottom: 1,
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    bgcolor: "background.paper",
                    Color: "divider",
                  }}
                >
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    // className=""
                    sx={{}}
                    centered
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
                <TabPanel value="1" >
                  <Savedjobs />
                </TabPanel>
                <TabPanel value="2" >
                  <Appliedjobs />
                </TabPanel>
              </TabContext>
            </Box>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Rightcontainer;
