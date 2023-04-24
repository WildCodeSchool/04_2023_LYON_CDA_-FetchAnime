import { Box } from "@mui/system";
import React, { useState } from "react";
import MylistCard from "../components/MylistCard";
import Header from "../components/Header";

function MyLists() {
  const [myLists] = useState(JSON.parse(localStorage.getItem("watchingList")));
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
        <MylistCard title="Watching" anime={myLists} />
      </Box>
    </>
  );
}

export default MyLists;
