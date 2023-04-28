import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MylistCard({ title, anime, seeAll }) {
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.up("md")]: {
          paddingX: 75,
        },
      })}
    >
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
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            height: "160px",
            marginTop: 2,
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            justifyContent: "space-between",
            minWidth: "100%",
            minHeight: "260px",
            marginTop: 2,
          },
        })}
      >
        {anime
          ? anime.slice(0, 3).map((item) => (
              <CardMedia
                component="img"
                image={item.image}
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    height: "170px",
                    width: "122px",
                    borderRadius: 1,
                    objectFit: "fill",
                  },
                  [theme.breakpoints.up("md")]: {
                    height: "300px",
                    objectFit: "fill",
                    width: "210px",
                    borderRadius: "5px",
                  },
                })}
              />
            ))
          : "null"}
      </Box>
    </Box>
  );
}

export default MylistCard;
