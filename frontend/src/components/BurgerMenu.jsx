/* eslint-disable import/no-extraneous-dependencies */
import { Fab, Grid, MenuList, MenuItem, Popover } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#FDFBE2",
      },
      secondary: {
        main: "#C90D56",
      },
    },
  });

  return (
    <div
      className="BurgerMenu"
      style={{ position: "fixed", bottom: 0, right: 0 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        style={{ padding: "16px" }}
      >
        <ThemeProvider theme={theme}>
          <Fab color="secondary" aria-describedby={id} onClick={handleClick}>
            <SearchIcon />
          </Fab>
        </ThemeProvider>

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
          PaperProps={{
            sx: {
              borderRadius: "20px",
              marginTop: "30px",
              marginLeft: "3px",
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <MenuList>
            <MenuItem>Search</MenuItem>
            <MenuItem>My Lists</MenuItem>
          </MenuList>
        </Popover>
      </Grid>
    </div>
  );
}

export default BurgerMenu;
