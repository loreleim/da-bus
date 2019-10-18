import React from "react";
import "./style/index.scss";
//import Footer from "./components/footer-template/index.js";
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
