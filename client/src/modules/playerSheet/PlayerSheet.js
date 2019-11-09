import React, { Component } from 'react';
import axios from 'axios';
import BaseStats from './playerSheet/BaseStats';
import Abilities from './playerSheet/Abilities';
import PlayerInfo from './playerSheet/PlayerInfo';
import Spells from './playerSheet/Spells';
import Notes from './playerSheet/Notes';
import ShowItemDetails from './playerSheet/modals/ShowItemDetails';
const baseURL = process.env.REACT_APP_BASEURL;

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: '',
      addSomething: false,
      currentItem: '',
      showItem: false,
    }
  }
  
  
  // catch when user presses 'ESC'
  escPressed = (event) => {
    if (event.keyCode === 27) {
      this.closeItemDetails();
    }
  }

  showItem = (item) => {
    this.setState({
      currentItem: item,
      showItem: true
    })
  }
  closeItemDetails = () => {
    this.setState({
      showItem: false,
      currentItem: ''
    })
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escPressed, false);
    let player = {}
    axios({
      method: 'get',
      url: `${baseURL}api/players/${this.props.player}`,
      headers: {
        Authorization: this.props.JWT,
      }
    })
      .then((response) => {
        player = response.data.player
        player.feats = response.data.feats
        player.spells = response.data.spells
        console.log('XXX', player)
        if (player.proficiencies) {
          player.proficiencies = JSON.parse(player.proficiencies)
        }
          this.setState({
            loaded: true,
            player: player
        })
      })
      .catch(function (e) {
        console.log(e)
      })
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escPressed, false);
  }

  render() {
    return (
      <div className='infoModal display-block'>
        {this.state.showItem && <ShowItemDetails player={this.state.player} closeItemDetails={this.closeItemDetails} item={this.state.currentItem} JWT={this.props.jwt} updatePlayer={this.reloadPlayer} />}
        {this.state.loaded && <section className='modal-main'>
          <div className='playerSheet'>
            <div className='playerHeader'>
            <button className='player-logout' onClick={this.props.logout}>
                Log out
              </button>
              <h1 className='charName'>{this.state.player.charName}</h1>
              <h3 className='playerName'><em id='Player Name' >{this.state.player.playerName}</em></h3>
            </div>
            <div className='playerDetails'>
              <BaseStats playerInfo={this.state.player} />
              <Abilities showItem={this.showItem} playerInfo={this.state.player} />
              <PlayerInfo changeLevel={this.savePlayer} playerInfo={this.state.player} />
              <Spells showItem={this.showItem} playerInfo={this.state.player} />
              <Notes showItem={this.showItem} playerInfo={this.state.player} />
            </div>
          </div>


        
         </section>}

      </div>
    )
  }
}

export default PlayerDetails;