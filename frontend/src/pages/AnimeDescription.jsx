import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  CardMedia,
  CircularProgress,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import CardItem from "@components/CardItem";
import Haeder from "../components/Haeder";

function AnimeDescription() {
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(localStorage.getItem("animeId"));
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
  };
  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => response.data)
      .then((data) => setAnime(data));
  }, [id]);

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
                  height: "180px",
                  width: "100%",
                  objectFit: "cover",
                  margin: "auto",
                },
                [theme.breakpoints.up("md")]: {
                  height: "150px",
                  width: "90%",
                  objectFit: "cover",
                  margin: "auto",
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
        <Typography variant="h5" mb={2}>
          Recommandations
        </Typography>

        <SwipeableViews
          enableMouseEvents
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          {anime.recommendations
            ? anime.recommendations.map((item) => (
                <Step key={item.id} className="stepItem" sx={{ width: "100%" }}>
                  <StepLabel>
                    <CardItem item={item} handleClick={handleClick} />
                  </StepLabel>
                </Step>
              ))
            : null}
        </SwipeableViews>
      </Box>
    </>
  );
}

export default AnimeDescription;
