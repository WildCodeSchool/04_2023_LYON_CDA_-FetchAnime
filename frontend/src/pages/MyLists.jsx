import { Box } from "@mui/system";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
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
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    Navigate("/description");
  };

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
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          handleClick={handleClick}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
        />
      )}
    </Box>
  );
}

export default MyLists;
