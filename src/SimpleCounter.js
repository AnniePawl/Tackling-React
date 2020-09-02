import React, { Component } from 'react';

class SimpleCounter extends Component {
	constructor(props) {
		super(props);
		// Initialize count at 0
		this.state = {
			count: 0
		};
	}
	render() {
		return (
			<div>
				<h1>Simple Counter Component</h1>
				{/* Increment Button */}
				<button>Increment</button>
				{/* Decrement Button */}
				<button>Decrement</button>
				{/* Reset Button */}
				<button>Reset</button>
			</div>
		);
	}
}

export default SimpleCounter;
