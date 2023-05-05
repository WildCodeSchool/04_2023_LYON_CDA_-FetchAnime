/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import CardItem from "./CardItem";

function WatchingList({ setId }) {
  const [myWatchingList, setMyWatchingList] = useState(
    JSON.parse(localStorage.getItem("watchingList"))
  );
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  const [animeList, setAnimeList] = useState(
    JSON.parse(localStorage.getItem("watchingList")) || []
  );

  const handleDelete = (animeId) => {
    const updatedList = animeList.filter((anime) => anime.id !== animeId);
    localStorage.setItem("watchingList", JSON.stringify([...updatedList]));
    setAnimeList(JSON.parse(localStorage.getItem("watchingList")));
    setMyWatchingList(JSON.parse(localStorage.getItem("watchingList")));
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            margin: 2,
            textAlign: "center",
          },
          [theme.breakpoints.up("md")]: {
            margin: 10,
            textAlign: "center",
          },
        })}
      >
        Watching
      </Typography>
      <Box
        container
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "5%",
          },
        })}
      >
        {myWatchingList ? (
          myWatchingList.map((item, index) => (
            <Box
              key={index}
              fluid
              item
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  width: "45%",
                },
                [theme.breakpoints.up("md")]: {
                  width: "16.66%",
                  justifyContent: "center",
                  margin: "auto",
                },
              })}
            >
              <CardItem item={item} handleClick={handleClick} />

              <DeleteForeverRoundedIcon onClick={() => handleDelete(item.id)} />
            </Box>
          ))
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        )}
      </Box>
    </>
  );
}

export default WatchingList;
