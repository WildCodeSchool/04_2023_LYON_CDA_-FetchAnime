import React from "react";
import BurgerMenu from "../components/BurgerMenu";

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BurgerMenu />
    </div>
  );
}

export default Home;
