import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { CardMedia, Typography } from "@mui/material";
import CustomPagination from "./Pagination";

function Characters({ anime }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const numPages = Math.ceil(anime.characters.length / itemsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCharacters = anime.characters.slice(startIndex, endIndex);

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
        {displayedCharacters.map((item) => (
          <Grid item xs={3} sm={4} md={1.5} key={item.id}>
            <CardMedia
              component="img"
              image={item.image}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  maxWidth: "100%",
                  height: "120px",
                  borderRadius: 1,
                  objectFit: "cover",
                },
                [theme.breakpoints.up("md")]: {
                  maxWidth: "80%",
                  height: "240px",
                  borderRadius: 2,
                  margin: "auto",
                  objectFit: "cover",
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
              {item.name.userPreferred}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <CustomPagination
        count={numPages}
        page={currentPage}
        onChange={handleChange}
        sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
      />
    </>
  );
}

export default Characters;
