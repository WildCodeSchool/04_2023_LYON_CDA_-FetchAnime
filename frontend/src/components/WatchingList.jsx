import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Header from "./Header";

function WatchingList() {
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
        <Typography component="h2">Watching</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 4, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        <Grid container item xs={4}>
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
        </Grid>
      </Grid>
    </>
  );
}

export default WatchingList;
