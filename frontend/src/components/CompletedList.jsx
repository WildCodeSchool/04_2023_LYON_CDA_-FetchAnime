import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CardItem from "./CardItem";

function CompletedList() {
  const [myCompletedList] = useState(
    JSON.parse(localStorage.getItem("completedList"))
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
        <Typography component="h2">Completed</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            p: 1,
          },
          [theme.breakpoints.up("md")]: {
            p: 15,
          },
        })}
      >
        {myCompletedList.map((item) => (
          <Grid container item md={2} xs={6} height="100%" key={item.id}>
            <CardItem item={item} handleClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CompletedList;
