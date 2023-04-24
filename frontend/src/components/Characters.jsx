/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";

function Characters({ anime }) {
  return (
    <Grid container spacing={2} sx={{ padding: "8px" }}>
      {anime.characters?.map((item) => (
        <Grid item xs={3} sm={4} md={6} key={item.name.id}>
          <img
            src={item.image}
            alt={item.name.full}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: 5,
              objectFit: "fill",
            }}
          />
          <p style={{ textAlign: "center" }}>{item.name.userPreferred}</p>
        </Grid>
      ))}
    </Grid>
  );
}

export default Characters;
