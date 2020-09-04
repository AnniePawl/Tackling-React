import React, { Component } from 'react';

class ES6Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		// Handle Increment
	}
	// Handle Increment
	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div>
				<h2>Counter w/ ES6 Function</h2>
				<h2>{this.state.count}</h2>
				<button onClick={(e) => this.increment(e)}>Increment</button>
			</div>
		);
	}
}

export default ES6Counter;
