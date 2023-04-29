import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPlayer from "react-player";

function VideoPlayer() {
  const [episode, setEpisode] = useState([]);
  const [epId, setEpId] = useState(localStorage.getItem("episodeId"));

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
        <ReactPlayer
          url={episode.sources[3].url}
          controls
          playing
          width="100%"
          height="100%"
        />
      ) : null}
    </Box>
  );
}

export default VideoPlayer;
