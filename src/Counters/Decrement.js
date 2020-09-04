import React, {Component} from 'react'

class Decrement extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }


  decrement(){
    this.setState ({
      count: this.state.count -1
    })
  }

  render(){
    return(
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={(e)=>this.decrement(e)}>Decrement</button>
      </div>
    )
  }
}

export default Decrement