import React, { Component } from 'react'

class DogNameInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogName: '',
      dogCount: 0,
      dogArray: []
    }
  }

  renderTitle() {
    if (this.state.dogName.length < 4) {
      return <span>☠️</span>
    }
    return <span> 🖖</span>
  }

  render() {
    const dogLength = this.state.dogName.length
    return (
      <div>
        <h1>{`Current Dog: ${this.state.dogName} Count ${this.state.dogCount}`}</h1>

        <input
          style={{
            backgroundColor: dogLength < 4 ? 'black' : 'blue',
            color: 'white'
          }}
          type="text"
          value={this.state.dogName}
          onChange={(e) => {
            this.setState({ dogName: e.target.value })
          }}>
        </input>
        <div>{this.renderTitle()}</div>
        <button
          onClick={(e) => {
            console.log(e)
            const tempDogArray = [...this.state.dogArray, this.state.dogName]
            console.log(this.state.dogArray)
            this.setState({
              dogCount: this.state.dogCount + 1,
              dogArray: tempDogArray,
              dogName: ''
            })
          }}
        >Submit</button>

        <div>
          <h1>List of Dogs:</h1>
          {this.state.dogArray.map((dog, i) => {
            return <div key={`${dog} - ${i}`}> {dog}</div>
          })}</div>

      </div >
    )
  }
}

export default DogNameInput