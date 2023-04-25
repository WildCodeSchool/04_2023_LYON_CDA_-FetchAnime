import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MylistCard({ title, anime, seeAll }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3,
          marginX: 1,
        }}
      >
        <Typography component="h2">{title}</Typography>
        <NavLink to={seeAll}>
          <Button
            sx={{
              color: "black",
            }}
          >
            See All
          </Button>
        </NavLink>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: "160px",
          marginTop: 2,
        }}
      >
        {anime
          ? anime.map((item) => (
              <img
                key={item.id}
                style={{
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                src={item.image}
                alt=""
              />
            ))
          : "null"}
      </Box>
    </Box>
  );
}

export default MylistCard;
