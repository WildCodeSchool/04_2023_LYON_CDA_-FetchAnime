import React, { useEffect, useState } from "react";
import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimeList from "../components/AnimeList";

export default function News({
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
  setId,
}) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios

      .get(`https://api.consumet.org/news/ann/recent-feeds?topic=anime`)
      .then((response) => setNews(response.data));
  }, []);

  return (
    <Box>
      {search === "" ? (
        <Box>
          <Typography
            variant="h3"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                textAlign: "center",
                mt: 2,
              },
              [theme.breakpoints.up("md")]: {},
              textAlign: "center",
              mt: 2,
            })}
          >
            News
          </Typography>
          {news
            .filter((item) => item.preview.full !== "")
            .map((item) => (
              <Box
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {},

                  [theme.breakpoints.up("md")]: {
                    mt: 4,
                  },
                })}
              >
                <Typography
                  key={item.id}
                  variant="h5"
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      marginX: 1,
                      fontSize: 14,
                      px: 1,
                      mt: 3,
                      mb: 2,
                      textAlign: "center",
                    },

                    [theme.breakpoints.up("md")]: {
                      textAlign: "center",
                      fontSize: 32,
                      width: "70%",
                      margin: "auto",
                      mb: 4,
                    },
                  })}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      display: "flex",
                      margin: 0.3,
                    },
                    [theme.breakpoints.up("md")]: {},
                    display: "flex",
                    margin: 1,
                    border: "1px solid rgb(69,69,69,0.6)",
                    borderRadius: 2,
                    mx: 10,
                  })}
                >
                  <CardMedia
                    component="img"
                    image={item.thumbnail}
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        height: "200px",
                        width: "130px",
                        borderRadius: 2,
                        objectFit: "cover",
                      },
                      [theme.breakpoints.up("md")]: {
                        height: "290px",
                        width: "192px",
                        borderRadius: 2,
                        objectFit: "fit",
                      },
                    })}
                  />
                  <Box
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        mx: 1,
                        textAlign: "justify",
                      },
                      [theme.breakpoints.up("md")]: {
                        textAlign: "justify",
                        mx: 8,
                      },
                    })}
                  >
                    <Typography
                      key={item.id}
                      variant="h5"
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          fontSize: 10,
                          textAlign: "center",
                          mt: 0.5,
                          mb: 0.7,
                        },

                        [theme.breakpoints.up("md")]: {
                          textAlign: "center",
                          mt: 3,
                          mb: 2,
                          fontSize: 28,
                        },
                      })}
                    >
                      {item.preview.intro}
                    </Typography>

                    <Typography
                      variant="p"
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          fontSize: 10,
                          color: "primary.dark",
                        },
                        [theme.breakpoints.up("md")]: {
                          fontSize: 24,
                          color: "primary.dark",

                          lineHeight: 2,
                        },
                      })}
                    >
                      {item.preview.full}
                    </Typography>
                  </Box>
                </Box>
                <Link to={item.url} className="link">
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={(theme) => ({
                      [theme.breakpoints.down("md")]: {
                        fontSize: 10,
                        width: "20%",
                        height: "20px",
                        marginLeft: "79%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                        position: "relative",
                        bottom: 29,
                      },
                      [theme.breakpoints.up("md")]: {
                        fontSize: 18,
                        width: "20%",
                        height: "20px",
                        marginLeft: "79%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 1,
                        position: "relative",
                        bottom: 40,
                      },
                    })}
                  >
                    See more
                  </Typography>
                </Link>
              </Box>
            ))}
        </Box>
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
          setId={setId}
        />
      )}
    </Box>
  );
}
