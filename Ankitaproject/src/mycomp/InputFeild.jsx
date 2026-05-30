import React, { Component } from "react";

class InputField extends Component {

  state = {
    text: ""
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Type here"
        />

        <h1>{this.state.text}</h1>
      </>
    );
  }
}

export default InputField;