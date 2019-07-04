import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }

  }
  render() {
    return (
      <div>

        <div className='clickers'>

          <div className="totally">
            <h2 className="count">
              {this.state.count}</h2>
            <button className='clicker' on onClick={() => {
              console.log("it's working")
              this.setState({ count: this.state.count + 1 })
            }}>
              {this.props.button}
            </button>
          </div>


        </div>
      </div>

    )
  }
}
export default Counter



