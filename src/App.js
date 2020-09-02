import React, { Component } from 'react';
import './App.css';
import SVG from './SVG';
import Counter from './Counter';
import Title from './Title';
import Form from './Form';
// import Login from './Login'
import DogNameInput from './Controlled_Components/DogName';
import Campsite from './Examples/Campsite';
import SimpleCounter from './SimpleCounter';
import SimpleOnClick from './Buttons/SimpleOnClick';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div className="App">
				<SimpleOnClick />

				<SimpleCounter />
				<Form />
				{/* <Login /> */}
				<DogNameInput />

				<header className="App-header">
					{/* Master Counter */}
					<Title text={this.state.count} />

					{/* Counts by 1 Button */}
					<Counter
						increment={1}
						anything={(n) => {
							this.setState({ count: this.state.count + n });
						}}
					/>
					<div className="line" />

					{/* Counts by 3 Button */}
					<Counter
						increment={3}
						anything={() => {
							this.setState({ count: this.state.count + 3 });
						}}
					/>
					<div className="line" />

					{/* Counts by 5 Button */}
					<Counter
						increment={5}
						anything={() => {
							this.setState({ count: this.state.count + 5 });
						}}
					/>
					<div className="line" />

					<SVG />
				</header>
			</div>
		);
	}
}

export default App;
