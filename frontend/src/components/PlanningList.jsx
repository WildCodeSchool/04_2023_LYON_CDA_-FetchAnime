/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import CardItem from "./CardItem";

function PlanningList({ setId }) {
  const [myPlanningList, setMyPlanningList] = useState(
    JSON.parse(localStorage.getItem("planningList"))
  );

  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  const [animeList, setAnimeList] = useState(
    JSON.parse(localStorage.getItem("planningList")) || []
  );

  const handleDelete = (animeId) => {
    const updatedList = animeList.filter((anime) => anime.id !== animeId);
    localStorage.setItem("planningList", JSON.stringify([...updatedList]));
    setAnimeList(JSON.parse(localStorage.getItem("planningList")));
    setMyPlanningList(JSON.parse(localStorage.getItem("planningList")));
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
        Planning
      </Typography>
      <Box
        container
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginLeft: "1rem",
            marginRight: "2rem",
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "5%",
          },
        })}
      >
        {myPlanningList ? (
          myPlanningList.map((item, index) => (
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
                },
              })}
            >
              <CardItem item={item} handleClick={handleClick} />
              <ClearIcon onClick={() => handleDelete(item.id)} />
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

export default PlanningList;
