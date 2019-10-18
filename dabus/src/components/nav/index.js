import React, { Component } from "react";
import style from "./index.module.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className={style.container}>
        <ul>
          <li>Reload Card</li>
          <li>Trip Planner</li>
          <li>About</li>
          <li>Sign In</li>
        </ul>
      </div>
    );
  }
}
