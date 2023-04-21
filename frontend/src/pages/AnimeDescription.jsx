import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../components/Header";
import Description from "../components/Description";
import DescriptionTabs from "../components/DescriptionTabs";
import Recommendations from "../components/Recommendations";
import AnimeList from "../components/AnimeList";

function AnimeDescription({ search, page, setPage, setSearch }) {
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(localStorage.getItem("animeId"));

  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => response.data)
      .then((data) => setAnime(data));
  }, [id]);

  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    setSearch("");
    setPage(1);
  };

  return (
    <Box>
      <Header />
      {anime.id === id ? (
        <>
          {search === "" && anime.title ? (
            <>
              <Description anime={anime} />
              <DescriptionTabs anime={anime} />
              <Recommendations anime={anime} setId={setId} />
            </>
          ) : null}
          {search !== "" && (
            <AnimeList
              handleClick={handleClick}
              search={search}
              page={page}
              setPage={setPage}
            />
          )}
        </>
      ) : (
        <div>
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        </div>
      )}
    </Box>
  );
}

export default AnimeDescription;
