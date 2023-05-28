import React from "react";
import "./App.css";
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Current />
        <Forecast />
        <p className="developer">
          This page was built by
          <span> Nataliia Miniailo </span>
        </p>
        <p className="developer">
          <span>
            <a href="https://github.com/Nata16082022/weather-react">
              Link to repository GitHub
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
