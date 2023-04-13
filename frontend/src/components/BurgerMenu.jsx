// eslint-disable-next-line import/no-extraneous-dependencies
import { Fab, Grid, MenuList, MenuItem, Popover } from "@mui/material";

// eslint-disable-next-line import/no-extraneous-dependencies
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

function BurgerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="BurgerMenu">
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Fab color="secondary" aria-describedby={id} onClick={handleClick}>
          <SearchIcon />
        </Fab>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MenuList sx={{ borderRadius: 20 }}>
            <MenuItem>Search</MenuItem>
            <MenuItem>My Lists</MenuItem>
          </MenuList>
        </Popover>
      </Grid>
    </div>
  );
}

export default BurgerMenu;
