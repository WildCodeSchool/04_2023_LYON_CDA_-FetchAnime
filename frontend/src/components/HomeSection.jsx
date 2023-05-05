/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Button, Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CardItem from "./CardItem";

function HomeSection({
  trending,
  setTrendingPage,
  setId,
  trendingPage,
  slice,
  navigation,
  title,
}) {
  const navigate = useNavigate();
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };
  let { results } = trending;
  if (slice && results) {
    results = results.slice(0, 6);
  }
  const handleNav = () => {
    navigate(navigation);
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
          },
          [theme.breakpoints.up("md")]: {
            mt: 4,
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
          },
        })}
      >
        <Typography
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              fontSize: "2rem",
              p: 1,
            },
            [theme.breakpoints.up("md")]: {
              ml: 7,
              mb: 3,
            },
          })}
        >
          {title}
        </Typography>
        <Typography
          onClick={handleNav}
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              p: 1,
              fontSize: "1rem",
              justifyContent: "center",
              alignSelf: "center",
              color: "#454545",
            },
            [theme.breakpoints.up("md")]: {
              ml: 10,
              mb: 2,
              p: 1,
              fontSize: "1.2rem",
              justifyContent: "center",
              alignSelf: "center",
              color: "#454545",
              cursor: "pointer",
            },
          })}
        >
          See all
        </Typography>
      </Box>
      <Grid container>
        {results ? (
          results.map((item) => (
            <Grid
              container
              item
              md={2}
              xs={3.9}
              key={item.id}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {},
                [theme.breakpoints.up("md")]: { justifyContent: "center" },
              })}
            >
              <CardItem
                item={item}
                handleClick={handleClick}
                disposition="true"
              />
            </Grid>
          ))
        ) : (
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
        )}
        {trendingPage !== null ? (
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
            {trendingPage !== 1 ? (
              <Button
                size="md"
                variant="solid"
                color="secondary"
                onClick={() => setTrendingPage(trendingPage - 1)}
              >
                Previous
              </Button>
            ) : null}
            {trending.hasNextPage === true ? (
              <Button
                size="md"
                variant="solid"
                color="secondary"
                onClick={() => setTrendingPage(trendingPage + 1)}
              >
                Next
              </Button>
            ) : (
              ""
            )}
          </Box>
        ) : null}
      </Grid>
    </>
  );
}

export default HomeSection;
