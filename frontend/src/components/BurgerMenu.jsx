import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import MenuIcon from "@mui/icons-material/Menu";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import HomeIcon from "@mui/icons-material/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const actions = [
  { icon: <HomeIcon />, name: "Home" },
  { icon: <PermMediaIcon />, name: "Lists" },
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

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: 200,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
    >
      <Backdrop open={open} />
      <ThemeProvider theme={theme}>
        <SpeedDial
          ariaLabel="FetchAnime SpeedDial"
          icon={<MenuIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              onClick={handleClose}
              tooltipTitle={action.name}
              tooltipOpen
            />
          ))}
        </SpeedDial>
      </ThemeProvider>
    </Box>
  );
}
