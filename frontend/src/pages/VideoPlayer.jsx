/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Recommendations from "@components/Recommendations";
import Episodes from "@components/Episodes";

function VideoPlayer({ anime }) {
  const [episode, setEpisode] = useState([]);
  const [epId, setEpId] = useState(localStorage.getItem("episodeId"));
  const [epTimeoutId, setEpTimeoutId] = useState(null);

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
      {episode.sources && episode.sources[3] ? (
        <>
          <ReactPlayer
            url={episode.sources[3].url}
            controls
            playing
            width="100%"
            height="100%"
          />
          <Typography variant="h5" mb={2} sx={{ ml: 1.5 }}>
            Episodes
          </Typography>
          <Episodes
            anime={anime}
            setEpId={setEpId}
            epId={epId}
            epTimeoutId={epTimeoutId}
            setEpTimeoutId={setEpTimeoutId}
          />

          <Recommendations anime={anime} />
        </>
      ) : null}
    </Box>
  );
}

export default VideoPlayer;
