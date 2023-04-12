/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
