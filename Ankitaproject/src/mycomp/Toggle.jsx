import React, { Component } from "react";

class Toggle extends Component {

    state = {
        text: "welcome"
    };

    changeText = () => {
        this.setState({
            text: this.state.text === "welcome"
                ? "goodbye"
                : "welcome"
        });
    };

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>

                <button
                    onClick={this.changeText}
                    style={{
                        backgroundColor: "yellow",
                        borderRadius: "5px",
                        padding: "5px"
                    }}
                >
                    Toggle
                </button>
            </>
        );
    }
}

export default Toggle;