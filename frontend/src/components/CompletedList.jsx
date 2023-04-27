/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
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
      <Typography variant="h3" sx={{ textAlign: "center", margin: 2 }}>
        Completed
      </Typography>
      <Box container sx={{ display: "flex", flexWrap: "wrap" }}>
        {myCompletedList ? (
          myCompletedList.map((item, index) => (
            <Box key={index} fluid item sx={{ width: "45%", margin: "auto" }}>
              <CardItem item={item} handleClick={handleClick} />
            </Box>
          ))
        ) : (
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
        )}
      </Box>
    </>
  );
}

export default CompletedList;
