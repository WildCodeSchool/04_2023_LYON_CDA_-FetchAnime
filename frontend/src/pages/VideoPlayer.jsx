/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Recommendations from "@components/Recommendations";
import Episodes from "@components/Episodes";

import AnimeTitle from "@components/AnimeTitle";
import AnimeList from "@components/AnimeList";
import { useNavigate } from "react-router-dom";
import Description from "../components/Description";

function VideoPlayer({
  anime,
  search,
  page,
  setPage,
  genres,
  setGenres,
  date,
  setDate,
  setId,
  setSearch,
}) {
  const [epId, setEpId] = useState(localStorage.getItem("episodeId"));
  const [episode, setEpisode] = useState([]);
  const [epTimeoutId, setEpTimeoutId] = useState(null);
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    setDate("");
    setGenres("");
    setSearch("");
    setPage(1);
    navigate("/description");
  };

  const cancelEpTimeout = () => {
    if (epTimeoutId) {
      clearTimeout(epTimeoutId);
      setEpTimeoutId(null);
    }
  };
  useEffect(() => {
    const storedEpisodeId = localStorage.getItem("episodeId");
    if (storedEpisodeId !== epId) {
      setEpId(storedEpisodeId);
    }
  }, [epId]);

  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/watch/${epId}`)
      .then((response) => setEpisode(response.data));
  }, [epId]);

  return (
    <Box>
      {search !== "" ? (
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
      ) : (
        <Box>
          {episode.sources && episode.sources[3] ? (
            <>
              <Box component="div" className="player-wrapper">
                <ReactPlayer
                  className="player"
                  url={episode.sources[3].url}
                  controls
                  playing
                  width="100%"
                  height="100%"
                  style={{ marginTop: 8 }}
                />
              </Box>

              <AnimeTitle anime={anime} />
              <Typography variant="h5" mb={2} sx={{ ml: 1.5 }}>
                Episodes
              </Typography>
              <Episodes
                anime={anime}
                setEpId={setEpId}
                epId={epId}
                setEpTimeoutId={setEpTimeoutId}
                cancelEpTimeout={cancelEpTimeout}
              />
              <Description anime={anime} />
              <Recommendations anime={anime} setId={setId} />
            </>
          ) : null}
        </Box>
      )}
    </Box>
  );
}

export default VideoPlayer;
