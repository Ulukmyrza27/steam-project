import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./contexts/context";
import CartContextProvider from "./contexts/cartContext";
import FavoritesContextProvider from "./contexts/favoritesContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <CartContextProvider>
          <FavoritesContextProvider>
            <ContextProvider>
              <BrowserRouter>
                <NavBar />
                <Routing />
                <Footer />
              </BrowserRouter>
            </ContextProvider>
          </FavoritesContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
