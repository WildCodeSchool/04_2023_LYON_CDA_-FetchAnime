/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import CustomPagination from "./Pagination";

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
          <>
            <CardMedia
              component="img"
              image="src/assets/img/logo/Logo-Low-Res/Not-Found.png"
              objectFit="fill"
              sx={{
                width: "150px",
                height: "150px",
                margin: "auto",
                marginTop: 2,
                borderRadius: 2,
              }}
            />
            <Typography sx={{ marginX: "27%", marginY: 2 }}>
              Sorry, nothing available...
            </Typography>
          </>
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
