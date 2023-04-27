import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import PlanningList from "./components/PlanningList";
import CompletedList from "./components/CompletedList";
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
  const [genres, setGenres] = React.useState("");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} setPage={setPage} />
        <SearchBar search={search} setSearch={setSearch} setPage={setPage} />
        <BurgerMenu />
        <Routes>
          <Route path="*" element={<Error404 />} />
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
              <AnimeDescription
                animeId={animeId}
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                setAnimeId={setAnimeId}
                genres={genres}
                setGenres={setGenres}
              />
            }
          />
          <Route path="/mylists" element={<MyLists />} />
          <Route path="/watchinglist" element={<WatchingList />} />
          <Route path="/planninglist" element={<PlanningList />} />
          <Route path="/completedlist" element={<CompletedList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
