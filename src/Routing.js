import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddGun from "./components/AddGun/AddGun";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomaPage/HomePage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Skins from "./components/Skins/Skins";
import SteamList from "./components/SteamList/SteamList";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/store" element={<SteamList />} />
          <Route exect path="/" element={<HomePage />} />
          <Route path="/skins" element={<Skins />} />
          <Route path="/add" element={<AddGun />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Header />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
