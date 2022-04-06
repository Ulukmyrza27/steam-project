import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import AddGun from "./components/AddGun/AddGun";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import Skins from "./components/Skins/Skins";
import HomePage from "./components/HomePage/HomePage";
import Error404 from "./components/pages/Error404";
import SteamCard from "./components/SteamList/SteamCard";
import Cart from "./components/Cart/Cart";
import AdminPage from "./components/pages/AdminPage";
import EditGun from "./components/EditGun/EditGun";
import SteamAdd from "./components/SteamAdd/SteamAdd";
import Buy from "./components/buyMenu/Buy";
import Oplata from "./components/Oplata/Oplata";
const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/store" element={<SteamCard />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/skins" element={<Skins />} />
        <Route path="/add" element={<AddGun />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/edit/:id" element={<EditGun />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/sly" element={<SteamAdd />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/oplata" element={<Oplata />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
