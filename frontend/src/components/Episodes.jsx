import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box } from "@mui/system";
import CustomPagination from "./Pagination";
import NothingAvailable from "./NothingAvailable";

function Episodes({ anime, setEpId, epId, cancelEpTimeout }) {
  const [page, setPage] = useState(1);
  const [viewedEpisode, setViewedEpisode] = useState(
    JSON.parse(localStorage.getItem("viewedEpisode")) || []
  );
  const navigate = useNavigate();

  const itemsPerPage = 6;
  const totalPages = Math.ceil(anime.episodes.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleClick = (episode) => {
    if (cancelEpTimeout) {
      cancelEpTimeout();
    }
    localStorage.setItem("episodeId", episode);
    navigate("/player");
    setEpId(episode);
    if (
      viewedEpisode.length === 0 ||
      !viewedEpisode.some((element) => element === episode)
    ) {
      setTimeout(() => {
        localStorage.setItem(
          "viewedEpisode",
          JSON.stringify([...viewedEpisode, episode])
        );
        setViewedEpisode([...viewedEpisode, episode]);
      }, 9000);
    }
  };

  return (
    <>
      <Grid container spacing={1} margin={1}>
        {anime.episodes.length > 0 ? (
          anime.episodes
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={4}
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {item.id === epId ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          width: "175px",
                          height: "120px",
                          borderRadius: 2,
                          objectFit: "fill",
                        },
                        [theme.breakpoints.up("md")]: {
                          maxWidth: "90%",
                          height: "300px",
                          width: "460px",
                          borderRadius: 2,
                          margin: "auto",
                          objectFit: "fill",
                        },
                      })}
                    />
                    <Typography
                      variant="h5"
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "120px",
                          width: "175px",
                          color: "white",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          fontSize: "1.8rem",
                          borderRadius: 2,
                        },
                        [theme.breakpoints.up("md")]: {
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "300px",
                          width: "460px",
                          marginLeft: "79px",
                          color: "white",
                          backgroundColor: "rgba(0,0,0,0.6)",
                          fontSize: "1.8rem",
                          borderRadius: 2,
                        },
                      })}
                    >
                      Currently
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title}
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          width: "175px",
                          height: "120px",
                          borderRadius: 2,
                          objectFit: "fill",
                        },
                        [theme.breakpoints.up("md")]: {
                          maxWidth: "90%",
                          height: "300px",
                          width: "460px",
                          borderRadius: 2,
                          margin: "auto",
                          objectFit: "fill",
                        },
                      })}
                    />
                    {!viewedEpisode.some((element) => element === item.id) ? (
                      <PlayCircleOutlineIcon
                        sx={(theme) => ({
                          [theme.breakpoints.down("md")]: {
                            position: "absolute",
                            textAlign: "center",
                            width: "175px",
                            color: "white",
                            fontSize: "2.9rem",
                          },
                          [theme.breakpoints.up("md")]: {
                            position: "absolute",
                            width: "420px",
                            ml: 12,
                            color: "white",
                            fontSize: "8rem",
                          },
                        })}
                      />
                    ) : (
                      <>
                        <Typography
                          variant="h5"
                          sx={(theme) => ({
                            [theme.breakpoints.down("md")]: {
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "120px",
                              width: "175px",
                              color: "white",
                              backgroundColor: "rgba(0,0,0,0.6)",
                              fontSize: "1.8rem",
                              borderRadius: 2,
                            },
                            [theme.breakpoints.up("md")]: {
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "300px",
                              width: "460px",
                              marginLeft: "79px",
                              color: "white",
                              backgroundColor: "rgba(0,0,0,0.6)",
                              fontSize: "1.8rem",
                              borderRadius: 2,
                            },
                          })}
                        >
                          viewed
                        </Typography>
                        <Typography
                          variant="span"
                          sx={(theme) => ({
                            [theme.breakpoints.down("md")]: {
                              position: "absolute",
                              textAlign: "center",
                              height: "5px",
                              width: "175px",
                              color: "white",
                              backgroundColor: "rgb(29, 108, 218)",
                              marginTop: 14.35,
                              borderRadius: 2,
                            },
                            [theme.breakpoints.up("md")]: {
                              position: "absolute",
                              textAlign: "center",
                              height: "10px",
                              width: "460px",
                              marginLeft: "79px",
                              color: "white",
                              backgroundColor: "rgb(29, 108, 218)",
                              marginTop: 36.55,
                              borderRadius: 2,
                            },
                          })}
                        />
                      </>
                    )}
                  </Box>
                )}
                <Typography
                  sx={(theme) => ({
                    [theme.breakpoints.down("md")]: {
                      textAlign: "left",
                      fontSize: 12,
                      marginBottom: 2,
                      marginLeft: 1,
                    },
                    [theme.breakpoints.up("md")]: {
                      textAlign: "left",
                      fontSize: 30,
                      width: "460px",
                      marginBottom: 2,
                      marginLeft: 11,
                    },
                  })}
                >
                  {item.title
                    ? `${item.number} - ${item.title}`
                    : `Episode ${item.number}`}
                </Typography>
              </Grid>
            ))
        ) : (
          <NothingAvailable position="relative" />
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
