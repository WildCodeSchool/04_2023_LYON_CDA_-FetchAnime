/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import CardItem from "./CardItem";

function WatchingList() {
  const [myWatchingList] = useState(
    JSON.parse(localStorage.getItem("watchingList"))
  );
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    navigate("/description");
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
            marginX: "15%",
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
                  width: "25%",
                  justifyContent: "center",
                },
              })}
            >
              <CardItem item={item} handleClick={handleClick} />
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
