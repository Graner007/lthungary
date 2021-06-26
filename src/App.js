import Navbar from "./components/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ColorContextProvider from "./contexts/ColorContext";

function App() {

  return (
    <ColorContextProvider>
      <div className="container">
        <Switch>
          <Navbar />
          <Route path="/" exact>
            <Mainpage />
          </Route>
        </Switch>
      </div>
    </ColorContextProvider>
  );
}

export default App;