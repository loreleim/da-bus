import React, { Component } from "react";
import style from "./index.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.container}>this is the footer</div>
      </div>
    );
  }
}
