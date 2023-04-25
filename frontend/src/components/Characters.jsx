/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Pagination from "@mui/material/Pagination";

function Characters({ anime }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const numPages = Math.ceil(anime.characters.length / itemsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCharacters = anime.characters.slice(startIndex, endIndex);

  return (
    <div>
      <Grid container margin={1}>
        {displayedCharacters.map((item) => (
          <Grid item xs={3} sm={4} md={2} key={item.name.id}>
            <img
              src={item.image}
              alt={item.name.full}
              style={{
                width: "85px",
                height: "110px",
                borderRadius: 5,
                objectFit: "fill",
              }}
            />
            <p style={{ textAlign: "left", marginBottom: 4 }}>
              {item.name.userPreferred}
            </p>
          </Grid>
        ))}
      </Grid>
      {numPages > 1 && (
        <Pagination
          count={numPages}
          page={currentPage}
          onChange={handleChange}
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        />
      )}
    </div>
  );
}

export default Characters;
