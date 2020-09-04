import React, { Component } from 'react';

class BasicButton extends Component {
	constructor(props) {
		super(props);
		// Set State
		this.state = {
			buttonColor: 'Blue'
		};
		// Bind "this"
		this.handleClick = this.handleClick.bind(this);
	}
	// Handle Click Method
	handleClick() {
		this.setState({
			buttonColor: 'Red'
		});
	}

	render() {
		return (
			<div>
				<h2>{this.state.buttonColor} Button</h2>
				<button onClick={this.handleClick}>Change Color</button>
			</div>
		);
	}
}

export default BasicButton;
