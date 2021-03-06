import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import PlayerList from './modules/PlayerList';
import LoginRegister from './modules/LoginRegister';
import PlayerLogin from './modules/PlayerLogin';
import PlayerSheet from './modules/playerSheet/PlayerSheet';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      JWT: null,
      username: 'not logged in',
      player: false
    }
  }

  setJWT = (newJWT, username, isPlayer) => {
    this.setState({
      JWT: newJWT,
      signedIn: true,
      username: username,
      player: isPlayer
    })
  }

  hasCookie = (token, username, isPlayer) => {
    if (isPlayer) {
      this.setState({
        JWT: token,
        username: username,
        signedIn: true,
        player: true,
        playerID: isPlayer
      })
    } else {
      this.setState({
        JWT: token,
        username: username,
        signedIn: true,
        player: false
      })
    }
  }

  logout = () => {
    Cookies.remove('token')
    Cookies.remove('username')
    Cookies.remove('player')
    this.setState({
      JWT: null,
      signedIn: false,
      username: null,
      player: false
    })
  }
  playersheet = () => {
    this.setState({ player: true })
  }
  render() {
    return (
      <div className="App">
        {this.state.signedIn || <>
          {this.state.player || <LoginRegister hasCookie={this.hasCookie} login={this.setJWT} playersheet={this.playersheet} />}
          {this.state.player && <PlayerLogin hasCookie={this.hasCookie} login={this.setJWT} />}
        </>}
        {this.state.signedIn && <>
          {this.state.player || <PlayerList user={this.state.username} logout={this.logout} JWT={this.state.JWT} />}
          {this.state.player && <PlayerSheet player={this.state.playerID} logout={this.logout} />}
        </>}
      </div>
    );
  }
}

export default App;
