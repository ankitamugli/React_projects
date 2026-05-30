import React, { Component } from "react";

class StudentDetails extends Component {

  state = {
    name: "Raj",
    age: 20,
    course: "React"
  };

  changeAge = () => {
    this.setState({
      age: 25
    });
  };

  render() {
    return (
      <>
        <h1>Name = {this.state.name}</h1>

        <h1>Age = {this.state.age}</h1>

        <h1>Course = {this.state.course}</h1>

        <button
          onClick={this.changeAge}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}
        >
          Update Age
        </button>
      </>
    );
  }
}

export default StudentDetails;