/* eslint-disable no-nested-ternary */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
// eslint-disable-next-line import/no-named-as-default
import AnimeTitle from "../components/AnimeTitle";
import Cover from "../components/Cover";
import AnimeList from "../components/AnimeList";
// eslint-disable-next-line import/no-named-as-default
import Description from "../components/Description";
import DescriptionTabs from "../components/DescriptionTabs";
import Recommendations from "../components/Recommendations";
import Error500 from "./Error500";

function AnimeDescription({
  search,
  page,
  setPage,
  genres,
  setGenres,
  date,
  setDate,
  anime,
  id,
  setId,
  setSearch,
  error500,
}) {
  return (
    <Box>
      {anime.id === id ? (
        <>
          {search === "" && anime.title ? (
            <>
              <Cover anime={anime} />
              <AnimeTitle anime={anime} />
              <Description anime={anime} />
              <DescriptionTabs anime={anime} />
              <Recommendations anime={anime} setId={setId} />
            </>
          ) : null}
          {search !== "" && (
            <AnimeList
              setId={setId}
              search={search}
              page={page}
              setPage={setPage}
              genres={genres}
              setGenres={setGenres}
              date={date}
              setDate={setDate}
              setSearch={setSearch}
            />
          )}
        </>
      ) : error500 !== true ? (
        <div>
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
        </div>
      ) : (
        <Error500 />
      )}
    </Box>
  );
}

export default AnimeDescription;
