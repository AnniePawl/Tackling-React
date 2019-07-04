import React, { Component } from 'react';
import Title from './Title'
import Navbar from './Navbar'
import Counter from './Counter'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        < Title title="Birthdays" />
        < Navbar />

      </div>
    )
  }
}

export default App