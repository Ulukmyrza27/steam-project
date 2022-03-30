import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGun from "./components/AddGun/AddGun";
import EditGun from "./components/EditGun/EditGun";
import Header from "./components/Header/Header";
import SteamList from "./components/SteamList/SteamList";

const Routing = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<SteamList />} />
          <Route path="/add" element={<AddGun />} />
          <Route path="/edit" element={<EditGun />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
