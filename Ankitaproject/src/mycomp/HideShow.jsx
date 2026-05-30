import React, { Component } from "react";

class HideShow extends Component {

  state = {
    show: true
  };

  toggleParagraph = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.toggleParagraph}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}
        >
          Hide / Show
        </button>

        {
          this.state.show &&
          <p>Hello Students</p>
        }
      </>
    );
  }
}

export default HideShow;