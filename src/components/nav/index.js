import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className={style.container}>
        <nav>
          <ul>
            <li>
              <Link to="/fares">Fares</Link>
            </li>
            <li>
              <Link to="/tripplanner">Trip Planner</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
