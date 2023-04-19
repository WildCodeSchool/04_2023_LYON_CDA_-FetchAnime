import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Haeder from "./Header";

function WatchingList() {
  return (
    <>
      <Haeder />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 3,
            marginX: 1,
          }}
        >
          <Typography component="h2">Watching</Typography>
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
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-l0R0GFHplDKW.jpg"
            alt=""
          />
        </Box>
      </Box>
    </>
  );
}

export default WatchingList;
