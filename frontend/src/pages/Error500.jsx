import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

function Error500() {
  return (
    <Box>
      <CardMedia
        component="img"
        // eslint-disable-next-line no-octal-escape
        image="src\assets\img\Error500.png"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            marginTop: "50%",
            height: "100%",
            width: "100%",
            borderRadius: 1,
            objectFit: "fill",
          },
          [theme.breakpoints.up("md")]: {
            height: "50%",
            width: "50%",
            borderRadius: 1,
            objectFit: "fill",
            margin: "auto",
            marginTop: "10%",
          },
        })}
      />
      <NavLink to="/">
        <Typography
          variant="h5"
          sx={{ textAlign: "center", margin: 4, color: "#C90D56" }}
        >
          Sorry, too much traffic going on...Back to home
        </Typography>
      </NavLink>
    </Box>
  );
}

export default Error500;
