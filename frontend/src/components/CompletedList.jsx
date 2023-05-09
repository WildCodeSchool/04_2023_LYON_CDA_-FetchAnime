/* eslint-disable react/no-array-index-key */
import { CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "semantic-ui-react";
import CardItem from "./CardItem";
import AnimeList from "./AnimeList";
import "react-toastify/dist/ReactToastify.css";

function CompletedList({
  setId,
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
}) {
  const [modal, setModal] = useState(false);
  const [selectedAnimeId, setSelectedAnimeId] = useState(null);
  const [myCompletedList, setMyCompletedList] = useState(
    JSON.parse(localStorage.getItem("completedList"))
  );

  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  const [animeList, setAnimeList] = useState(
    JSON.parse(localStorage.getItem("completedList")) || []
  );
  const notify = () =>
    toast.success("Removed from your list !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleConfirm = (animeId) => {
    setSelectedAnimeId(animeId);
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };
  const handleDelete = () => {
    const updatedList = animeList.filter(
      (anime) => anime.id !== selectedAnimeId
    );
    localStorage.setItem("completedList", JSON.stringify(updatedList));
    setAnimeList(updatedList);
    setMyCompletedList(updatedList);
    notify();
    setModal(false);
  };

  return (
    <Box>
      {search === "" ? (
        <Box>
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
            Completed
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
            {myCompletedList ? (
              myCompletedList.map((item, index) => (
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
                    onClick={() => handleConfirm(item.id)}
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
                    limit={2}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  <CardItem item={item} handleClick={handleClick} />
                  {modal ? (
                    <Box
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          height: "15%",
                          width: "100%",
                          right: "0.5%",
                          position: "fixed",
                          bottom: "40%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "secondary.main",
                          overflowX: "hidden",
                          borderRadius: 2,
                          boxShadow: 1,
                        },
                        [theme.breakpoints.up("md")]: {
                          height: "15%",
                          width: "20%",
                          position: "fixed",
                          left: "38%",
                          bottom: "75.5%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "secondary.main",
                          overflowX: "hidden",
                          borderRadius: 2,
                          boxShadow: 1,
                        },
                      })}
                    >
                      <Typography variant="p" fontFamily="Amaranth">
                        Do you really want to remove this from your list?
                      </Typography>
                      <Box margin={2}>
                        <Button
                          className="confirm"
                          onClick={() => handleDelete(item.id)}
                        >
                          Confirm
                        </Button>
                        <Button className="confirm" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              ))
            ) : (
              <CircularProgress
                sx={{ position: "absolute", top: "50%", left: "50%" }}
              />
            )}
          </Box>
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

export default CompletedList;
