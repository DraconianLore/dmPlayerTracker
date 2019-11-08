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

 hasCookie = (token, username) => {
  this.setState({
    JWT: token,
    username: username,
    signedIn: true,
    player: false
  })
 }

 logout = () => {
   Cookies.remove('token')
   Cookies.remove('username')
   this.setState({
     JWT: null,
     signedIn: false,
     username: null
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
          {this.state.player || <PlayerList user={this.state.username} logout={this.logout} JWT={this.state.JWT}/>}
          {this.state.player && <PlayerSheet user={this.state.username} logout={this.logout} JWT={this.state.JWT}/>}
        </>}
      </div>
    );
  }
}

export default App;
