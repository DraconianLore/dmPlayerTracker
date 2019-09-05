import React, { Component } from 'react';
import axios from 'axios';
import Player from "./Player";
import PlayerDetails from "./PlayerDetails";
import AddPlayer from "./AddPlayer";
import TopBar from "./TopBar";
import Footer from "./Footer";

// test data
const testdata = [
  { id: 1, playerName: 'Player1', charName: 'Character Name 1', class: 'Monk', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(2).png" },
  { id: 2, playerName: 'Player2', charName: 'Character Name 2', class: 'Barbarian', race: 'Dwarf', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(6).png" },
  { id: 3, playerName: 'Player3', charName: 'Character Name 3', class: 'Sorcerer', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(81).png" },
  { id: 4, playerName: 'Player4', charName: 'Character Name 4', class: 'Fighter', race: 'Dragonborn', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(8).png" },
  { id: 5, playerName: 'Player5', charName: 'Character Name 5', class: 'Rogue', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(93).png" },
  { id: 6, playerName: 'Player6', charName: 'Character Name 6', class: 'Warlock', race: 'Half-elf', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(31).png" },
  { id: 7, playerName: 'Player7', charName: 'Character Name 7', class: 'Ranger', race: 'Elf', hp: 122, maxHp: 140, ac: 12, saveDc: 10, pPerception: 11, portrait: "/images/original_(43).png" },
]

// const playerTemplate = { id: 'new', playerName: 'NEW PLAYER', charName: 'NEW CHAR', class: 'CLASS', race: 'RACE', hp: 0, maxHp: 0, ac: 0, saveDc: 0, pPerception: 0 }

class PlayerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      players: [],
      showPlayer: false,
      playerDetails: {},
      currentGame: 1,
      games: [],
      currentGameName: '',
      infoModal: false,
      showMenu: true
    }
    this.closePlayerInfo = this.closePlayerInfo.bind(this);
    this.showPlayerInfo = this.showPlayerInfo.bind(this);
  }

  loadGames = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/games',
      headers: {
        Authorization: this.props.JWT,
        user: this.props.user
      }
    })
      .then((response) => {
        this.setState({
          games: response.data.games,
          currentGame: response.data.games[0].id
        })
        this.loadPlayers(response.data.games[0].id)
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  loadPlayers = (gameID) => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/players',
      headers: {
        Authorization: this.props.JWT,
        game: gameID
      }
    })
      .then((response) => {
        this.setState({
          players: response.data.players,
          currentGameName: response.data.gameName
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }


  showPlayerInfo(player) {
    this.setState({
      showPlayer: true,
      showMenu: false,
      playerDetails: player
    })
    setTimeout(() => {
      console.log(this.state)
    }, 10);
  }
  closePlayerInfo = () => {
    this.setState({
      showPlayer: false,
      showMenu: true,
      playerDetails: {}
    })
  }
  newPlayer = () => {
    // Open template for a blank char(for now just add new empty one)
    // this.setState({
    //   showPlayer: true,
    //   playerDetails: playerTemplate
    // })
    let randNo = (Math.floor(Math.random() * 100)) + 1
    let randIMG = `/images/original_(${randNo}).png`
    let randID = new Date().getTime()
    let newPlayers = this.state.players
    let player = { id: randID, playerName: 'unnamed', charName: 'unnamed', portrait: randIMG }
    newPlayers.push(player)
    this.setState({ players: newPlayers })
  }
  newGame = () => {
    let newGameName = (
      <div className="infoModal display-block">
        <div className="infoModal-main">
          <form onSubmit={this.createGame}>
            <h1>Name your game</h1>
            <input className="info-text" type="text" name="gamename" />
            <input className="info-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
    this.setState({ 
      infoModal: newGameName,
      showMenu: false
    })
    document.addEventListener("keydown", this.escPressed, false);

  }
  // catch when user presses 'ESC'
  escPressed = (event) => {
    if (event.keyCode === 27) {
      this.setState({ 
        infoModal: false,
        showMenu: true
      })
      document.removeEventListener("keydown", this.escPressed, false);
    }
  }

  createGame = (evt) => {
    evt.preventDefault()
    const randID = new Date().getTime()
    const newgame = { name: evt.target.gamename.value, id: randID }
    let gamelist = this.state.games
    gamelist.push(newgame)
    this.setState({
      games: gamelist,
      infoModal: false,
      showMenu: true,
      currentGame: randID,
      currentGameName: evt.target.gamename.value
    })

  }
  updatePlayer = (newPlayerInfo) => {
    console.log('Player Info to save:', newPlayerInfo)
    // send to backend for processing
  }

  changeGame = (gameID) => {
    if (gameID === 999) {
      this.setState({
        currentGame: gameID,
        currentGameName: 'Example game',
        players: testdata
      })
    } else {
      this.setState({ currentGame: gameID })
      this.loadPlayers(gameID)
    }
  }

  componentDidMount() {
    this.loadGames()
  }

  render() {
    const playerList = this.state.players.map((player) => {
      return (
        <Player key={player.id} info={player} showPlayer={this.showPlayerInfo} />
      )
    })

    return (
      <div>
        {this.state.showMenu && <TopBar gameName={this.state.currentGameName} user={this.props.user} logout={this.props.logout} />}
        <ul id="hexGrid">
          {playerList}
          <AddPlayer newPlayer={this.newPlayer} />
        </ul>
        <PlayerDetails show={this.state.showPlayer} playerInfo={this.state.playerDetails} closeInfo={this.closePlayerInfo} savePlayer={this.updatePlayer} />
        {this.state.showMenu && <Footer newGame={this.newGame} games={this.state.games} user={this.props.user} currentGame={this.state.currentGame} changeGame={this.changeGame} />}
        {this.state.infoModal}
      </div>

    )
  }
}
export default PlayerList;