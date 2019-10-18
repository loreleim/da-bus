import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../components/container";
import style from "./index.module.scss";

class Card extends React.Component {
  render() {
    return (
      <Container>
        <div>Reload your HoloCard</div>
        <Link>coming soon</Link>
      </Container>
    );
  }
}

export default inject("appData")(observer(Card));
