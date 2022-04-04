import "./App.css";
import ContextProvider from "./contexts/Context";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Routing from "./Routing";

function App() {
  return (
    <div>
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
