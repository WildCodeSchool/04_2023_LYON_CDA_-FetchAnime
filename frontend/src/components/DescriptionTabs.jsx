/* eslint-disable react/prop-types */
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Casting from "./Casting";

function DescriptionTabs({ anime }) {
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
        textColor="#C90D56"
      >
        <Tab label="Characters" value="characters" />
        <Tab label="Watch" value="watch" />
        <Tab label="Episodes" value="episodes" />
        <Tab label="Casting" value="casting" />
      </Tabs>
      {selectedTab === "characters" && <Characters anime={anime} />}
      {selectedTab === "episodes" && <Episodes anime={anime} />}
      {selectedTab === "casting" && <Casting anime={anime} />}
    </Box>
  );
}

export default DescriptionTabs;
