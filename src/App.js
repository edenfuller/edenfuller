import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import "./App.css";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div className="App">
      <div id="inner">
        <Router>
          <nav>
            <ul>
              <li>
                <Link
                  className={route === "home" ? "selected" : ""}
                  onClick={() => {
                    setRoute("home");
                  }}
                  to="/"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={route === "about" ? "selected" : ""}
                  onClick={() => {
                    setRoute("about");
                  }}
                  to="/about"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About setRoute={setRoute} />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
