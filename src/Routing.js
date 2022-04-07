import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "./components/About/About";
// import AddGun from "./components/AddGun/AddGun";
// import Footer from "./components/Footer/Footer";
// import NavBar from "./components/NavBar/NavBar";
// import Login from "./components/Auth/Login";
import Skins from "./components/Skins/Skins";
import HomePage from "./components/HomePage/HomePage";
import Error404 from "./components/pages/Error404";
import SteamCard from "./components/SteamList/SteamCard";
import Cart from "./components/Cart/Cart";
import AdminPage from "./components/pages/AdminPage";
import EditGun from "./components/EditGun/EditGun";
import { authContext } from "./contexts/authContext";
import { ADMIN_EMAIL } from "./helpers/consts";
import Auth from "./components/Auth/Auth";
import SteamAdd from "./components/SteamAdd/SteamAdd";
import Buy from "./components/buyMenu/Buy";
import Oplata from "./components/Oplata/Oplata";
const Routing = () => {
  const { currentUser } = useContext(authContext);
  let PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/store",
      element: <SteamCard />,
      id: 2,
    },
    {
      link: "/skins",
      element: <Skins />,
      id: 3,
    },
    {
      link: "/about",
      element: <About />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 6,
    },
    {
      link: "/sly",
      element: <SteamAdd />,
      id: 7,
    },
    {
      link: "/buy",
      element: <Buy />,
      id: 8,
    },
    {
      link: "/oplata",
      element: <Oplata />,
      id: 9,
    },
  ];
  const ADMIN_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditGun />,
      id: 2,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
      {ADMIN_ROUTES.map((item) => (
        <Route
          path={item.link}
          element={
            currentUser === ADMIN_EMAIL ? (
              item.element
            ) : (
              <Navigate replace to="*" />
            )
          }
        />
      ))}
      <Route path="*" element={<Error404 />} />
    </Routes>

    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route exact path="/store" element={<SteamCard />} />
    //     <Route exact path="/" element={<HomePage />} />
    //     <Route path="/skins" element={<Skins />} />
    //     <Route path="/add" element={<AddGun />} />
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/login" element={<Login />} />
    //     <Route path="/edit/:id" element={<EditGun />} />
    //     <Route exact path="/cart" element={<Cart />} />
    //     <Route exact path="/admin" element={<AdminPage />} />
    //     <Route path="*" element={<Error404 />} />
    //     <Route path="/auth" element={<Auth />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  );
};

export default Routing;
