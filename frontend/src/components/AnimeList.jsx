/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, CircularProgress, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardItem from "./CardItem";

function AnimeList({ search, page, setPage, handleClick, genres, setGenres }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/${
          search === "" ? "" : search
        }?page=${page}`
      )
      .then((response) => setList(response.data));
  }, [search, page]);

  const handleChangeFilter = (event) => {
    setGenres(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 110, height: 30 }} size="small">
        <InputLabel id="demo-select-small-label" sx={{ fontSize: 14 }}>
          Genres
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={genres}
          label="genres"
          onChange={handleChangeFilter}
          sx={{ height: 30 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem className="mui-item" value="Action">
            Action
          </MenuItem>
          <MenuItem className="mui-item" value="Adventure">
            Adventure
          </MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Ecchi">Ecchi</MenuItem>
          <MenuItem value="Fantasy">Comedy</MenuItem>
          <MenuItem value="Horror">Horror</MenuItem>
          <MenuItem value="Mahou Shoujo">Mahou Shoujo</MenuItem>
          <MenuItem value="Mecha">Mecha</MenuItem>
          <MenuItem value="Music">Music</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Psychological">Psychological</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
          <MenuItem value="Sci-Fi">sci-Fi</MenuItem>
          <MenuItem value="Slice of Life">Slice of Life</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Supernatural">Supernatural</MenuItem>
          <MenuItem value="Thriller">Thriller</MenuItem>
        </Select>
      </FormControl>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            p: 1,
          },
          [theme.breakpoints.up("md")]: {
            p: 15,
          },
        })}
      >
        {list.results ? (
          list.results
            .filter((anime) =>
              genres !== "" ? anime.genres.includes(genres) : true
            )
            .map((item) => (
              <Grid container item md={2} xs={6} height="100%" key={item.id}>
                <CardItem item={item} handleClick={handleClick} />
              </Grid>
            ))
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        )}
        <Box
          component="div"
          sx={{
            textAlign: "center",
            mb: 2,
            width: "100%",
            position: "relative",
            bottom: "0",
          }}
        >
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
      </Grid>
    </>
  );
}

export default AnimeList;
