import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGun from "./components/AddGun/AddGun";
import Header from "./components/Header/Header";
import HomePage from "./components/HomaPage/HomePage";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Skins from "./components/Skins/Skins";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="/add" element={<AddGun />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
};

export default Routing;
