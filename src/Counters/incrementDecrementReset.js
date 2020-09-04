import React, {Component} from 'react'

class IncrementDecrementReset extends Component {
	constructor(props){
		super(props);
		this.state = {
			count:0
		}
	}
		// Increment Method 
		increment(){
			this.setState({
				count:this.state.count + 1
			})
		}
		// Decrement Method 
		decrement(){
			this.setState({ 
				count: this.state.count -1 
			});
		}
		// Reset Method
		reset() {
			this.setState({
				count: 0
			})
		}
	render(){
		return(
			<div className= 'count_container'>
				<h1 className='count'>{this.state.count}</h1>
				<div className='count_buttons'>
					{/* Increment Button */}
					<button class='count_button'onClick = {(e)=> this.increment(e)}>increment</button>
					{/* Decrement Button */}
					<button class='count_button'onClick ={(e)=> this.decrement(e)}>decrement</button>
					{/* Reset Button */}
					<button class='count_button'onClick={(e)=> this.reset(e)}>reset</button>
				</div>
			</div>
		)
	}
}

export default IncrementDecrementReset