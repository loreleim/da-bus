import React from "react";
import "./style/index.scss";
//import Footer from "./components/footer-template/index.js";
import style from "./style/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/index.js";
import Home from "./pages/home/index.js";

function App() {
  return (
    <div>
      <Home></Home>
      <Nav></Nav>
    </div>
  );
}

export default App;
