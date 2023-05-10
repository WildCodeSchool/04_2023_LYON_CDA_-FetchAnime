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
        indicatorColor="primary"
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            marginX: 8,
          },
        })}
      >
        <Tab
          label="Characters"
          value="characters"
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: 130,
              textAlign: "left",
              pl: 0,
            },
          })}
        />
        <Tab
          label="Casting"
          value="casting"
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: 130,
              textAlign: "left",
              pl: 0,
            },
          })}
        />
        <Tab
          label="Episodes"
          value="episodes"
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              width: 130,
              textAlign: "left",
              pl: 0,
            },
          })}
        />
      </Tabs>
      {selectedTab === "characters" && <Characters anime={anime} />}
      {selectedTab === "episodes" && <Episodes anime={anime} />}
      {selectedTab === "casting" && <Casting anime={anime} />}
    </Box>
  );
}

export default DescriptionTabs;
