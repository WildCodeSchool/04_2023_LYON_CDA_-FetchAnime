/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import { CardMedia, Typography, Box } from "@mui/material";
import React from "react";

function CardItem({ item, handleClick, disposition }) {
  const title = item.title.english || item.title.romaji;
  return (
    <Box>
      <CardMedia
        onClick={handleClick ? () => handleClick(item.id) : null}
        component="img"
        image={item.image}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: disposition
            ? {
                height: "170px",
                width: "120px",
                borderRadius: 1,
                objectFit: "fill",
                cursor: "pointer",
                ml: 1,
              }
            : {
                height: "250px",
                width: "180px",
                borderRadius: 1,
                objectFit: "fill",
                cursor: "pointer",
              },
          [theme.breakpoints.up("md")]: {
            height: "300px",
            objectFit: "fill",
            width: "210px",
            borderRadius: "5px",
            cursor: "pointer",
          },
        })}
      />

      <Typography
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: disposition
            ? {
                width: "120px",
                fontSize: 11.2,
                textAlign: "left",
                mb: "5px",
                ml: 1.3,
              }
            : {
                width: "180px",
                fontSize: 17,
              },
          [theme.breakpoints.up("md")]: {
            width: 210,
            fontSize: 20,
            mb: 3,
            ml: 0.4,
          },
        })}
      >
        {(() => {
          if (title && title.length > 20) {
            return `${title.slice(0, 20)}...`;
          }
          return title;
        })()}
      </Typography>
    </Box>
  );
}

export default CardItem;
