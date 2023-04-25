import {
  AppBar,
  InputBase,
  styled,
  Toolbar,
  CardMedia,
  IconButton,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";

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
  return (
    <div>
      <AppBar>
        <StyledToolbar>
          <CardMedia
            component="img"
            image="src\assets\img\logo\Logo-Low-Res\logo-color-on-transparent-background.png"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
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
    </div>
  );
}

export default Header;
