import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";
import { ReactComponent as FaresSVG } from "../../images/fares.svg";
import { ReactComponent as TripPlannerSVG } from "../../images/trip-planner.svg";
import { ReactComponent as AboutSVG } from "../../images/about.svg";

export default class Nav extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav className={style.navContainer}>
          <ul className={style.navUl}>
            <li>
              <Link to="/fares">
                <FaresSVG className={style.daSVGs}></FaresSVG>
                <span className={style.fares}>Fares</span>
              </Link>
            </li>
            <li>
              <Link to="/tripplanner">
                <TripPlannerSVG className={style.daSVGs}></TripPlannerSVG>
                <span className={style.fares}>Trip Planner</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <AboutSVG className={style.daSVGs}></AboutSVG>
                <span className={style.fares}>About</span>
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
