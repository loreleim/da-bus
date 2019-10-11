import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import Container from "../components/container";
import style from "./index.module.scss";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div>Something</div>
        <Link>Example</Link>
      </Container>
    );
  }
}

export default inject("appData")(observer(Home));
