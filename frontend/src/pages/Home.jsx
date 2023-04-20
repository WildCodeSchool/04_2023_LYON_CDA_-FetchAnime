import React from "react";
import Trending from "../components/Trending";
import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";

function Home({ setPage, page, search, setSearch }) {
  return (
    <>
      <Header />
      {search === "" ? (
        <Trending />
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
        />
      )}
      <BurgerMenu />
    </>
  );
}

export default Home;
