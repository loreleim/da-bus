import React, { Component } from "react";
import style from "./index.module.scss";

export default class Nav extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.container}>Navigation</div>
      </div>
    );
  }
}
