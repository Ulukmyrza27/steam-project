import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ImageStart from "./components/ImageStart/ImageStart";
import NavBar from "./components/NavBar/NavBar";
import Skins from "./components/Skins/Skins";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <ImageStart />
          {/* <Header /> */}
          <Route path="/skins" element={<Skins />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
