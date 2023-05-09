import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function NothingAvailable({ position }) {
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          position: "absolute",
          top: "40%",
          left: "30%",
        },
        [theme.breakpoints.up("md")]: {
          position: position || "relative",
          width: "100vw",
          maxHeight: "100vh",
        },
      })}
    >
      <CardMedia
        component="img"
        image="src/assets/img/logo/Logo-Low-Res/Not-Found.png"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            width: "150px",
            height: "150px",
            margin: "auto",
            marginTop: 2,
            borderRadius: 2,
            objectFit: "fit",
          },
          [theme.breakpoints.up("md")]: {
            width: "250px",
            height: "190px",
            margin: "auto",
            marginTop: 2,
            borderRadius: 2,
            objectFit: "fill",
          },
        })}
      />
      <Typography
        variant="h5"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            marginY: 2,
          },
          [theme.breakpoints.up("md")]: {
            marginY: 4,
            fontSize: "1.5rem",
            textAlign: "center",
          },
        })}
      >
        Sorry, nothing available...
      </Typography>
    </Box>
  );
}

export default NothingAvailable;
