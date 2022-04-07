import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Badge, Button } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";
import { authContext } from "../../contexts/authContext";
import Navbar2 from "../Navbar2/Navbar2";
import { ADMIN_EMAIL } from "../../helpers/consts";
const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleLogOut, currentUser } = useContext(authContext);
  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  const { getFav, favLength } = useContext(favoritesContext);
  useEffect(() => {
    getFav();
  }, []);
  const NAV_ITEMS = [
    {
      title: "Store",
      link: "/store",
      id: 1,
    },
    {
      title: "Skins",
      link: "/skins",
      id: 2,
    },
    {
      title: "About",
      link: "/about",
      id: 3,
    },
  ];
  return (
    <>
      <div>
        <Navbar2 />
      </div>
    </>
  );
};

export default NavBar;
