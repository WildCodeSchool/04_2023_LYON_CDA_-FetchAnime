/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDescription from "./pages/AnimeDescription";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
