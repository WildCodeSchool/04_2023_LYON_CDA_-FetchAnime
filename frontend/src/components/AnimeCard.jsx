/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Input,
  Card,
  CardActions,
  Button,
  Typography,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

function AnimeCard() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/anime/enime/${
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
      <Grid container spacing={2} sx={{ mt: 5 }}>
        {list.results
          ? list.results.map((item) => (
              <Grid container item md={3} xs={6} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.image}
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        height: "250px",
                        width: "250px",
                      },
                      [theme.breakpoints.up("md")]: {
                        height: "500px",
                        width: "500px",
                      },
                    })}
                  />
                  <CardContent>
                    <Typography>{item.title}</Typography>
                    <CardActions>
                      <Button size="small" color="primary">
                        Add
                      </Button>
                      <FavoriteBorderIcon />
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))
          : "rien"}
        {list.hasNextPage === true ? (
          <Button
            size="md"
            variant="solid"
            color="primary"
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </Button>
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}

export default AnimeCard;
