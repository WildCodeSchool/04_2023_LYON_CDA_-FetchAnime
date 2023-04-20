import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BurgerMenu from "./components/BurgerMenu";
import WatchingList from "./components/WatchingList";
import Home from "./pages/Home";

import MyLists from "./pages/MyLists";
import AnimeDescription from "./pages/AnimeDescription";
import Trending from "./components/Trending";

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
        <BurgerMenu />
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
          <Route path="/mylists" element={<MyLists />} />
          <Route path="/watchinglist" element={<WatchingList />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
