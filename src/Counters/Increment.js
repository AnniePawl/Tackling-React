import React, {Component} from 'react'

class Increment extends Component {
	constructor(props){
		super(props);
		this.state = {
			count:0
		}
	}
	increment(){
		this.setState({
			count:this.state.count + 1
		})
	}
	render(){
		return(
			<div>
				<h2>{this.state.count}</h2>
				<button onClick={(e)=>this.increment(e)}>Increment</button>
			</div>
		)
	}
}

export default Increment