import { Box } from "@mui/system";
import React, { useState } from "react";
import MylistCard from "../components/MylistCard";
import Header from "../components/Header";

function MyLists() {
  const [myWatchingList] = useState(
    JSON.parse(localStorage.getItem("watchingList"))
  );

  const [myPlanningList] = useState(
    JSON.parse(localStorage.getItem("planningList"))
  );

  const [myCompletedList] = useState(
    JSON.parse(localStorage.getItem("completedList"))
  );

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
        <MylistCard title="Watching" anime={myWatchingList} />
        <MylistCard title="Planning" anime={myPlanningList} />
        <MylistCard title="Completed" anime={myCompletedList} />
      </Box>
    </>
  );
}

export default MyLists;
