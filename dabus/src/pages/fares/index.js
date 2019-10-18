import React from "react";
//import { observer, inject } from "mobx-react";
import style from "./index.module.scss";
import CornerLogo from "../../components/corner-logo";

class Fares extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <CornerLogo></CornerLogo>
        <h1>Reload your HoloCard</h1>
      </div>
    );
  }
}

export default Fares;
//export default inject("appData")(observer(Card));
