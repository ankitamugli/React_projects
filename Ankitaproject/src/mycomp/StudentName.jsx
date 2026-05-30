import React, { Component } from "react";

class StudentName extends Component {

  state = {
    name: "Raj"
  };

  changeName = () => {
    this.setState({
      name: "Kumar"
    });
  };

  render() {
    return (
      <>
        <h1>Name = {this.state.name}</h1>

        <button
          onClick={this.changeName}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}> Update Name
        </button>
      </>
    );
  }
}

export default StudentName;