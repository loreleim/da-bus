import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

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
