import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import SteamList from "./components/SteamList/SteamList";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route />
          <SteamList />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
