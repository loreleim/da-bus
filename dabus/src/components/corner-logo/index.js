import React, { Component } from "react";
import { ReactComponent as LogoSVG } from "../../images/dabus.svg";
import style from "./index.module.scss";

export default class CornerLogo extends Component {
  render() {
    return (
      <div className={style.container}>
        <LogoSVG></LogoSVG>
      </div>
    );
  }
}
