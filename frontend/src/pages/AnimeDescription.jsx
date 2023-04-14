import React, { useEffect, useState } from "react";
import axios from "axios";

function AnimeDescription() {
  const [anime, setAnime] = useState([]);
  const [id] = useState(localStorage.getItem("animeId"));
  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => response.data)
      .then((data) => setAnime(data));
  }, []);
  return <div>{anime.id}</div>;
}

export default AnimeDescription;
