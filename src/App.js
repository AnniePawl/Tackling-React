import React, { Component } from 'react';
import Counter from './Counter'
import Title from './Title'
import ShoppingList from './ShoppingList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title title="Hello!" subheading="It's Me" paragraph="Nope" />
        < Counter />
        < ShoppingList />
      </div>
    );
  }
}

export default App;
