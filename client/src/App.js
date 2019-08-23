import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from "./modules/PlayerList"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  render() {
    return (
      <div className="App">
        {/* <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>         */}
        <PlayerList />
      </div>
    );
  }
}

export default App;
