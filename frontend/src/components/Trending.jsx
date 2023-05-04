/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, CircularProgress, Grid, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";

function Trending({ setId }) {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/trending?page=${page}&perPage=12`
      )
      .then((response) => setList(response.data));
  }, [page]);

  return (
    <>
      <Typography variant="h3" textAlign="center" mt={2}>
        Trending
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
        {list.results ? (
          list.results.map((item) => (
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
          {list.hasNextPage === true ? (
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

export default Trending;
