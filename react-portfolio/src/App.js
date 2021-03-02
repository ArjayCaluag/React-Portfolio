import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import AboutMe from "./pages/About Me"
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
          <Route exact path ='/aboutme'>
            <AboutMe/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
