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
            <h1>View Bus Arrivals &amp; Service Alerts</h1>
            <form className={style.searchForm}>
              <div>
                <input name="route" required className={style.searchInput}></input>
                <label for="route">Enter route or stop number</label>
              </div>
                <input
                  type="button"
                  value="We Go"
                  className={style.button}
                ></input>
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
