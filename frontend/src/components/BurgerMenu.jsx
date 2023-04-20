import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

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
];
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

export default function BurgerMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 200,
          transform: "translateZ(0px)",
          flexGrow: 1,
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <SpeedDial
          ariaLabel="FetchAnime SpeedDial"
          icon={<MenuIcon sx={{ color: theme.palette.primary.main }} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          FabProps={{
            style: { backgroundColor: theme.palette.secondary.main },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              tooltipTitle={action.name}
              icon={
                <IconButton
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "2rem",
                    height: "3rem",
                    width: "3rem",
                  }}
                >
                  {React.cloneElement(action.icon, {
                    style: { color: theme.palette.primary.main },
                  })}
                </IconButton>
              }
            />
          ))}
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
}
