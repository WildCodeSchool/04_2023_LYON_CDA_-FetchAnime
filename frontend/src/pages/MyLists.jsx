import { Box } from "@mui/system";
import React from "react";
import MylistCard from "../components/MylistCard";
import Header from "../components/Header";

function MyLists() {
  return (
    <>
      <Header />
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            marginTop: "30%",
          },
          [theme.breakpoints.up("md")]: {
            marginTop: "7%",
          },
        })}
      >
        <MylistCard title="Watching" />
        <MylistCard title="Planning" />
        <MylistCard title="Completed" />
      </Box>
    </>
  );
}

export default MyLists;
