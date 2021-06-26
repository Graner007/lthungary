import Navbar from "./components/navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import Mainpage from "./components/Mainpage";

function App() {

  return (
      <div className="container">
        <Switch>
          <Navbar />
          <Route path="/" exact>
            <Mainpage />
          </Route>
        </Switch>
      </div>
  );
}

export default App;