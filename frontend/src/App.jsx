/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchingList from "@components/WatchingList";
import Home from "./pages/Home";
import AnimeDescription from "./pages/AnimeDescription";
import MyLists from "./pages/MyLists";

function App() {
  const [animeId, setAnimeId] = useState();
  return (
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
        <Route path="/mylists" element={<MyLists />} />
        <Route path="/watchinglist" element={<WatchingList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
