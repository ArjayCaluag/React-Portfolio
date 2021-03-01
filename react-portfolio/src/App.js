import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path={["/", "landing"]}>
            <Landing />
          </Route>
          <Route exact path ='/projects'>
            <Projects/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
