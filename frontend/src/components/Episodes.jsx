/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";

function Episodes({ anime }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(anime.episodes.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container margin={1}>
        {anime.episodes.length > 0 ? (
          anime.episodes
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid item xs={4} sm={4} md={6} key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "120px",
                    height: "110px",
                    borderRadius: 5,
                    objectFit: "fill",
                  }}
                />
                <p
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </p>
              </Grid>
            ))
        ) : (
          <Typography sx={{ marginX: "23%", marginY: 5 }}>
            Nothings episodes available
          </Typography>
        )}
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
