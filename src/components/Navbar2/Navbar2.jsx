import { LogoutOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar2.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";
import { authContext } from "../../contexts/authContext";
import { ADMIN_EMAIL } from "../../helpers/consts";
import { HeartOutlined } from "@ant-design/icons";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="Navbar">
      <Link to="/">
        <span className="nav-logo">
          <img
            style={{ width: "200px" }}
            src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt=""
          />
        </span>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/store">
          {" "}
          <a href="/home" style={{ color: "white" }}>
            Store
          </a>
        </Link>
        <Link to="/skins">
          <a href="" style={{ color: "white" }}>
            Skins
          </a>
        </Link>
        <Link to="/about">
          <a href="/service" style={{ color: "white" }}>
            {" "}
            About{" "}
          </a>
        </Link>

        <Link to="/cart">
          <Badge
            style={{ marginLeft: "10px", marginTop: "1px" }}
            count={+cartLength}
          >
            <a style={{ cursor: "pointer", color: "white" }}>
              <ShoppingCartOutlined />{" "}
            </a>
          </Badge>
        </Link>
        <Link to="/favorites">
          <Badge count={+favLength}>
            <HeartOutlined
              style={{
                size: "large",
                fontSize: "20px",
                cursor: "pointer",
                marginTop: "1px",
              }}
            />
          </Badge>
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      <nav>
        <div>
          {currentUser ? (
            <>
              {ADMIN_EMAIL === currentUser ? (
                <img
                  className="navbar-avatara"
                  src="data:image/png;base64,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"
                  alt="pic"
                />
              ) : (
                <img
                  className="navbar-avatara"
                  src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
                  alt="pic"
                />
              )}{" "}
              <Button style={{ marginTop: "5px" }} onClick={handleLogOut}>
                <LogoutOutlined />
              </Button>
            </>
          ) : (
            <Button
              className="navbar-avatara"
              onClick={() => navigate("/auth")}
            >
              <img
                className="img-avatar-aa"
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
              />
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
