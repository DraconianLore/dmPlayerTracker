import React, { Component } from 'react';

import './App.css';
import PlayerList from './modules/PlayerList';
import LoginRegister from './modules/LoginRegister';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false
    }
  }

 

  render() {
    return (
      <div className="App">
        {this.state.signedIn || <LoginRegister />}
        {this.state.signedIn && <PlayerList />}
      </div>
    );
  }
}

export default App;
