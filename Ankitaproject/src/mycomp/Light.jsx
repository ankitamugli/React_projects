import React, { Component } from "react";

class Light extends Component {

  state = {
    light: false
  };

  toggleLight = () => {
    this.setState({
      light: !this.state.light
    });
  };

  render() {
    return (
      <>
        <h1>
          Light {this.state.light ? "ON" : "OFF"}
        </h1>

        <button
          onClick={this.toggleLight}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}
        >
          Toggle Light
        </button>
      </>
    );
  }
}

export default Light;