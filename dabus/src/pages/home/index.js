import React from "react";
//import { Link } from "react-router-dom";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <CornerLogo></CornerLogo>
      </div>
    );
  }
}

export default Home;
