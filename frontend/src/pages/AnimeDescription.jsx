import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
// eslint-disable-next-line import/no-named-as-default
import AnimeList from "../components/AnimeList";
// eslint-disable-next-line import/no-named-as-default
import Description from "../components/Description";
import DescriptionTabs from "../components/DescriptionTabs";
import Recommendations from "../components/Recommendations";

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
  handleClick,
}) {
  return (
    <Box>
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
              genres={genres}
              setGenres={setGenres}
              date={date}
              setDate={setDate}
            />
          )}
        </>
      ) : (
        <div>
          <CircularProgress
            sx={{ position: "absolute", top: "50%", left: "50%" }}
          />
        </div>
      )}
    </Box>
  );
}

export default AnimeDescription;
