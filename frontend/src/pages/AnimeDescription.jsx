import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CircularProgress } from "@mui/material";
import Header from "../components/Header";
import Description from "../components/Description";
import DescriptionTabs from "../components/DescriptionTabs";
import Recommendations from "../components/Recommendations";
import AnimeList from "../components/AnimeList";

function AnimeDescription({ search, page, setPage }) {
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
      {search === "" &&
        (anime.title ? (
          <>
            <Description anime={anime} />
            <DescriptionTabs />
            <Recommendations anime={anime} setId={setId} />
          </>
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        ))}

      {search !== "" && (
        <AnimeList search={search} page={page} setPage={setPage} />
      )}
    </>
  );
}

export default AnimeDescription;
