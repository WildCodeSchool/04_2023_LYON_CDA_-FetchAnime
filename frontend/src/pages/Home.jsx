import React from "react";
import { useNavigate } from "react-router-dom";
import Trending from "../components/Trending";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";

function Home({ setPage, page, search, setSearch }) {
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
        />
      )}
      <BurgerMenu />
    </>
  );
}

export default Home;
