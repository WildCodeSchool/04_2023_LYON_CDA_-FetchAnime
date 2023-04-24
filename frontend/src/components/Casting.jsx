/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";

function Casting({ anime }) {
  return (
    <Grid container spacing={2} sx={{ padding: "8px" }}>
      {anime.characters?.map((item) => (
        <>
          {item.voiceActors[0].language === "Japanese" ? (
            <Grid item xs={3} sm={4} md={6} key={item.name.id}>
              <img
                src={item.voiceActors[0].image}
                alt={item.voiceActors[0].name.full}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 5,
                  objectFit: "fill",
                }}
              />
              <p style={{ textAlign: "center" }}>
                {item.voiceActors[0].name.full}
              </p>
            </Grid>
          ) : null}
        </>
      ))}
    </Grid>
  );
}

export default Casting;
