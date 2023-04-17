import React from "react";
import Header from "../components/Header";
import BurgerMenu from "../components/BurgerMenu";
import AnimeCard from "../components/AnimeCard";

function Home() {
  return (
    <>
      <Header />
      <AnimeCard />
      <BurgerMenu />
    </>
  );
}

export default Home;
