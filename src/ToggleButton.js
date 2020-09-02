import React, { Component } from 'react';

class ToggleButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		};
		// change code below this line
		this.toggleVisibility = this.toggleVisibility.bind(this);

		// change code above this line
	}
	// change code below this line
	toggleVisibility() {
		this.setState((state) => ({
			visibility: !state.visibility
		}));
	}

	// Code above can also be written like this:
	// toggleVisibility() {
	//   this.setState((state) => {
	//     if (state.visibility === true) {
	//       return { visibility: false };
	//     } else {
	//       return { visibility: true };
	//     }
	//   });
	// }
	// change code above this line
	render() {
		if (this.state.visibility) {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
}

export default ToggleButton;
