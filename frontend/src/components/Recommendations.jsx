/* eslint-disable react/prop-types */
import React from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { Step } from "@mui/material";

import CardItem from "./CardItem";

function Recommendations({ anime, setId }) {
  const handleClick = (animeId) => {
    localStorage.setItem("animeId", animeId);
    setId(localStorage.getItem("animeId"));
  };
  return (
    <SwipeableViews enableMouseEvents>
      {anime.recommendations
        ? anime.recommendations.map((item) => (
            <Step key={item.id} className="stepItem">
              <CardItem item={item} handleClick={handleClick} />
            </Step>
          ))
        : null}
    </SwipeableViews>
  );
}

export default Recommendations;
