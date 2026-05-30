import React, { Component } from "react";

class LikeButton extends Component {

  state = {
    likes: 0
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <>
        <h1>Likes = {this.state.likes}</h1>

        <button
          onClick={this.addLike}
          style={{
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px"
          }}
        >
          Like
        </button>
      </>
    );
  }
}

export default LikeButton;