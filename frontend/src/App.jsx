import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import AnimeDescription from "./pages/AnimeDescription";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Amaranth", // insérer le nom de la police souhaitée ici
      "sans-serif",
    ].join(","),
    color: "#C90D56",
  },
});

function App() {
  const [animeId, setAnimeId] = useState();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/"
            element={<Home animeId={animeId} setAnimeId={setAnimeId} />}
          />
          <Route
            path="/description"
            element={
              <AnimeDescription animeId={animeId} setAnimeId={setAnimeId} />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
