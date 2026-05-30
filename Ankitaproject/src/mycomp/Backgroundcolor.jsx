import React, { Component } from "react";

class BackgroundColor extends Component {

  state = {
    backgroundColor: "white"
  };

  changeColor = () => {
    this.setState({
      backgroundColor: "lightblue"
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          height: "200px",
          padding: "20px"
        }}
      >

        <h1>Background Color Change</h1>

        <button
          onClick={this.changeColor}
          style={{padding: "5px",borderRadius: "5px"}}>Change Color
        </button>

      </div>
    );
  }
}

export default BackgroundColor;

