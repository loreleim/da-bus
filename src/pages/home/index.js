import React from "react";
//import { Link } from "react-router-dom";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class Home extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.littleDot}></div>
        <div className={style.bigDot}></div>
        <div className={style.container}>
          <CornerLogo></CornerLogo>
          <div className={style.searchContainer}>
            <h1>Where you like go?</h1>
            <form action="#">
              <div className={style.mainInputContainer}>
                <div>
                </div>
                <div>
                </div>
              </div>
              <div>
                <input
                  type="button"
                  value="We Go"
                  className={style.button}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
