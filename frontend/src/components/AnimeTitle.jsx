import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function AnimeTitle({ anime }) {
  return (
    <Box>
      {anime.title ? (
        <>
          <Typography
            variant="h4"
            textAlign="center"
            m={2}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
              },
            })}
          >
            {anime.title.english ? anime.title.english : anime.title.romaji}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            m={2}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "0.9rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "1rem",
              },
            })}
          >
            {anime.title.native !== anime.title.romaji
              ? anime.title.native
              : ""}
          </Typography>
          <Typography
            component="h5"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 12,
                textAlign: "center",
                padding: 1,
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "0.rem",
                textAlign: "center",
              },
            })}
          >
            {anime.releaseDate}
          </Typography>
        </>
      ) : null}
    </Box>
  );
}

export default AnimeTitle;
