import {
  AppBar,
  alpha,
  InputBase,
  styled,
  Toolbar,
  CardMedia,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  backgroundColor: "#FDFBE2",
  padding: "3px",
});

const Search = styled("div")(({ theme }) => ({
  display: "none",
  position: "relative",
  border: "1px solid white",
  borderRadius: "50px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  height: "40px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    display: "flex",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function Header() {
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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Header;
