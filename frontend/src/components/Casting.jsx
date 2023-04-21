/* eslint-disable react/prop-types */
import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";

function Cast({ anime }) {
  const japaneseVoiceActors = anime.characters.voiceActors.filter(
    (actor) => actor.language === "Japanese"
  );
  return (
    <Grid container spacing={2} sx={{ padding: "8px" }}>
      {japaneseVoiceActors.map((item) => (
        <Grid item xs={4} sm={6} md={8} key={item.id}>
          <img
            src={item.image}
            alt={item.userPreferred}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: 5,
              objectFit: "fill",
            }}
          />
          <p style={{ textAlign: "center" }}>{item.full}</p>
        </Grid>
      ))}
    </Grid>
  );
}

export default Cast;
