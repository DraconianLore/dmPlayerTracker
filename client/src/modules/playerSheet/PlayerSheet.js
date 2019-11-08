import React, { Component } from 'react';
import BaseStats from './playerSheet/BaseStats';
import Abilities from './playerSheet/Abilities';
import PlayerInfo from './playerSheet/PlayerInfo';
import Spells from './playerSheet/Spells';
import Notes from './playerSheet/Notes';
import ShowItemDetails from './playerSheet/modals/ShowItemDetails';

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.playerInfo,
      originalPlayer: props.playerInfo,
      somethingChanged: false, // if changed made prompt to save
      changedDetails: [],
      savePrompt: false,
      editField: false,
      addSomething: false,
      addThis: '',
      addProfs: false,
      currentItem: '',
      showItem: false,
      tutorial: false
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