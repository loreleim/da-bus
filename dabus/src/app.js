import React from "react";
import style from "./style/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/index.js";
import Home from "./pages/home/index.js";
import Fares from "./pages/fares/index.js";
import TripPlanner from "./pages/trip-planner/index.js";
import About from "./pages/about/index.js";
import Login from "./pages/login/index.js";

function App() {
  return (
    <div className={style.MainContainer}>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/fares" component={Fares}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
