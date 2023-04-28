import React from "react";
import { useNavigate } from "react-router-dom";
import Trending from "../components/Trending";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";

function Home({
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
}) {
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    localStorage.setItem("animeId", itemId);
    navigate("/description");
  };
  return (
    <>
      {search === "" ? (
        <Trending />
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          handleClick={handleClick}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
        />
      )}

      <BurgerMenu />
    </>
  );
}

export default Home;
