import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import AnimeList from "../components/AnimeList";
import MylistCard from "../components/MylistCard";

function MyLists({
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
  setId,
}) {
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
    <Box>
      {search === "" ? (
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {},
            marginBottom: "10%",
            [theme.breakpoints.up("md")]: {
              marginTop: "5%",
            },
          })}
        >
          <Typography variant="h2" textAlign="center">
            My lists
          </Typography>
          {myWatchingList ? (
            <MylistCard
              title="Watching"
              anime={myWatchingList}
              seeAll="/watchinglist"
            />
          ) : null}

          {myPlanningList ? (
            <MylistCard
              title="Planning"
              anime={myPlanningList}
              seeAll="/planninglist"
            />
          ) : null}

          {myCompletedList ? (
            <MylistCard
              title="Completed"
              anime={myCompletedList}
              seeAll="/completedlist"
            />
          ) : null}
        </Box>
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
          setId={setId}
        />
      )}
    </Box>
  );
}

export default MyLists;
