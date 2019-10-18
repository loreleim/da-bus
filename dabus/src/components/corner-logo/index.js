import React, { Component } from "react";
import { ReactComponent as LogoSVG } from "../../images/dabus.svg";
import style from "./index.module.scss";

export default class CornerLogo extends Component {
  render() {
    return (
      <div className={style.container}>
        <a href="https://google.com">
          <LogoSVG></LogoSVG>
        </a>
      </div>
    );
  }
}
