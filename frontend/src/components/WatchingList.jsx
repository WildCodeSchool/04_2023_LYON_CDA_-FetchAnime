/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import CardItem from "./CardItem";
import "react-toastify/dist/ReactToastify.css";

function WatchingList({ setId }) {
  const [myWatchingList, setMyWatchingList] = useState(
    JSON.parse(localStorage.getItem("watchingList"))
  );

  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  const [animeList, setAnimeList] = useState(
    JSON.parse(localStorage.getItem("watchingList")) || []
  );
  const notify = () =>
    toast.success("Removed your list !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleDelete = (animeId) => {
    const updatedList = animeList.filter((anime) => anime.id !== animeId);
    localStorage.setItem("watchingList", JSON.stringify([...updatedList]));
    setAnimeList(JSON.parse(localStorage.getItem("watchingList")));
    setMyWatchingList(JSON.parse(localStorage.getItem("watchingList")));
    notify();
  };

  return (
    <>
      <Typography
        variant="h2"
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            margin: 2,
            textAlign: "center",
          },
          [theme.breakpoints.up("md")]: {
            margin: 10,
            textAlign: "center",
          },
        })}
      >
        Watching
      </Typography>
      <Box
        container
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginLeft: "1rem",
            marginRight: "2rem",
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "5%",
          },
        })}
      >
        {myWatchingList ? (
          myWatchingList.map((item, index) => (
            <Box
              key={index}
              fluid
              item
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  width: "45%",
                },
                [theme.breakpoints.up("md")]: {
                  width: "16.66%",
                  justifyContent: "center",
                },
              })}
            >
              <ClearIcon
                onClick={() => handleDelete(item.id)}
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    mb: 0.2,
                    mt: 0.9,
                    ml: 19,
                  },
                  [theme.breakpoints.up("md")]: {
                    mb: 0.2,
                    mt: 0.9,
                    ml: 23,
                  },
                })}
              />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                limit={1}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <CardItem item={item} handleClick={handleClick} />
            </Box>
          ))
        ) : (
          <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
        )}
      </Box>
    </>
  );
}

export default WatchingList;
