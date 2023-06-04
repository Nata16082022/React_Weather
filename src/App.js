import React from "react";
import "./App.css";

import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Current defaultCity="Amsterdam" />
        <Forecast />
        <p className="developer">
          This page was built by
          <span> Nataliia Miniailo </span>
        </p>
        <p className="developer">
          <span>
            <a href="https://github.com/Nata16082022/React_Weather">
              Link to repository GitHub
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
