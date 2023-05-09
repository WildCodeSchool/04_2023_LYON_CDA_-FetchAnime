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
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    maxWidth: "50%",
                    display: "flex",
                    mt: 0.5,
                    mb: 4,
                    justifyContent: "space-around",
                  },
                  [theme.breakpoints.up("md")]: {
                    maxWidth: "17%",
                    display: "flex",
                    mt: 3,
                    mb: 6,
                    ml: 11,
                    justifyContent: "space-around",
                  },
                })}
              >
                {anime.genres?.slice(0, 3).map((genre) => (
                  <Typography
                    variant="h5"
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        backgroundColor: "rgb(216,0,0)",
                        paddingX: 1,
                        paddingY: 0.2,
                        borderRadius: 1,
                        color: "#FDFBE2",
                        fontSize: ".7rem",
                      },
                      [theme.breakpoints.up("md")]: {
                        backgroundColor: "rgb(216,0,0)",
                        paddingX: 1,
                        paddingY: 0.2,
                        borderRadius: 1,
                        color: "#FDFBE2",
                        fontSize: "1.2rem",
                      },
                    })}
                  >
                    {genre}
                  </Typography>
                ))}
              </Box>
              <AnimeTitle anime={anime} />
              <Typography
                variant="h5"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    ml: 1.5,
                    mb: 0,
                  },
                  [theme.breakpoints.up("md")]: {
                    ml: 11,
                    fontSize: "2.5rem",
                    my: 4,
                  },
                })}
              >
                Episodes
              </Typography>
              <Episodes
                anime={anime}
                setEpId={setEpId}
                epId={epId}
                setEpTimeoutId={setEpTimeoutId}
                cancelEpTimeout={cancelEpTimeout}
              />
              <Typography
                variant="h5"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    ml: 1.5,
                  },
                  [theme.breakpoints.up("md")]: {
                    ml: 11,
                    fontSize: "2.5rem",
                    mt: 8,
                  },
                })}
              >
                Description
              </Typography>
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
