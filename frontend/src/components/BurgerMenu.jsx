import { Fab, Grid, MenuList, MenuItem, Popover, Input } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function BurgerMenu({ search, handleChange }) {
  // Handle click & popover
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Component customization
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
      {/* Component positioning */}
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        style={{ padding: "16px" }}
      >
        {/* Applying component customization */}
        <ThemeProvider theme={theme}>
          <Fab color="secondary" aria-describedby={id} onClick={handleClick}>
            <MenuIcon />
          </Fab>
        </ThemeProvider>

        {/* Customizing and positioning this component */}
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
          {/* Popover content */}
          <MenuList>
            <MenuItem>
              <Input value={search} onChange={handleChange} />
            </MenuItem>
            <MenuItem>My Lists</MenuItem>
          </MenuList>
        </Popover>
      </Grid>
    </div>
  );
}

export default BurgerMenu;
