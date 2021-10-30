import Navbar from "./components/navbar/Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ColorContextProvider from "./contexts/ColorContext";
import logo from './static/new_logo.jpeg';
import LanguageBar from "./components/navbar/LanguageBar";
import "react-alice-carousel/lib/alice-carousel.css";
import AboutUs from "./components/about-us/AboutUs";
import Contact from "./components/Contact";
import Offer from "./components/Offer";
import SupplyFromChina from "./components/SupplyFromChina";
import Footer from "./components/Footer";
import Service from "./components/Service";

require('dotenv').config();

function App() {
  return (
    <ColorContextProvider>
      <div>
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
            <Route path="/services/:name" exact>
              <Service />
            </Route>
            <Route path="/about-us" exact>
              <AboutUs />
            </Route>
            <Route path="/supply-from-china" exact>
              <SupplyFromChina />
            </Route>
            <Route path="/offer" exact>
              <Offer />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="*" exact render={() => {
              return <Redirect to="/mainpage" />;
            }}></Route>
          </Switch>
          <Footer />
        </div>
    </ColorContextProvider>
  );
}

export default App;