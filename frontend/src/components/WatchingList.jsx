import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
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
        <Typography component="h2">Watching</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Grid container item xs={4}>
          {myWatchingList.map((item) => (
            <CardItem item={item} handleClick={handleClick} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default WatchingList;
