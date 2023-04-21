/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";

function Episodes({ anime }) {
  return (
    <Grid container spacing={2} sx={{ padding: "8px" }}>
      {anime.episodes
        ? anime.episodes.map((item) => (
            <Grid item xs={4} sm={6} md={8} key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 5,
                  objectFit: "fill",
                }}
              />
              <p style={{ textAlign: "center" }}>{item.title}</p>
            </Grid>
          ))
        : null}
    </Grid>
  );
}

export default Episodes;
