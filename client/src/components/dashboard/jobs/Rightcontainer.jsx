import React, { useState } from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import Savedjobs from "./Savedjobs";
import Appliedjobs from "./Appliedjobs";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Badge, Tab, Box } from "@mui/material";
import { grey} from '@mui/material/colors';

const Rightcontainer = () => {
const dark = grey[900];
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="container">
        <Row>
          <Col sm={12} className="p-2">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    centered
                  >
                    
                      <Tab label="Saved Jobs" value="1" /><span><Badge badgeContent={45} color="success"></Badge></span>
                    <Tab label="Applied Jobs" value="2" /><span><Badge badgeContent={105} color="success"></Badge></span>
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Savedjobs />
                </TabPanel>
                <TabPanel value="2">
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
