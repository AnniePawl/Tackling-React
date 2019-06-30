import React, { Component } from 'react';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="shoppingList">
        <h1>Shopping List</h1>
        <h2>Shop Items from {this.props.name}</h2>
        <ul>
          <li>Forever21</li>
          <li>Michael's</li>
          <li>Zara</li>
          <li>Nike</li>
          <li>Gucci</li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default ShoppingList