import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, CardMedia, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardItem from "@components/CardItem";
import { NavLink } from "react-router-dom";
import Haeder from "../components/Haeder";

function AnimeDescription() {
  const [anime, setAnime] = useState([]);
  const [id] = useState(localStorage.getItem("animeId"));
  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => response.data)
      .then((data) => setAnime(data));
  }, [id]);
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
  };
  return (
    <>
      <Haeder />
      <Box component="div" mt={11} backgroundColor={anime.color}>
        {anime.title ? (
          <Box component="div">
            <CardMedia
              component="img"
              image={anime.cover}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  height: "150px",
                  width: "100%",
                  objectFit: "fill",
                  margin: "auto",
                  borderRadius: "10px",
                },
                [theme.breakpoints.up("md")]: {
                  height: "150px",
                  width: "90%",
                  objectFit: "cover",
                  margin: "auto",
                  borderRadius: "10px",
                },
              })}
            />
            <Typography variant="h5" textAlign="center" m={2}>
              {anime.title.english ? anime.title.english : anime.title.romaji}
            </Typography>
            <Box
              width="100%"
              component="div"
              display="flex"
              flexDirection="row-reverse"
              justifyContent="space-between"
            >
              <Box margin="5%">
                <CardMedia
                  component="img"
                  image={anime.image}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      height: "127px",
                      width: "100px",
                      objectFit: "contain",
                      borderRadius: "5px",
                    },
                    [theme.breakpoints.up("md")]: {
                      height: "300px",
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "5px",
                    },
                  })}
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ height: 30, padding: 2, margin: "5%", borderRadius: 8 }}
                >
                  + Add
                </Button>
                <Typography
                  variant="body1"
                  color="initial"
                  marginLeft="5%"
                  fontSize="0.8rem"
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      const { description } = anime;
                      if (description.length > 150) {
                        return `${description.slice(0, 150)}...`;
                      }
                      return description;
                    })(),
                  }}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        )}
        {anime.recommendations
          ? anime.recommendations.map((item) => (
              <NavLink to="description">
                <CardItem item={item} handleClick={handleClick} />
              </NavLink>
            ))
          : null}
      </Box>
    </>
  );
}

export default AnimeDescription;
