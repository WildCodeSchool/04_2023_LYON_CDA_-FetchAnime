/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, CircularProgress, Grid, Typography } from "@mui/material";
import CardItem from "./CardItem";

function Popular() {
  const [popularList, setPopularList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/popular?page=${page}&perPage=12`
      )
      .then((response) => setPopularList(response.data));
  }, [page]);

  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
  };

  return (
    <>
      <Typography variant="h3" textAlign="center" mt={2}>
        Popular
      </Typography>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            p: 1,
          },
          [theme.breakpoints.up("md")]: {
            p: 5,
            marginLeft: "1%",
          },
        })}
      >
        {popularList.results ? (
          popularList.results.map((item) => (
            <Grid container item md={2} xs={6} height="100%" key={item.id}>
              <CardItem item={item} handleClick={handleClick} />
            </Grid>
          ))
        ) : (
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
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
              Previous
            </Button>
          ) : null}
          {popularList.hasNextPage === true ? (
            <Button
              size="md"
              variant="solid"
              color="secondary"
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </>
  );
}

export default Popular;
