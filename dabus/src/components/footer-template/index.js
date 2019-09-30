import React from "react";
import style from ".index.module.scss";

export default class Footer extends Component {
  render() {
    return (
      <div {...this.props}>
        <div className={style.container}></div>
      </div>
    );
  }
}
