import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

function MylistCard({ title }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        <Typography component="h2">{title}</Typography>
        <NavLink to="/watchinglist">
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
          justifyContent: "space-between",
          width: "100%",
          height: "160px",
          marginTop: 2,
        }}
      >
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-l0R0GFHplDKW.jpg"
          alt=""
        />
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-l0R0GFHplDKW.jpg"
          alt=""
        />
        <img
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-l0R0GFHplDKW.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default MylistCard;
