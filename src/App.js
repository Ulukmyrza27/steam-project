import "./App.css";
import ContextProvider from "./contexts/context";
import CartContextProvider from "./contexts/cartContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Routing from "./Routing";

function App() {
  return (
    <div>
      <ContextProvider>
        <CartContextProvider>
          <Routing />
        </CartContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
