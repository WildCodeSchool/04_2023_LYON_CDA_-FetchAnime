/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, CircularProgress, Grid } from "@mui/material";
import CardItem from "./CardItem";

function AnimeList({ search, page, setPage, handleClick }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/${
          search === "" ? "" : search
        }?page=${page}`
      )
      .then((response) => response.data)
      .then((data) => setList(data));
  }, [search, page]);

  return (
    <Grid
      container
      spacing={2}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          p: 1,
        },
        [theme.breakpoints.up("md")]: {
          p: 15,
        },
      })}
    >
      {list.results ? (
        list.results.map((item) => (
          <Grid container item md={2} xs={6} height="100%" key={item.id}>
            <CardItem item={item} handleClick={handleClick} />
          </Grid>
        ))
      ) : (
        <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
      )}
      <Box
        component="div"
        sx={{
          textAlign: "center",
          mb: 2,
          width: "100%",
          position: "relative",
          bottom: "0",
        }}
      >
        {page !== 1 ? (
          <Button
            size="md"
            variant="solid"
            color="secondary"
            onClick={() => setPage(page - 1)}
          >
            Precedent
          </Button>
        ) : null}
        {list.hasNextPage === true ? (
          <Button
            size="md"
            variant="solid"
            color="secondary"
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
}

export default AnimeList;
