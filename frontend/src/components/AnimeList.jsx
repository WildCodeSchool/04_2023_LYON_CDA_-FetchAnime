/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Button, Box, CircularProgress, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import CardItem from "./CardItem";

function AnimeList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/${
          search === "" ? "attack" : search
        }?page=${page}`
      )
      .then((response) => response.data)
      .then((data) => setList(data));
  }, [search, page]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
  };

  return (
    <>
      <Input value={search} onChange={handleChange} sx={{ marginTop: 10 }} />
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
              <NavLink to="description">
                <CardItem item={item} handleClick={handleClick} />
              </NavLink>
            </Grid>
          ))
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        )}
        <Box sx={{ mb: 5, textAlign: "center" }}>
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
    </>
  );
}

export default AnimeList;