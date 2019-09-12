import React, { Component } from 'react';
import './App.css';
import SVG from './SVG';
import Counter from './Counter';
import Title from './Title'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  render() {

    return (
      <div className='App' >

        <header className='App-header'>

          {/* Master Counter */}
          <Title text={this.state.count} />

          {/* Counts by 1 Button */}
          <Counter increment={1} anything={(n) => {
            this.setState({ count: this.state.count + n })
          }} />
          <div className='line'></div>

          {/* Counts by 3 Button */}
          <Counter increment={3} anything={() => {
            this.setState({ count: this.state.count + 3 })
          }} />
          <div className='line'></div>

          {/* Counts by 5 Button */}
          <Counter increment={5} anything={() => {
            this.setState({ count: this.state.count + 5 })

          }} />
          <div className='line'></div>


          <SVG />
        </header>
      </div>
    );
  }
}

export default App