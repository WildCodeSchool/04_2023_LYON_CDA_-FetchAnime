/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CardItem from "./CardItem";
import NothingAviable from "./NothingAvailable";

function AnimeList({
  search,
  page,
  setPage,
  genres,
  setGenres,
  date,
  setDate,
  setId,
  setSearch,
}) {
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
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    setDate("");
    setGenres("");
    setSearch("");
    setPage(1);
    navigate("/description");
  };

  const filteredList = list.results
    ? list.results
        .filter((anime) =>
          genres !== "" ? anime.genres.includes(genres) : true
        )
        .filter((anime) =>
          date !== "" ? String(anime.releaseDate) === date : true
        )
    : [];

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 110, height: 30 }} size="small">
        <InputLabel
          id="demo-select-small-label"
          sx={{ fontSize: 14, color: "primary.main" }}
        >
          Genres
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={genres}
          label="genres"
          onChange={handleChangeFilter}
          sx={{ height: 30, color: "primary.main" }}
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
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Horror">Horror</MenuItem>
          <MenuItem value="Mecha">Mecha</MenuItem>
          <MenuItem value="Music">Music</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Psychological">Psychological</MenuItem>
          <MenuItem value="Romance">Romance</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Supernatural">Supernatural</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 110, height: 30 }} size="small">
        <InputLabel
          id="demo-select-small-label"
          sx={{ fontSize: 14, color: "primary.main" }}
        >
          Year
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={date}
          label="date"
          onChange={handleChangeDate}
          sx={{ height: 30 }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="2010">2010</MenuItem>
          <MenuItem value="2011">2011</MenuItem>
          <MenuItem value="2012">2012</MenuItem>
          <MenuItem value="2013">2013</MenuItem>
          <MenuItem value="2014">2014</MenuItem>
          <MenuItem value="2015">2015</MenuItem>
          <MenuItem value="2016">2016</MenuItem>
          <MenuItem value="2017">2017</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2021">2021</MenuItem>
          <MenuItem value="2022">2022</MenuItem>
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
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <Grid container item md={2} xs={6} height="100%" key={item.id}>
              <CardItem item={item} handleClick={handleClick} />
            </Grid>
          ))
        ) : (
          <NothingAviable />
        )}
        {filteredList.length === 15 ? (
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
                Previous
              </Button>
            ) : null}
            {list.hasNextPage === true ? (
              <Button
                size="md"
                variant="solid"
                color="secondary"
                onClick={() => setPage(page + 1)}
              >
                Next
              </Button>
            ) : (
              ""
            )}
          </Box>
        ) : null}
      </Grid>
    </>
  );
}

export default AnimeList;
