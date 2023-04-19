import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "../components/Header";
import Description from "../components/Description";
import DescriptionTabs from "../components/DescriptionTabs";
import Recommendations from "../components/Recommendations";

function AnimeDescription() {
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(localStorage.getItem("animeId"));

  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => response.data)
      .then((data) => setAnime(data));
  }, [id]);

  return (
    <>
      <Header />
      <Description anime={anime} />
      <DescriptionTabs />

      <Typography variant="h5" mb={2}>
        Recommandations
      </Typography>

      <Recommendations anime={anime} setId={setId} />
    </>
  );
}

export default AnimeDescription;
