import React from "react";
import xml2js from "xml2js";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  distanceTime() {
    console.log("testing");
  }

  componentDidMount() {
    fetch(
      "http://api.thebus.org/arrivals/?key=404B6752-D9E8-400E-B9DB-5746894FBB06&stop=37"
    )
      .then(function (response) {
        return response.text();
      })
      .then((data) => {
        console.log(data);
        var parseString = require("xml2js").parseString;
        parseString(data, (err, result) => {
          console.log(result);
          console.log(result.stopTimes.arrival);
          this.setState({ items: result.stopTimes.arrival, isLoaded: true });
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Data is Loading</div>;
    }
    return (
      <div>
        <h1>About</h1>
        <div>
          {items.map((item) => (
            <li key={item.id}>{item.direction}</li>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
