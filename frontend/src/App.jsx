import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BurgerMenu from "./components/BurgerMenu";
import WatchingList from "./components/WatchingList";
import Home from "./pages/Home";

import AnimeDescription from "./pages/AnimeDescription";
import SearchBar from "./components/SearchBar";
import MyLists from "./pages/MyLists";

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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SearchBar search={search} setSearch={setSearch} setPage={setPage} />
        <BurgerMenu />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/"
            element={
              <Home
                animeId={animeId}
                setAnimeId={setAnimeId}
                search={search}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route
            path="/description"
            element={
              <AnimeDescription animeId={animeId} setAnimeId={setAnimeId} />
            }
          />
          <Route path="/mylists" element={<MyLists />} />
          <Route path="/watchinglist" element={<WatchingList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
