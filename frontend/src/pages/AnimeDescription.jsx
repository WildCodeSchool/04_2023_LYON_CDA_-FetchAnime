import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  CardMedia,
  CircularProgress,
  ListItemText,
  Rating,
  Step,
  StepLabel,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import CardItem from "@components/CardItem";
import Charachters from "@components/Charachters";
import Header from "@components/Header";

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

  const [selectedTab, setSelectedTab] = useState("characters");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Header />
      <Box component="div" mt={11} backgroundColor={anime.color}>
        {anime.title ? (
          <Box component="div">
            <CardMedia
              component="img"
              image={anime.cover}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  height: "230px",
                  width: "100%",
                  objectFit: "cover",
                  margin: "auto",
                },
                [theme.breakpoints.up("md")]: {
                  height: "350px",
                  width: "100%",
                  objectFit: "cover",
                  margin: "auto",
                },
              })}
            />
            <Typography
              variant="h4"
              textAlign="center"
              m={2}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  fontSize: "1.6rem",
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "3.5rem",
                },
              })}
            >
              {anime.title.english ? anime.title.english : anime.title.romaji}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              m={2}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  fontSize: "0.9rem",
                },
                [theme.breakpoints.up("md")]: {
                  fontSize: "1rem",
                },
              })}
            >
              {anime.title.native !== anime.title.romaji
                ? anime.title.native
                : ""}
            </Typography>

            <Box
              width="100%"
              component="div"
              display="flex"
              flexDirection="row-reverse"
              justifyContent="space-between"
              marginTop="10%"
            >
              <Box margin="3%">
                <CardMedia
                  component="img"
                  image={anime.image}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      height: "157px",
                      width: "115px",
                      objectFit: "fill",
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
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  sx={{ margin: "7.5%" }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    height: 30,
                    padding: 2,
                    margin: "4%",
                    borderRadius: 2,
                    fontSize: "0.6rem",
                  }}
                >
                  + Add to list
                </Button>
              </Box>
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                  [theme.breakpoints.up("md")]: {
                    width: "75%",
                  },
                })}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  marginTop="5%"
                  marginLeft="5%"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      fontSize: "0.9rem",
                    },
                    [theme.breakpoints.up("md")]: {
                      fontSize: "1.7rem",
                      width: "90%",
                      margin: 3.8,
                    },
                  })}
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      const { description } = anime;
                      if (description.length > 150) {
                        return ` ${description.slice(0, 150)}  ...`;
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
        <Box margin="3%">
          <ListItemText
            primary={`${anime.studios}`}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                backgroundColor: "white",
                opacity: 0.8,
                width: "50%",
                textAlign: "center",
                padding: "3px",
                borderRadius: "5px",
                fontSize: 8,
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "0.rem",
              },
            })}
          />
        </Box>
        <Box>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Charachters" value="characters" />
            <Tab label="Watch" value="watch" />
            <Tab label="Episodes" value="episodes" />
            <Tab label="Staff" value="staff" />
          </Tabs>
          {selectedTab === "characters" && <Charachters />}
        </Box>
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
