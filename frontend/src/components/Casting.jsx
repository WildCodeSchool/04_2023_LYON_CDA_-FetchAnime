/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import CustomPagination from "./Pagination";

function Casting({ anime }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const numPages = Math.ceil(anime.characters.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const visibleItems = anime.characters?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Grid container margin={1}>
        {visibleItems?.map((item) =>
          item.voiceActors[0].language === "Japanese" ? (
            <Grid item xs={3} sm={4} md={6} key={item.name.id}>
              <img
                src={item.voiceActors[0].image}
                alt={item.voiceActors[0].name.full}
                style={{
                  width: "85px",
                  height: "110px",
                  borderRadius: 5,
                  objectFit: "fill",
                }}
              />
              <p style={{ textAlign: "left", marginBottom: 4, fontSize: 14 }}>
                {item.voiceActors[0].name.full}
              </p>
            </Grid>
          ) : null
        )}
      </Grid>
      {numPages > 1 && (
        <CustomPagination
          count={numPages}
          page={page}
          onChange={handleChangePage}
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        />
      )}
    </>
  );
}

export default Casting;
