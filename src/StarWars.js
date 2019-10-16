import React, { Component } from "react";
import Title from './Title';
import "./App.css";


class StarWars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '0',
      name: '',
      sw_character: null
    }
  }

  handleSubmit(e) {
    // Use to prevent default form behavior (re-loading)
    e.preventDefault()

    const sw_url = `https://swapi.co/api/people/${this.state.inputValue}`

    console.log(sw_url)

    fetch(sw_url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json)
        this.setState({
          name: json.name,
          sw_character: json
        })

      })
  }

  render() {

    let height = '0000'
    if (this.state.sw_character !== null) {
      height = this.state.sw_character.height
    }

    return (
      <div>

        <Title title='Star Wars Characters' />
        <h1> **{this.state.name}** </h1>

        <p style={{ color: 'red' }}>{height}</p>

        <form onSubmit={e => this.handleSubmit(e)}>
          <div className='starWars_container'>
            <input
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="number"
              placeholder="Enter Number"
            />
            <button
              type='submit'
              className='clicker'>Get Results</button>
          </div>
        </form>

      </div>
    );
  }
}



export default StarWars;