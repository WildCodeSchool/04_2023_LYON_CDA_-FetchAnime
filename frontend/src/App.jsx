import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import VideoPlayer from "./pages/VideoPlayer";
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
  palette: {
    mode: "light",
    primary: {
      main: "#C90D56",
      dark: "#454545",
    },
    secondary: {
      main: "#FDFBE2",
    },
  },
});

function App() {
  const [anime, setAnime] = useState([]);
  const [id, setId] = useState(localStorage.getItem("animeId"));
  const [animeId, setAnimeId] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [genres, setGenres] = React.useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => setAnime(response.data));
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header search={search} setSearch={setSearch} setPage={setPage} />
        <SearchBar
          search={search}
          setSearch={setSearch}
          setPage={setPage}
          date={date}
          setDate={setDate}
          genres={genres}
          setGenres={setGenres}
        />
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
                genres={genres}
                setGenres={setGenres}
                date={date}
                setDate={setDate}
                setId={setId}
              />
            }
          />
          <Route
            path="/description"
            element={
              <AnimeDescription
                animeId={animeId}
                setAnimeId={setAnimeId}
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                genres={genres}
                setGenres={setGenres}
                date={date}
                setDate={setDate}
                anime={anime}
                id={id}
                setId={setId}
              />
            }
          />
          <Route
            path="/mylists"
            element={
              <MyLists
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                genres={genres}
                setGenres={setGenres}
                date={date}
                setDate={setDate}
              />
            }
          />
          <Route
            path="/player"
            element={
              <VideoPlayer
                anime={anime}
                setId={setId}
                search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage}
                genres={genres}
                setGenres={setGenres}
                date={date}
                setDate={setDate}
                id={id}
              />
            }
          />
          <Route
            path="/watchinglist"
            element={<WatchingList setId={setId} />}
          />
          <Route path="/planninglist" element={<PlanningList />} />
          <Route path="/completedlist" element={<CompletedList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
