import { Box } from "@mui/system";
import React, { useState } from "react";
import MylistCard from "../components/MylistCard";

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
      <MylistCard
        title="Watching"
        anime={myWatchingList}
        seeAll="/watchinglist"
      />
      <MylistCard
        title="Planning"
        anime={myPlanningList}
        seeAll="/planninglist"
      />
      <MylistCard
        title="Completed"
        anime={myCompletedList}
        seeAll="/completedlist"
      />
    </Box>
  );
}

export default MyLists;
