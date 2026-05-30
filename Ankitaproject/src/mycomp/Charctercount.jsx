import React, { Component } from "react";

class CharacterCounter extends Component {

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
          placeholder="Type here"
          onChange={this.handleChange}
        />

        <h1>
          {this.state.text.length} Characters
        </h1>
      </>
    );
  }
}

export default CharacterCounter;