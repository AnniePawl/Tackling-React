import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Initial State'
		};
		// Explicitly bind `this` keyboard to `handleClick()` method in constructor so method is not undefined
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			name: 'React Rocks!'
		});
	}
	render() {
		return (
			<div>
				{/* Add click handler to button element to trigger handleClick method when button recieves click event */}
				<button onClick={this.handleClick}> Click Me</button>
				<h1>this.state.name</h1>
			</div>
		);
	}
}

export default Button;
