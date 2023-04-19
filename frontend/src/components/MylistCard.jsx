import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MylistCard({ title }) {
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
          justifyContent: "space-around",
          width: "100%",
          height: "160px",
          marginTop: 2,
        }}
      >
        <img
          style={{
            borderRadius: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-l0R0GFHplDKW.jpg"
          alt=""
        />
        <img
          style={{
            borderRadius: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158871-FmWU8dacXDiA.jpg"
          alt=""
        />
        <img
          style={{
            borderRadius: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153687-xB2x4toOz5MB.jpg"
          alt=""
        />
      </Box>
    </Box>
  );
}

export default MylistCard;