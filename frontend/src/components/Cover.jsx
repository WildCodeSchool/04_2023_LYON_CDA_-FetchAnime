import { CardMedia } from "@mui/material";
import React from "react";

function Cover({ anime }) {
  return (
    <CardMedia
      style={{
        boxShadow: "0 0 29px rgba(49,54,68,.25)",
      }}
      component="img"
      image={anime.cover}
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          height: "230px",
          width: "100%",
          objectFit: "fit",
          margin: "auto",
          borderRadius: 4,
          border: "0.1px solid white",
        },
        [theme.breakpoints.up("md")]: {
          width: "90%",
          objectFit: "fit",
          height: "380px",
          borderRadius: 4,
          margin: "auto",
        },
      })}
    />
  );
}

export default Cover;
