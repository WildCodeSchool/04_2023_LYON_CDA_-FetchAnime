/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Button, Typography, CardMedia, Grid, Box } from "@mui/material";

function AnimeCard() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/${
          search === "" ? "demon" : search
        }?page=${page}`
      )
      .then((response) => response.data)
      .then((data) => setList(data));
  }, [search, page]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.warn(list);
  return (
    <>
      <Input value={search} onChange={handleChange} />
      <Grid
        container
        spacing={4}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            p: 1,
          },
          [theme.breakpoints.up("md")]: {
            p: 15,
          },
        })}
      >
        {list.results
          ? list.results.map((item) => (
              <Grid
                container
                item
                md={2}
                xs={4}
                key={item.id}
                justifyContent="center"
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      height: "180px",
                      width: "125px",
                      borderRadius: 1,
                    },
                    [theme.breakpoints.up("md")]: {
                      height: "300px",
                      width: "210px",
                      borderRadius: 1,
                    },
                  })}
                />

                <Typography sx={{ mt: 1, width: 210 }}>
                  {(() => {
                    const title = item.title.english || item.title.romaji;
                    if (title.length > 50) {
                      return `${title.slice(0, 50)}...`;
                    }
                    return title;
                  })()}
                </Typography>
              </Grid>
            ))
          : ""}
      </Grid>
      <Box sx={{ mb: 5, textAlign: "center" }}>
        {page !== 1 ? (
          <Button
            size="md"
            variant="solid"
            color="secondary"
            onClick={() => setPage(page - 1)}
          >
            Precedent
          </Button>
        ) : null}
        {list.hasNextPage === true ? (
          <Button
            size="md"
            variant="solid"
            color="secondary"
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </Button>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}

export default AnimeCard;
