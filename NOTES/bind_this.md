
## Example of Binding 'this'

``` jsx
import React, { Component } from 'react';

class BindCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		// Bind This
		this.increment = this.increment.bind(this);
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
				<h2>Counter using 'bind'</h2>
				<h2>{this.state.count}</h2>
				<button onClick={this.increment}>Increment</button>
			</div>
		);
	}
}

export default BindCounter;
```
## Example of Using ES6 to Avoid Binding 'this'