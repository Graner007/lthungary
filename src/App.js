import Navbar from "./components/navbar/Navbar";
import {Route, Switch, Redirect} from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ColorContextProvider from "./contexts/ColorContext";
import logo from './static/LT_hungar_logo_4F.png';
import LanguageBar from "./components/navbar/LanguageBar";
import "react-alice-carousel/lib/alice-carousel.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Offer from "./components/Offer";

function App() {

  return (
    <ColorContextProvider>
      <div className="container">
          <LanguageBar />
          <Navbar logo={logo} />
          <Switch>
            <Route path="/" exact render={() => {
              return <Redirect to="/mainpage" />;
            }}>
            </Route>
            <Route path="/mainpage" exact>
              <Mainpage />
            </Route>
            <Route path="/about" exact>
              <AboutUs />
            </Route>
            <Route path="/offer" exact>
              <Offer />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
    </ColorContextProvider>
  );
}

export default App;