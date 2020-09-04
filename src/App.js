import React, { Component } from 'react';
import Counters from './Counters/Counters';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Counters />
			</div>
		);
	}
}

export default App;
