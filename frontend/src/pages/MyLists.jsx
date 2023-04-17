import MylistCard from "@components/MylistCard";
import { Box } from "@mui/system";
import React from "react";
import Haeder from "../components/Header";

function MyLists() {
  return (
    <>
      <Haeder />
      <Box sx={{ marginTop: "30%" }}>
        <MylistCard title="Watching" />
        <MylistCard title="Planning" />
        <MylistCard title="Completed" />
      </Box>
    </>
  );
}

export default MyLists;
