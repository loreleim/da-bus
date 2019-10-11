import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/container";

class TripPlanner extends React.Component {
  render() {
    return (
      <Container>
        <div>Trip Planner</div>
        <Link>Example</Link>
      </Container>
    );
  }
}

export default inject("appData")(observer(TripPlanner));
