/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Pagination from "@mui/material/Pagination";

function Episodes({ anime }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(anime.episodes.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ padding: "8px" }}>
        {anime.episodes
          ? anime.episodes
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item) => (
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
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          sx={{ my: 2, display: "flex", justifyContent: "center" }}
        />
      )}
    </>
  );
}

export default Episodes;
