import React, { Component } from "react";
import style from "./style/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Nav from "./components/nav/index.js";
import Home from "./pages/home/index.js";
import Fares from "./pages/fares/index.js";
import TripPlanner from "./pages/trip-planner/index.js";
import About from "./pages/about/index.js";
import Login from "./pages/login/index.js";
import { AuthProvider } from "./database/auth";

const App = withRouter(
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isHit: true,
      };
    }

    render() {
      return (
        <div className={style.MainContainer}>
          <Nav></Nav>
          <AuthProvider>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/fares" component={Fares}></Route>
              <Route path="/tripplanner" component={TripPlanner}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>
          </AuthProvider>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename={`${process.env.PUBLIC_URL}/`}>
        <App />
      </Router>
    );
  }
}

export default RoutedApp;
