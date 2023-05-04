import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import AnimeList from "../components/AnimeList";
import HomeSection from "../components/HomeSection";

function Home({
  setPage,
  page,
  search,
  setSearch,
  genres,
  setGenres,
  date,
  setDate,
  setId,
  trending,
  setTrendingPage,
  popularList,
  setPopularPage,
}) {
  return (
    <>
      {search === "" ? (
        <>
          <HomeSection
            title="Trending"
            trending={trending}
            setTrendingPage={setTrendingPage}
            tendingPage={null}
            setId={setId}
            slice="true"
            navigation="/trending"
          />
          <HomeSection
            title="Popular"
            trending={popularList}
            setTrendingPage={setPopularPage}
            tendingPage={null}
            setId={setId}
            slice="true"
            navigation="/popular"
          />
        </>
      ) : (
        <AnimeList
          setPage={setPage}
          page={page}
          search={search}
          setSearch={setSearch}
          genres={genres}
          setGenres={setGenres}
          date={date}
          setDate={setDate}
          setId={setId}
        />
      )}

      <BurgerMenu />
    </>
  );
}

export default Home;
