/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { CardMedia, Typography } from "@mui/material";
import CustomPagination from "./Pagination";

function Casting({ anime }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 16;
  const numPages = Math.ceil(anime.characters.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const visibleItems = anime.characters?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            margin: 1,
          },
          [theme.breakpoints.up("md")]: {
            margin: 5,
            mx: 0,
          },
        })}
      >
        {(theme) => ({
          [theme.breakpoints.down("md")]: {
            margin: 1,
          },
          [theme.breakpoints.up("md")]: {
            margin: 5,
            mx: 0,
          },
        })}
        {visibleItems?.map((item) =>
          item.voiceActors[0] !== undefined &&
          item.voiceActors[0].language === "Japanese" ? (
            <Grid item xs={3} sm={4} md={1.5} key={item.name.id}>
              <CardMedia
                component="img"
                image={item.voiceActors[0].image}
                alt={item.voiceActors[0].name.full}
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "100%",
                    height: "120px",
                    borderRadius: 1,
                    objectFit: "fit",
                  },
                  [theme.breakpoints.up("md")]: {
                    maxWidth: "80%",
                    height: "240px",
                    borderRadius: 2,
                    margin: "auto",
                    objectFit: "fill",
                  },
                })}
              />
              <Typography
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    textAlign: "left",
                    fontSize: 14,
                  },
                  [theme.breakpoints.up("md")]: {
                    maxWidth: "60%",
                    margin: "auto",
                    textAlign: "left",
                    my: 1,
                    pl: 0.2,
                  },
                })}
              >
                {item.voiceActors[0].name.full}
              </Typography>
            </Grid>
          ) : null
        )}
      </Grid>
      {numPages > 1 && (
        <CustomPagination
          count={numPages}
          page={page}
          onChange={handleChangePage}
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        />
      )}
    </>
  );
}

export default Casting;
