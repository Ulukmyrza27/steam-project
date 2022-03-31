import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGun from "./components/AddGun/AddGun";
import Header from "./components/Header/Header";
import ImageStart from "./components/ImageStart/ImageStart";
import NavBar from "./components/NavBar/NavBar";
import SteamList from "./components/SteamList/SteamList";
import CarouselPics from "./components/CarouselPics/CarouselPics";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/list" element={<SteamList />} />
          <Route path="/add" element={<AddGun />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ImageStart />
        <CarouselPics />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
