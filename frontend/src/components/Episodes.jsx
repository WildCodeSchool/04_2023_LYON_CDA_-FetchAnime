/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";
import CustomPagination from "./Pagination";

function Episodes({ anime }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(anime.episodes.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Grid container spacing={1} margin={1}>
        {anime.episodes.length > 0 ? (
          anime.episodes
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid item xs={6} sm={4} md={6} key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "175px",
                    height: "120px",
                    borderRadius: 5,
                    objectFit: "fill",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: 12,
                    marginBottom: 2,
                    marginLeft: 1,
                  }}
                >
                  {item.title
                    ? `${item.number} - ${item.title}`
                    : `Episode ${item.number}`}
                </Typography>
              </Grid>
            ))
        ) : (
          <Typography sx={{ marginX: "23%", marginY: 5 }}>
            Nothings episodes available
          </Typography>
        )}
      </Grid>
      {totalPages > 1 && (
        <CustomPagination
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
