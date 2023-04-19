import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Charachters from "./Charachters";

function DescriptionTabs() {
  const [selectedTab, setSelectedTab] = useState("characters");
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Charachters" value="characters" />
        <Tab label="Watch" value="watch" />
        <Tab label="Episodes" value="episodes" />
        <Tab label="Staff" value="staff" />
      </Tabs>
      {selectedTab === "characters" && <Charachters />}
    </Box>
  );
}

export default DescriptionTabs;
