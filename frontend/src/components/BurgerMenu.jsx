import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const actions = [
  {
    icon: (
      <NavLink to="/">
        <HomeIcon />
      </NavLink>
    ),
    name: "Home",
  },
  {
    icon: (
      <NavLink to="/mylists">
        <PermMediaIcon />
      </NavLink>
    ),
    name: "My Lists",
  },
  {
    icon: (
      <NavLink to="/trending">
        <WhatshotIcon />
      </NavLink>
    ),
    name: "Trending",
  },
  {
    icon: (
      <NavLink to="/popular">
        <ThumbUpIcon />
      </NavLink>
    ),
    name: "Popular",
  },
];

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 10,
        },
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      })}
    >
      <SpeedDial
        ariaLabel="FetchAnime SpeedDial"
        direction="left"
        icon={<MenuIcon sx={{ color: "secondary.main" }} />}
        onClose={handleClose}
        onClick={handleOpen}
        open={open}
        FabProps={{
          style: { backgroundColor: "primary.main" },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            tooltipTitle={action.name}
            icon={
              <IconButton
                sx={{
                  bgcolor: "primary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  height: "3rem",
                  width: "3rem",
                  color: "secondary.main",
                }}
              >
                {React.cloneElement(action.icon, {
                  style: { color: "inherit" },
                })}
              </IconButton>
            }
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
