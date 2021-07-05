import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import LanguageContextProvider from "./contexts/LanguageContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();