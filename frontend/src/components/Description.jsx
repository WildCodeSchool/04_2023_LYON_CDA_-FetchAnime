/* eslint-disable react/prop-types */
import {
  Button,
  CardMedia,
  CircularProgress,
  Rating,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AddTaskIcon from "@mui/icons-material/AddTask";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
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
    localStorage.getItem("watchingList") || []
  );

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleWatching = (itemId) => {
    const updatedWatching = [...watching, itemId];
    localStorage.setItem("watchingList", JSON.stringify(updatedWatching));
    setWatching(updatedWatching);
    setAnchorEl(null);
  };

  const handlePlanning = (itemId) => {
    localStorage.setItem("planningList", itemId);

    setAnchorEl(null);
  };
  const handleCompleted = (itemId) => {
    localStorage.setItem("completedList", itemId);
    setAnchorEl(null);
  };

  return (
    <Box component="div" mt={10.5} backgroundColor="#FDFBE2">
      {anime.title ? (
        <Box component="div">
          <CardMedia
            component="img"
            image={anime.cover}
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                height: "230px",
                width: "100%",
                objectFit: "cover",
                margin: "auto",
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
            <Box margin="3%" mb="10%">
              <CardMedia
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
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                + Add
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
                <MenuItem
                  onClick={() => handleWatching(anime.id)}
                  disableRipple
                >
                  <LiveTvIcon />
                  Watching
                </MenuItem>
                <MenuItem onClick={handlePlanning} disableRipple>
                  <AddToQueueIcon />
                  Planning
                </MenuItem>
                <MenuItem onClick={handleCompleted} disableRipple>
                  <AddTaskIcon />
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
                    if (description.length > 150) {
                      return ` ${description.slice(0, 330)}...    `;
                    }
                    return description;
                  })(),
                }}
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
