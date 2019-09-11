import React, { Component } from 'react';
import axios from 'axios';
import Player from "./Player";
import PlayerDetails from "./PlayerDetails";
import AddPlayer from "./AddPlayer";
import TopBar from "./TopBar";
import Footer from "./Footer";

// test data
const testdata = [
  { id: 1, level: 1, playerName: 'Player1', charName: 'Character Name 1', background: 'Hermit', classname: 'Monk', race: 'Human', speed: 30, proficiency: 2, hp: 22, maxHp: 22, AC: 12, saveDc: 8, hitDie: 'd8', baseSTR: 11, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(2).png" },
  { id: 2, level: 1, playerName: 'Player2', charName: 'Character Name 2', background: 'Hermit', classname: 'Barbarian', race: 'Dwarf', speed: 30, proficiency: 2, hp: 22, maxHp: 22, AC: 12, saveDc: 10, hitDie: 'd8', baseSTR: 12, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(6).png" },
  { id: 3, level: 1, playerName: 'Player3', charName: 'Character Name 3', background: 'Hermit', classname: 'Sorcerer', race: 'Human', speed: 30, proficiency: 2, hp: 22, maxHp: 22, AC: 12, saveDc: 10, hitDie: 'd8', baseSTR: 15, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(81).png" },
  { id: 4, level: 1, playerName: 'Player4', charName: 'Character Name 4', background: 'Hermit', classname: 'Fighter', race: 'Dragonborn', speed: 30, proficiency: 2, hp: 22, maxHp: 22, AC: 12, saveDc: 10, hitDie: 'd8', baseSTR: 16, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(8).png" },
  { id: 5, level: 1, playerName: 'Player5', charName: 'Character Name 5', background: 'Hermit', classname: 'Rogue', race: 'Human', speed: 30, proficiency: 2, hp: 22, maxHp: 22, ac: 12, saveDc: 15, hitDie: 'd8', baseSTR: 9, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(93).png", abilities: [{ id: 1, name: 'Darkvision', description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray' }, { id: 2, name: 'Fey Ancestry', description: "You have advantage on saving throws against being charmed, and magic can't put you to sleep" }] },
  { id: 6, level: 1, playerName: 'Player6', charName: 'Character Name 6', background: 'Hermit', classname: 'Warlock', race: 'Half-elf', speed: 30, proficiency: 2, hp: 22, maxHp: 22, AC: 12, saveDc: 10, hitDie: 'd8', baseSTR: 7, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(31).png", proficiencies: [{ id: 'intS', val: true }, { id: 'conS', val: true }] },
  { id: 7, level: 3, playerName: 'Player7', charName: 'Character Name 7', background: 'Hermit', classname: 'Ranger', race: 'Elf', speed: 30, proficiency: 2, hp: 122, maxHp: 140, AC: 12, saveDc: 11, hitDie: 'd12', baseSTR: 19, baseDEX: 13, baseCON: 10, baseINT: 11, baseWIS: 15, baseCHA: 9, portrait: "/images/original_(43).png", proficiencies: [{ id: 'dexSte', val: true }, { id: 'dexSli', val: true }, { id: 'dexAcr', val: true }, { id: 'dexS', val: true }, { id: 'chaPerf', val: true }, { id: 'chaInt', val: true }, { id: 'chaDec', val: true }, { id: 'chaS', val: true }, { id: 'dexS', val: true }] },
]


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
  }
  closePlayerInfo = () => {
    this.setState({
      showPlayer: false,
      showMenu: true,
      playerDetails: {}
    })
  }

  newPlayer = () => {
    let randNo = (Math.floor(Math.random() * 100)) + 1
    let randIMG = `/images/original_(${randNo}).png`
    let newPlayers = this.state.players
    let player = { playerName: 'Player Name', charName: 'Character Name', game_id: this.state.currentGame, classname: 'Class', race: 'Race', hitDie: 'd6', proficiencies: [], spells: [], abilities: [], background: 'Background', notes: [], baseSTR: 10, baseDEX: 10, baseCON: 10, baseINT: 10, baseWIS: 10, baseCHA: 10, AC: 10, saveDC: 0, maxHp: 0, speed: 25, level: 1, items: [], proficiency: 2 };
    player.portrait = randIMG

    axios({
      method: 'post',
      url: 'http://localhost:3001/api/players',
      headers: {
        Authorization: this.props.JWT,
        user: this.props.user
      },
      data: {
        gameID: this.state.currentGame,
        player: player,
        portrait: randIMG
      }
    })
      .then((response) => {
        player.id = response.data.playerID
        newPlayers.push(player)
        this.setState({
          players: newPlayers
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  newGame = () => {
    let newGameName
    if (this.state.games.length >= 5) {
      newGameName = (
        <div className='savePrompt'>
        <div className='promptBox' >
          <h1 style={{color: 'darkred'}}>You may only have 5 games</h1>
          <h4>Delete an old game before creating a new one</h4>
          <button className='cancel-btn' style={{height: '30px'}} onClick={this.cancelButton}>OK</button>
        </div>
      </div>
    )
    } else {
      newGameName = (
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
  }
    this.setState({
      infoModal: newGameName,
      showMenu: false
    })
    document.addEventListener("keydown", this.escPressed, false);

  }
  
  cancelButton = () => {
    this.setState({
      infoModal: false,
      showMenu: true
    })
    document.removeEventListener("keydown", this.escPressed, false);
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
    const newName = evt.target.gamename.value
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/games',
      headers: {
        Authorization: this.props.JWT,
        user: this.props.user
      },
      data: {
        name: evt.target.gamename.value
      }
    })
      .then((response) => {
        this.setState({
          games: response.data.games,
          currentGame: response.data.newGame,
          infoModal: false,
          showMenu: true,
          currentGameName: newName
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  updatePlayer = (newPlayerInfo) => {
    console.log('Player Info to save:', newPlayerInfo)
    // TODO send to backend for processing
  }

  deletePlayer = (player) => {
    axios.delete(
      `http://localhost:3001/api/players/${player}`,
      {
        headers: {
          Authorization: this.props.JWT,
          user: this.props.user,
          game: this.state.currentGame

        }
      }
    ).then((response) => {
      this.setState({
        players: response.data.players,
        showPlayer: false,
        infoModal: false,
        showMenu: true
      })
    })
      .catch(function (e) {
        console.log(e)
      })
    this.setState({
    })
  }

  deleteGame = () => {
    if (this.state.infoModal) {
      axios.delete(
        `http://localhost:3001/api/games/${this.state.currentGame}`,
        {
          headers: {
            Authorization: this.props.JWT,
            user: this.props.user
          }
        }
      ).then((response) => {
        this.setState({
          games: response.data.games,
          currentGame: response.data.games[0].id,
          currentGameName: response.data.games[0].name,
          showPlayer: false,
          infoModal: false,
          showMenu: true
        })
        this.loadPlayers(response.data.games[0].id)
      })
        .catch(function (e) {
          console.log(e)
        })
    } else {
      if (this.state.games.length > 1) {

        let confirmDelete = (
          <div className='savePrompt'>
          <div className='promptBox' >
            <h1>Delete game: {this.state.currentGameName}</h1>
            <button style={{ marginRight: '5px', backgroundColor: 'black' }} className='accept-btn' onClick={this.deleteGame}>
              DELETE
              </button>
            <button className='cancel-btn' onClick={this.cancelButton}>Cancel</button>
          </div>
        </div>
      )
      this.setState({
        infoModal: confirmDelete,
        showMenu: false
      })
      document.addEventListener("keydown", this.escPressed, false);
    } else {

      let confirmDelete = (
        <div className='savePrompt'>
        <div className='promptBox' >
          <h1 style={{color: 'darkred'}}>You must have at least one game</h1>
          <h4>Create a new game before deleting {this.state.currentGameName}</h4>
          <button className='cancel-btn' style={{height: '30px'}} onClick={this.cancelButton}>OK</button>
        </div>
      </div>
    )
    this.setState({
      infoModal: confirmDelete,
      showMenu: false
    })
    
    }
  }
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
        <PlayerDetails deletePlayer={this.deletePlayer} show={this.state.showPlayer} playerInfo={this.state.playerDetails} closeInfo={this.closePlayerInfo} savePlayer={this.updatePlayer} />
        {this.state.showMenu && <Footer newGame={this.newGame} deleteGame={this.deleteGame} games={this.state.games} user={this.props.user} currentGame={this.state.currentGame} changeGame={this.changeGame} />}
        {this.state.infoModal}
      </div>

    )
  }
}
export default PlayerList;