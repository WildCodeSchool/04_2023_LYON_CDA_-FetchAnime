import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar({
  search,
  setSearch,
  setPage,
  setGenres,
  setDate,
}) {
  const handleChange = (e) => {
    setGenres("");
    setDate("");
    setSearch(e.target.value);
    setPage(1);
  };
  const handleClick = () => {
    setSearch("");
    setPage(1);
  };
  return (
    <Paper
      component="form"
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "95%",
          margin: "auto",
          mt: 9.5,
          backgroundColor: "secondary.main",
          height: "40px",
        },
        [theme.breakpoints.up("md")]: {
          display: "none",
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
  );
}
