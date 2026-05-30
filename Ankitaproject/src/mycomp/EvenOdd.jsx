import React, { Component } from "react";

class EvenOdd extends Component {

  state = {
    number: 8
  };

  render() {

    const result =
      this.state.number % 2 === 0 ? "Even": "Odd";

    return (
      <>
        <h1>Number = {this.state.number}</h1>

        <h2>{result}</h2>
      </>
    );
  }
}

export default EvenOdd;