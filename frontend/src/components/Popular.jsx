/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, CircularProgress, Grid, Typography } from "@mui/material";
import CardItem from "./CardItem";
import AnimeList from "./AnimeList";

function Popular({
  setId,
  popularList,
  popularPage,
  setPopularPage,
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
}) {
  const navigate = useNavigate();
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  return (
    <Box>
      {search === "" ? (
        <>
          <Typography variant="h3" textAlign="center" mt={2}>
            Popular
          </Typography>
          <Grid
            container
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                p: 1,
              },
              [theme.breakpoints.up("md")]: {
                p: 5,
              },
            })}
          >
            {popularList.results ? (
              popularList.results.map((item) => (
                <Grid
                  container
                  item
                  md={2}
                  xs={6}
                  height="100%"
                  key={item.id}
                  sx={(theme) => ({
                    [theme.breakpoints.up("md")]: {
                      justifyContent: "center",
                    },
                  })}
                >
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
              {popularPage !== 1 ? (
                <Button
                  size="md"
                  variant="solid"
                  color="secondary"
                  onClick={() => setPopularPage(popularPage - 1)}
                >
                  Previous
                </Button>
              ) : null}
              {popularList.hasNextPage === true ? (
                <Button
                  size="md"
                  variant="solid"
                  color="secondary"
                  onClick={() => setPopularPage(popularPage + 1)}
                >
                  Next
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Grid>
        </>
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
          setId={setId}
        />
      )}
    </Box>
  );
}

export default Popular;
