import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddGun from "./components/AddGun/AddGun";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Skins from "./components/Skins/Skins";
import SteamList from "./components/SteamList/SteamList";
import HomePage from "./components/HomePage/HomePage";
import EditGun from "./components/EditGun/EditGun";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/store" element={<SteamList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="/add" element={<AddGun />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditGun />} />
      </Routes>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
