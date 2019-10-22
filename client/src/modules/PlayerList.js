import React, { Component } from 'react';
import axios from 'axios';
import Player from "./player/Player";
import PlayerDetails from "./player/PlayerDetails";
import AddPlayer from "./AddPlayer";
import TopBar from "./TopBar";
import Footer from "./Footer";
const baseURL = process.env.REACT_APP_BASEURL;

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
      showMenu: true,
      tutorial: false
    }
    this.closePlayerInfo = this.closePlayerInfo.bind(this);
    this.showPlayerInfo = this.showPlayerInfo.bind(this);
  }

  loadGames = () => {
    axios({
      method: 'get',
      url: `${baseURL}api/games`,
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
      url: `${baseURL}api/players`,
      headers: {
        Authorization: this.props.JWT,
        game: gameID
      }
    })
      .then((response) => {
        let incomingPlayers = []
        response.data.players.forEach(player => {
          if (player.proficiencies) {
            player.proficiencies = JSON.parse(player.proficiencies)
          }
          incomingPlayers.push(player)
        });
        // order players by their ID 
        incomingPlayers.sort((a, b) => (a.id > b.id) ? 1 : -1)
        this.setState({
          players: incomingPlayers,
          currentGameName: response.data.gameName
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  showPlayerInfo(player) {
    axios({
      method: 'get',
      url: `${baseURL}api/players/${player.id}`,
      headers: {
        Authorization: this.props.JWT,
      }
    })
      .then((response) => {
        player.feats = response.data.feats
        player.notes = response.data.notes
        player.items = response.data.items
        player.spells = response.data.spells
          this.setState({
            showPlayer: true,
            showMenu: false,
            playerDetails: player
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  closePlayerInfo = () => {
    this.setState({
      showPlayer: false,
      showMenu: true,
      playerDetails: {}
    })
    this.loadPlayers(this.state.currentGame)
  }

  newPlayer = () => {
    let randNo = (Math.floor(Math.random() * 100)) + 1
    let randIMG = `./images/original_(${randNo}).png`
    let newPlayers = this.state.players
    let player = { playerName: 'Player Name', charName: 'Character Name', game_id: this.state.currentGame, classname: 'Class', race: 'Race', hitDie: 'd6', proficiencies: null, spells: [], abilities: [], background: 'Background', notes: [], baseSTR: 10, baseDEX: 10, baseCON: 10, baseINT: 10, baseWIS: 10, baseCHA: 10, AC: 10, saveDC: 0, maxHP: 0, speed: 25, level: 1, items: [], proficiency: 2 };
    player.portrait = randIMG

    axios({
      method: 'post',
      url: `${baseURL}api/players`,
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
            <h1 style={{ color: 'darkred' }}>You may only have 5 games</h1>
            <h4>Delete an old game before creating a new one</h4>
            <button className='cancel-btn' style={{ height: '30px' }} onClick={this.cancelButton}>OK</button>
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
      url: `${baseURL}api/games`,
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
          currentGameName: newName,
          players: []
        })
      })
      .catch(function (e) {
        console.log(e)
      })

  }

  updatePlayer = (newPlayerInfo) => {

    axios({
      method: 'put',
      url: `${baseURL}api/players/${newPlayerInfo.id}`,
      headers: {
        Authorization: this.props.JWT,
        user: this.props.user
      },
      data: {
        player: newPlayerInfo
      }
    })
      .then((response) => {
        this.loadPlayers(this.state.currentGame)
      })
      .catch(function (e) {
        console.log(e)
      })
  }

  deletePlayer = async (player) => {
    await axios.delete(
      `${baseURL}api/players/${player}`,
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
      this.loadPlayers(this.state.currentGame)
    })
      .catch(function (e) {
        console.log(e)
      })
  }

  deleteGame = () => {
    if (this.state.infoModal) {
      axios.delete(
        `${baseURL}api/games/${this.state.currentGame}`,
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
          <div className='deletePrompt'>
            <div className='deleteBox' >
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
              <h1 style={{ color: 'darkred' }}>You must have at least one game</h1>
              <h4>Create a new game before deleting {this.state.currentGameName}</h4>
              <button className='cancel-btn' style={{ height: '30px' }} onClick={this.cancelButton}>OK</button>
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

    this.setState({ currentGame: gameID })
    this.loadPlayers(gameID)
  }

  componentDidMount() {
    this.loadGames()
    // Show tutorial and information for test account
    if (this.props.user === 'test') {
      this.setState({
        showTestUser: true,
        tutorial: true
      })
    }
  }
  closeTutorial = () => {
    this.setState({tutorial: false})
  }
  closeTestUser = (e) => {
    e.preventDefault();
    this.setState({showTestUser: false})
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
        {this.state.showTestUser && <div className='testUserModal'>
          <p className='itemHeader'>
            Welcome to the DM Player Tracker
          </p>
          <hr className='itemHr' />
          <p className='itemDescription'>
            {'This tool is for Dungeon Masters to keep track of their players in their Dungeons & Dragons Campaigns.\n\nFeel free to play around, add a new player/game, change the players stats or change the players class/race/level to connect to api\'s and fill in some stats.\n\n'}
          </p>
          <button className='testUser-btn' onClick={this.closeTestUser}>
            Continue
          </button>
        </div>}
        <PlayerDetails tutorial={this.state.tutorial} closeTutorial={this.closeTutorial} deletePlayer={this.deletePlayer} show={this.state.showPlayer} playerInfo={this.state.playerDetails} closeInfo={this.closePlayerInfo} savePlayer={this.updatePlayer} jwt={this.props.JWT} reloadPlayer={this.showPlayerInfo} />
        {this.state.showMenu && <Footer newGame={this.newGame} deleteGame={this.deleteGame} games={this.state.games} user={this.props.user} currentGame={this.state.currentGame} changeGame={this.changeGame} />}
        {this.state.infoModal}
      </div>

    )
  }
}
export default PlayerList;