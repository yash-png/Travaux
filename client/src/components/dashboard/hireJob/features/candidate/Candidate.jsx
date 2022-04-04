import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CandidateCard from "./CandidateCard";
import Badge from "@mui/material/Badge";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="In process" value="1" />
            <span>
              <Badge badgeContent={45} color="success"></Badge>
            </span>
            <Tab label="Shortlisted" value="2" />
            <span>
              <Badge badgeContent={45} color="success"></Badge>
            </span>
            <Tab label="Hired" value="3" />
            <span>
              <Badge badgeContent={45} color="success"></Badge>
            </span>
          </TabList>
        </Box>
        <TabPanel value="1">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </TabPanel>
        <TabPanel value="2"></TabPanel>
        <TabPanel value="3"></TabPanel>
      </TabContext>
    </Box>
  );
}
