import React, { Component } from "react";

class Temperature extends Component {

  state = {
    celsius: 0
  };

  render() {

    const fahrenheit =
      (this.state.celsius * 9 / 5) + 32;

    return (
      <>
        <h1>
          Celsius = {this.state.celsius}°C
        </h1>

        <h1>
          Fahrenheit = {fahrenheit}°F
        </h1>
      </>
    );
  }
}

export default Temperature;