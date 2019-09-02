import React, { Component } from 'react';

const games = [
  {id: 1, name: "Mythos"},
  {id: 2, name: "Some other game"},
  {id: 3, name: "Some other game"},
  {id: 4, name: "Some other game"},
  // {id: 5, name: "Some other game"}
  
]


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfGames: 1
    }
  }
  changeGame = (event) => {
    console.log(event.target.id)
    // this.props.changeGame(event.target.id)
  }
  newGame = () => {
    console.log('new game clicked')
  }
  deleteGame = () => {

  }
  componentDidMount() {
    this.setState({numberOfGames: games.length})
  }
  render() {
  
    const gameList = games.map((game) => {
      let gameClass = "other-game"
      if (game.id === this.props.currentGame) {
        gameClass = "current-game"
      }
      return (
        <button className={gameClass} onClick={this.changeGame} key={game.id}>
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