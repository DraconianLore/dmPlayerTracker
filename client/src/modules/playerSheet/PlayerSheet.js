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
    
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escPressed, false);
  }
  componentWillMount() {
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
  render() {
    let showHideClassName = this.props.show ? 'infoModal display-block' : 'infoModal display-none';
    return (
      <div className={showHideClassName}>
        {this.state.showItem && <ShowItemDetails player={this.state.player} closeItemDetails={this.closeItemDetails} item={this.state.currentItem} JWT={this.props.jwt} updatePlayer={this.reloadPlayer} />}
        <section className='modal-main'>
          <div className='playerInfo'>
            <div className='playerHeader'>
              <h1 className='charName'>{this.state.player.charName}</h1>
              <h3 className='playerName'><em id='Player Name' >{this.state.player.playerName}</em></h3>
            </div>
            <div className='playerDetails'>
              <BaseStats editProfs={this.editProficiencies} playerInfo={this.state.player} />
              <Abilities showItem={this.showItem} playerInfo={this.state.player} />
              <PlayerInfo changeLevel={this.savePlayer} playerInfo={this.state.player} />
              <Spells showItem={this.showItem} playerInfo={this.state.player} />
              <Notes showItem={this.showItem} playerInfo={this.state.player} />
            </div>
          </div>


          <div className='closeModal cm-top' onClick={this.exiting} />
          <div className='closeModal cm-right' onClick={this.exiting} />
          <div className='closeModal cm-bottom' onClick={this.exiting} />
          <div className='closeModal cm-left' onClick={this.exiting} />

         </section>

      </div>
    )
  }
}

export default PlayerDetails;