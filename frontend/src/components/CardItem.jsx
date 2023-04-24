/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import { CardMedia, Typography } from "@mui/material";
import React from "react";

function CardItem({ item, handleClick }) {
  return (
    <>
      <CardMedia
        onClick={() => handleClick(item.id)}
        component="img"
        image={item.image}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            height: "250px",
            width: "180px",
            borderRadius: 1,
            objectFit: "fill",
          },
          [theme.breakpoints.up("md")]: {
            height: "300px",
            objectFit: "fill",
            width: "210px",
            borderRadius: "5px",
          },
        })}
      />

      <Typography
        xs={{ width: 180, fontSize: 12 }}
        md={{ width: 210, fontSize: 17 }}
        sx={{ height: 55, mt: "5px" }}
      >
        {(() => {
          const title = item.title.english || item.title.romaji;
          if (title.length > 20) {
            return `${title.slice(0, 20)}...`;
          }
          return title;
        })()}
      </Typography>
    </>
  );
}

export default CardItem;
