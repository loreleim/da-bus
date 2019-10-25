import React from "react";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class TripPlanner extends React.Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <CornerLogo></CornerLogo>
          <div className={style.routeContainer}>
            <div className={style.nameContainer}>
              <h2>Lorelei's Saved Routes</h2>
            </div>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
}

export default TripPlanner;
