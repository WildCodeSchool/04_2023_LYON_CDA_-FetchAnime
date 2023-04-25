import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import CardItem from "./CardItem";

function PlanningList() {
  const [myPlanningList] = useState(
    JSON.parse(localStorage.getItem("planningList"))
  );

  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    navigate("/description");
  };

  return (
    <>
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
        <Typography component="h2">Planning</Typography>
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
        {myPlanningList.map((item) => (
          <Grid container item md={2} xs={6} height="100%" key={item.id}>
            <CardItem item={item} handleClick={handleClick} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default PlanningList;
