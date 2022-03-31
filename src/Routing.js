import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddGun from "./components/AddGun/AddGun";
import Header from "./components/Header/Header";
import ImageStart from "./components/ImageStart/ImageStart";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomaPage/HomePage";
import Login from "./components/Login/Login";
import Skins from "./components/Skins/Skins";
import SteamList from "./components/SteamList/SteamList";
import CarouselPics from "./components/CarouselPics/CarouselPics";



const Routing = () => {
  return (

    <div>
          <Header />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/list" element={<SteamList />} />
          <Route path="/add" element={<AddGun />} />
          <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
        <Route path="/skins" element={<Skins />} />
        </Routes>
        <ImageStart />
        <CarouselPics />
      </BrowserRouter>
    </div>






    






  );
};

export default Routing;
