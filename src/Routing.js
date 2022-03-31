import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGun from "./components/AddGun/AddGun";
import EditGun from "./components/EditGun/EditGun";
import Header from "./components/Header/Header";
import HomePage from "./components/HomaPage/HomePage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Skins from "./components/Skins/Skins";
import SteamList from "./components/SteamList/SteamList";

const Routing = () => {
  return (
      <Header />
    <BrowserRouter>
      <NavBar />
      <Routes>
       <Route path="/list" element={<SteamList />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="/add" element={<AddGun />} />
      </Routes>
    
    </BrowserRouter>





  );
};

export default Routing;
