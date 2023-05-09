import React, { useState } from "react";
import Home from "./Home.js";
import About from "./About.js";
import "./App.css";

function App() {
  const [route, setRoute] = useState("home");
  const subtitle = {
    home: "portfolio",
    about: "about",
  };

  return (
    <div className="App">
      <div id="inner">
        <nav>
          <ul>
            <li>
              <button
                className={route === "home" ? "selected" : ""}
                onClick={() => {
                  setRoute("home");
                }}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                className={route === "about" ? "selected" : ""}
                onClick={() => {
                  setRoute("about");
                }}
              >
                About
              </button>
            </li>
          </ul>
        </nav>
        {route === "about" && <About setRoute={setRoute} />}
        {route === "home" && <Home setRoute={setRoute} />}
        <footer>
          <h1>Eden Fuller</h1>
          <h2>{subtitle[route]}</h2>
        </footer>
      </div>
    </div>
  );
}

export default App;
