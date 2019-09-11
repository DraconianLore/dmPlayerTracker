import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGames: 1
    }
  }
  changeGame = (event) => {
    this.props.changeGame(parseInt(event.target.id))
  }
  newGame = () => {
    this.props.newGame()
  }

  componentWillReceiveProps(newProps) {
    if (this.state.numberOfGames !== newProps.numberOfGames) {
      this.setState({ numberOfGames: newProps.games.length })
    }
  }

  render() {
    let gameList = this.props.games.map((game) => {
      let gameClass = "other-game"
      if (game.id === this.props.currentGame) {
        gameClass = "current-game"
      }
      return (
        <button id={game.id} className={gameClass} onClick={this.changeGame} key={game.id}>
          {game.name}
        </button>
      )
    })
    return (

      <div className="bottombar">
        <div className="bottombar-main">
          <h2>Your Games :</h2>
          {gameList}
        </div>
        <div className="bottombar-right">
          <button id='999' className='settings-btn' onClick={this.changeGame}>
            testing game
          </button>
          <button className='delete-btn' onClick={this.props.deleteGame}>
            Delete Game
          </button>
          <button className="newGame-btn" onClick={this.newGame}>
            New Game
          </button>
        </div>


      </div>
    )
  }
}