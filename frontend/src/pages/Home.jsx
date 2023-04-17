import React from "react";
import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";

function Home() {
  return (
    <>
      <Header />
      <AnimeList />
      <BurgerMenu />
    </>
  );
}

export default Home;
