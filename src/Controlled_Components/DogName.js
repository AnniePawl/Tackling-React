import React, { Component } from 'react'



class DogNameInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogName: 'Spot'
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.dogName}
          onChange={(e) => {
            this.setState({ dogName: e.target.value })

          }}>
        </input>

      </div>
    )
  }
}


export default DogNameInput