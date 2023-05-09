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

function PlanningList({
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
  const [myPlanningList, setMyPlanningList] = useState(
    JSON.parse(localStorage.getItem("planningList"))
  );
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    setId(localStorage.getItem("animeId"));
    navigate("/description");
  };

  const [animeList, setAnimeList] = useState(
    JSON.parse(localStorage.getItem("planningList")) || []
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
  const handleConfirm = () => {
    setModal(true);
  };
  const handleCancel = () => {
    setModal(false);
  };
  const handleDelete = (animeId) => {
    const updatedList = animeList.filter((anime) => anime.id !== animeId);
    localStorage.setItem("planningList", JSON.stringify([...updatedList]));
    setAnimeList(JSON.parse(localStorage.getItem("planningList")));
    setMyPlanningList(JSON.parse(localStorage.getItem("planningList")));
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
            Planning
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
            {myPlanningList ? (
              myPlanningList.map((item, index) => (
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
                    onClick={handleConfirm}
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
                  {modal ? (
                    <Box
                      sx={(theme) => ({
                        [theme.breakpoints.down("md")]: {
                          height: "100%",
                          width: "100%",
                          position: "fixed",
                          left: "0%",
                          bottom: "0%",
                          display: "flex",
                          justifyContent: "space-around",
                          backdropFilter: "blur(10px)",
                          backgroundColor: "rgba(0,0,30,0.2)",
                        },
                        [theme.breakpoints.up("md")]: {
                          height: "10%",
                          width: "20%",
                          position: "absolute",
                          left: "38%",
                          bottom: "72.5%",
                          display: "flex",
                          justifyContent: "space-around",
                          backdropFilter: "blur(10px)",
                          backgroundColor: "rgba(0,0,30,0.2)",
                          borderRadius: 2,
                        },
                      })}
                    >
                      <Button
                        className="confirm"
                        onClick={() => handleDelete(item.id)}
                      >
                        CONFIRM
                      </Button>
                      <Button
                        className="confirm"
                        variant="text"
                        color="primary"
                        onClick={handleCancel}
                      >
                        CANCEL
                      </Button>
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

export default PlanningList;
