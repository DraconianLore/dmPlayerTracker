import React, { Component } from 'react';

import './App.css';
import PlayerList from './modules/PlayerList';
import LoginRegister from './modules/LoginRegister';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      JWT: null,
      username: 'not logged in'
    }
  }

 setJWT = (newJWT, username) => {
  this.setState({
    JWT: newJWT,
    signedIn: true,
    username: username
  })
 }

 logout = () => {
   this.setState({
     JWT: null,
     signedIn: false,
     username: null
   })
 }

  render() {
    return (
      <div className="App">
        {this.state.signedIn || <LoginRegister login={this.setJWT}/>}
        {this.state.signedIn && <PlayerList user={this.state.username} logout={this.logout} JWT={this.state.JWT}/>}
      </div>
    );
  }
}

export default App;
