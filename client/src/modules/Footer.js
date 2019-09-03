import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGames: 1
    }
  }
  changeGame = (event) => {
    this.props.changeGame(event.target.id)
    

  }
  newGame = () => {
    console.log('new game clicked')
  }
  deleteGame = () => {

  }
  componentWillReceiveProps(newProps) {
    this.setState({numberOfGames: newProps.games.length})
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
          {this.state.numberOfGames < 5 && <button className="newGame-btn" onClick={this.newGame}>
            New Game
        </button>}
        </div>


      </div>
    )
  }
}