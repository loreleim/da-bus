import React, { Component } from "react";
import { ReactComponent as LogoSVG } from "../../images/dabus.svg";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class CornerLogo extends Component {
  render() {
    return (
      <div className={style.container}>
        <Link to="/">
          <LogoSVG></LogoSVG>
        </Link>
      </div>
    );
  }
}
