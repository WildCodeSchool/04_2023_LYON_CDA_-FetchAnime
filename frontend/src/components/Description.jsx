import {
  Button,
  CardMedia,
  CircularProgress,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AddTaskIcon from "@mui/icons-material/AddTask";

import ModalDescription from "./ModalDescription";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "#c90d56" : theme.palette.grey[300],

    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: "red",
      },
    },
  },
}));
export function Description({ anime }) {
  const rating = anime.rating / 20;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [watching, setWatching] = useState(
    JSON.parse(localStorage.getItem("watchingList")) || []
  );

  const [planning, setPlanning] = useState(
    JSON.parse(localStorage.getItem("planningList")) || []
  );
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("completedList")) || []
  );

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleWatching = (item) => {
    const updatedWatching = [
      ...watching,
      { id: item.id, image: item.image, title: anime.title },
    ];
    localStorage.setItem("watchingList", JSON.stringify(updatedWatching));
    setWatching(updatedWatching);
    setAnchorEl(null);
  };

  const handlePlanning = (item) => {
    const updatedPlanning = [
      ...planning,
      { id: item.id, image: item.image, title: anime.title },
    ];
    localStorage.setItem("planningList", JSON.stringify(updatedPlanning));
    setPlanning(updatedPlanning);
    setAnchorEl(null);
  };
  const handleCompleted = (item) => {
    const updatedCompleted = [
      ...completed,
      { id: item.id, image: item.image, title: anime.title },
    ];
    localStorage.setItem("completedList", JSON.stringify(updatedCompleted));
    setCompleted(updatedCompleted);
    setAnchorEl(null);
  };

  return (
    <Box component="div" mt={1.5} backgroundColor="#FDFBE2">
      {anime.title ? (
        <Box component="div">
          <CardMedia
            style={{
              boxShadow: "0 0 29px rgba(49,54,68,.25)",
            }}
            component="img"
            image={anime.cover}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                height: "230px",
                width: "100%",
                objectFit: "fit",
                margin: "auto",
                borderRadius: 4,
                border: "0.1px solid white",
              },
              [theme.breakpoints.up("md")]: {
                height: "350px",
                width: "100%",
                objectFit: "cover",
                margin: "auto",
              },
            })}
          />
          <Typography
            variant="h4"
            textAlign="center"
            m={2}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "1.6rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "3.5rem",
              },
            })}
          >
            {anime.title.english ? anime.title.english : anime.title.romaji}
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            m={2}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "0.9rem",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "1rem",
              },
            })}
          >
            {anime.title.native !== anime.title.romaji
              ? anime.title.native
              : ""}
          </Typography>
          <Typography
            component="span"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 12,
                textAlign: "center",
                padding: 1,
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: "0.rem",
              },
            })}
          >
            {anime.releaseDate}
          </Typography>
          <Box
            width="100%"
            component="div"
            display="flex"
            flexDirection="row-reverse"
            justifyContent="space-between"
            marginTop="4%"
          >
            <Box margin="2%" mt="4%" mb="10%">
              <CardMedia
                style={{ boxShadow: "0 0 29px rgba(49,54,68,.25)" }}
                component="img"
                image={anime.image}
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    height: "157px",
                    width: "115px",
                    objectFit: "fill",
                    borderRadius: "5px",
                  },
                  [theme.breakpoints.up("md")]: {
                    height: "300px",
                    objectFit: "cover",
                    width: "100%",
                    borderRadius: "5px",
                  },
                })}
              />
              <Rating
                name="size-small"
                defaultValue={rating}
                size="small"
                sx={{ margin: "7.5%" }}
                readOnly
              />
              <Button
                sx={{
                  width: "115px",
                  height: "25px",
                  backgroundColor: "#3db4f2",
                }}
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
              >
                Add to List
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleWatching(anime)} disableRipple>
                  <LiveTvIcon style={{ color: "#c90d56" }} />
                  Watching
                </MenuItem>
                <MenuItem onClick={() => handlePlanning(anime)} disableRipple>
                  <AddToQueueIcon style={{ color: "#c90d56" }} />
                  Planning
                </MenuItem>
                <MenuItem onClick={() => handleCompleted(anime)} disableRipple>
                  <AddTaskIcon style={{ color: "#c90d56" }} />
                  Completed
                </MenuItem>
              </StyledMenu>
            </Box>
            <Box
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
                [theme.breakpoints.up("md")]: {
                  width: "75%",
                },
              })}
            >
              <Typography
                variant="body1"
                color="initial"
                marginTop="5%"
                marginLeft="5%"
                sx={(theme) => ({
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.9rem",
                    color: "#C90D56",
                    textAlign: "justify",
                    width: "93%",
                  },
                  [theme.breakpoints.up("md")]: {
                    fontSize: "1.7rem",
                    width: "90%",
                    margin: 3.8,
                  },
                })}
                dangerouslySetInnerHTML={{
                  __html: (() => {
                    const { description } = anime;
                    if (description.length > 335) {
                      return ` ${description.slice(0, 335)}...`;
                    }
                    return description;
                  })(),
                }}
              />
              <ModalDescription
                description={anime.description}
                title={anime.title}
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <CircularProgress sx={{ position: "absolute", margin: "50%" }} />
      )}
    </Box>
  );
}
export default Description;
