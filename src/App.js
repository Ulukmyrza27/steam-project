import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddGun from "./components/AddGun/AddGun";
import EditGun from "./components/EditGun/EditGun";
import Header from "./components/Header/Header";
import ContextProvider from "./contexts/Context";

import Routing from "./Routing";

function App() {
  return (
    <div>
      CS GO - Steam
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
