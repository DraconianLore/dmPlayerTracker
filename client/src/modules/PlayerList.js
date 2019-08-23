import React, { Component } from 'react';
import Player from "./Player";
import PlayerDetails from "./PlayerDetails"

// test data
const players = [
  { id: 1, playerName: 'Player1', charName: 'Character Name 1', class: 'Monk', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 2, playerName: 'Player2', charName: 'Character Name 2', class: 'Barbarian', race: 'Dwarf', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 3, playerName: 'Player3', charName: 'Character Name 3', class: 'Sorcerer', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 4, playerName: 'Player4', charName: 'Character Name 4', class: 'Fighter', race: 'Dragonborn', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 5, playerName: 'Player5', charName: 'Character Name 5', class: 'Rogue', race: 'Human', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 6, playerName: 'Player6', charName: 'Character Name 6', class: 'Warlock', race: 'Half-elf', hp: 22, maxHp: 22, ac: 12, saveDc: 10, pPerception: 11 },
  { id: 7, playerName: 'Player7', charName: 'Character Name 7', class: 'Ranger', race: 'Elf', hp: 122, maxHp: 140, ac: 12, saveDc: 10, pPerception: 11 },
]


class PlayerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showPlayer: false,
      playerDetails: {}
    }
    this.showPlayerInfo = this.showPlayerInfo.bind(this);
    this.closePlayerInfo = this.closePlayerInfo.bind(this);
  }
  showPlayerInfo(player) {
    this.setState({
      showPlayer: true,
      playerDetails: player
    })
    setTimeout(() => {
      console.log(this.state)
    }, 10);
  }
  closePlayerInfo = () => {
    this.setState({
      showPlayer: false,
      playerDetails: {}
    })
  }

  render() {
    const playerList = players.map((player) => {
      return (
        <Player key={player.id} info={player} showPlayer={this.showPlayerInfo} />
      )
    })

    return (
      <div>
        <ul id="hexGrid">
          {playerList}
        </ul>
        <PlayerDetails show={this.state.showPlayer} playerInfo={this.state.playerDetails} closeInfo={this.closePlayerInfo}/>
      </div>

    )
  }
}
export default PlayerList;