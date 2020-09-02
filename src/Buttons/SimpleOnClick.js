import React, { Component } from 'react';

class SimpleOnClick extends Component {
	constructor(props) {
		super(props);
		// Set State here
		this.state = {
			name: 'Initial State'
		};
		// Explicitly bind 'this' keyword to handleClick method in constructor so method isnt' undefined
		this.handleClick = this.handleClick.bind(this);
	}
	// Handle click method here
	handleClick() {
		this.setState({
			name: 'Clicked!'
		});
	}

	render() {
		return (
			<div>
				<h1>Super Simple On Click Button</h1>
				<button onClick={this.handleClick}>{this.state.name}</button>
				<h2>{this.state.name}</h2>
			</div>
		);
	}
}

export default SimpleOnClick;
