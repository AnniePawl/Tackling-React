import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 1 }
  }
  render() {
    return (
      <div>
        <h1>Do Not Click The Button Below</h1>
        <h1>{this.state.count}</h1>
        <button className='button' on onClick={() => {
          console.log("it's working")
          this.setState({ count: this.state.count + 1 })
        }}>
          Don't Click Me!
        </button>
      </div>
    )
  }
}
export default Counter