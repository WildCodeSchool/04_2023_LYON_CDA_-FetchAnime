import { Typography } from "@mui/material";
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

      {myCompletedList.map((item) => (
        <CardItem item={item} handleClick={handleClick} />
      ))}
    </>
  );
}

export default CompletedList;
