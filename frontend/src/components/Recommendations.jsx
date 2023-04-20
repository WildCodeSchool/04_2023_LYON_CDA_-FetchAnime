/* eslint-disable react/prop-types */
import React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { Step, Typography } from "@mui/material";

import CardItem from "./CardItem";

function Recommendations({ anime, setId }) {
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
  };
  return (
    <>
      <Typography variant="h5" mb={2} sx={{ ml: 1.5 }}>
        Recommandations
      </Typography>
      <SwipeableViews enableMouseEvents>
        {anime.recommendations
          ? anime.recommendations.map((item) => (
              <Step key={item.id} className="stepItem" sx={{ ml: 1.5 }}>
                <CardItem item={item} handleClick={handleClick} />
              </Step>
            ))
          : null}
      </SwipeableViews>
    </>
  );
}

export default Recommendations;
