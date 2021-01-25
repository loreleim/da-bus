import React from "react";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class Home extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.purpleContainer}>
          <CornerLogo></CornerLogo>
          <div className={style.searchContainer}>
            <h1>Where you like go?</h1>
            <form>
              <div>
                <input className={style.searchInput}></input>
                <input className={style.searchInput}></input>
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
        {/*<div className={style.littleDot}></div>
        <div className={style.bigDot}></div>*/}
      </div>
    );
  }
}

export default Home;
