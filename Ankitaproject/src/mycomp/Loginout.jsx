import React, { Component } from "react";

class LoginLogout extends Component {

  state = {
    login: true
  };

  changeButton = () => {
    this.setState({
      login: !this.state.login
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.changeButton}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}
        >
          {this.state.login ? "Login" : "Logout"}
        </button>
      </>
    );
  }
}

export default LoginLogout;