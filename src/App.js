import React, { Component } from 'react';
import Counter from './Counter'
import Title from './Title'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title title="Hello!" subheading="It's Me" paragraph="Nope" />
        < Counter />
      </div>
    );
  }
}

export default App;
