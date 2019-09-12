import React, { Component } from "react";
import Title from "./Title";
import "./Counter.css";

// Define a new Component with a class
// It must extend Component (which we imported above)


// <Counter increment={3} />
class Counter extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="Counter">
        <button
          onClick={() => {
            this.props.anything(this.props.increment)
          }}
          className="Counter--button"
        >
          Increment by {this.props.increment}
        </button>
      </div>
    );
  }
}

export default Counter;