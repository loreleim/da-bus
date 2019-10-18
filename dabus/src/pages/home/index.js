import React from "react";
//import { Link } from "react-router-dom";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <CornerLogo></CornerLogo>
        <div className={style.searchContainer}>
          <h1>Where you like go?</h1>
          <form>
            <input></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
