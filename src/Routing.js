import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGun from "./components/AddGun/AddGun";
import Header from "./components/Header/Header";
import ImageStart from "./components/ImageStart/ImageStart";
import NavBar from "./components/NavBar/NavBar";
import Skins from "./components/Skins/Skins";

const Routing = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <ImageStart />
        <Routes>
          <Route path="/skins" element={<Skins />} />
          <Route path="/add" element={<AddGun />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </div>
  );

};

export default Routing;
