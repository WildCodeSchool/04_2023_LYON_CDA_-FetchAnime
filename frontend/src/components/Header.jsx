import {
  AppBar,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  CardMedia,
  IconButton,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import { Box } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  backgroundColor: "#FDFBE2",
  padding: "3px",
});

function Header({ search, setSearch, setPage }) {
  const handleChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };
  const handleClick = () => {
    setSearch("");
    setPage(1);
  };
  const navItems = [
    <NavLink to="/" style={{ color: "#c90d56" }}>
      Home
    </NavLink>,
    <NavLink to="/news" style={{ color: "#c90d56" }}>
      News
    </NavLink>,
    <NavLink to="/mylists" style={{ color: "#c90d56" }}>
      My Lists
    </NavLink>,
    <NavLink to="/trending" style={{ color: "#c90d56" }}>
      Trending
    </NavLink>,
    <NavLink to="/popular" style={{ color: "#c90d56" }}>
      Popular
    </NavLink>,
  ];
  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          mb: 12,
        },
      })}
    >
      <AppBar>
        <StyledToolbar>
          <CardMedia
            component="img"
            image="src\assets\img\logo\Logo-Low-Res\logo-color-on-transparent-background.png"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                marginLeft: "5rem",
                height: "60px",
                width: "60%",
                objectFit: "contain",
                padding: 0.8,
              },
              [theme.breakpoints.up("md")]: {
                height: "60px",
                width: "20%",
                objectFit: "contain",
                margin: 0.4,
              },
            })}
          />
          <List
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
              [theme.breakpoints.up("md")]: {
                display: "flex",
                flexDirection: "row",
              },
            })}
          >
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    width: "8rem",
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Paper
            component="form"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
              [theme.breakpoints.up("md")]: {
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "40%",
                backgroundColor: "#FDFBE2",
                height: "40px",
              },
            })}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search anime"
              inputProps={{ "aria-label": "search anime" }}
              value={search}
              onChange={handleChange}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleClick}
            >
              {search === "" ? <SearchIcon /> : <CloseIcon />}
            </IconButton>
          </Paper>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
