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
import Trending from "./components/Trending";
import Popular from "./components/Popular";

const theme = createTheme({
  typography: {
    fontFamily: ["Amaranth", "sans-serif"].join(","),
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
  const [tendingPage, setTrendingPage] = useState(1);
  const [genres, setGenres] = React.useState("");
  const [date, setDate] = useState("");
  const [trending, setTrending] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [popularPage, setPopularPage] = useState(1);
  const [error500, setError500] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.consumet.org/meta/anilist/info/${id}`)
      .then((response) => setAnime(response.data))
      .catch((error) => {
        if (error.response && error.response.status === 500) {
          setError500(!error500);
        }
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/popular?page=${page}&perPage=12`
      )
      .then((response) => setPopularList(response.data));
  }, [page]);
  useEffect(() => {
    axios
      .get(
        `https://api.consumet.org/meta/anilist/trending?page=${tendingPage}&perPage=12`
      )
      .then((response) => setTrending(response.data));
  }, [tendingPage]);

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
                setSearch={setSearch}
                trending={trending}
                setTrendingPage={setTrendingPage}
                tendingPage={tendingPage}
                popularList={popularList}
                setPopularPage={setPopularPage}
                popularPage={popularPage}
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
                error500={error500}
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
                setId={setId}
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
          <Route
            path="/planninglist"
            element={<PlanningList setId={setId} />}
          />
          <Route
            path="/completedlist"
            element={<CompletedList setId={setId} />}
          />
          <Route
            path="/popular"
            element={
              <Popular
                popularList={popularList}
                setPopularPage={setPopularPage}
                popularPage={popularPage}
                setId={setId}
              />
            }
          />
          <Route
            path="/trending"
            element={
              <Trending
                trending={trending}
                setTrendingPage={setTrendingPage}
                tendingPage={tendingPage}
                setId={setId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
