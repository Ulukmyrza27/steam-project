import "./App.css";
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
