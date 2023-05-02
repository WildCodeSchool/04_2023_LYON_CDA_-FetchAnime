/* eslint-disable react/prop-types */
import React from "react";

import { Typography } from "@mui/material";

import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CardItem from "./CardItem";

function Recommendations({ anime, setId }) {
  const navigate = useNavigate();
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };
  return (
    <Box>
      {anime.recommendations !== null && (
        <>
          <Typography variant="h5" mb={2} sx={{ ml: 1.5 }}>
            Recommandations
          </Typography>
          <Box className="slider-wrapper">
            {anime.recommendations
              ? anime.recommendations.map((item) => (
                  <Box marginX={2} key={item.id}>
                    <CardItem item={item} handleClick={handleClick} />
                  </Box>
                ))
              : null}
          </Box>
        </>
      )}
    </Box>
  );
}

export default Recommendations;
