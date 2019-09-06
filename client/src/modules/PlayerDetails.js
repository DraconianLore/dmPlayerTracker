import React, { Component } from 'react';
import BaseStats from './playerDetails/BaseStats';
import Abilities from './playerDetails/Abilities';
import PlayerInfo from './playerDetails/PlayerInfo';
import Spells from './playerDetails/Spells';
import Notes from './playerDetails/Notes';
import EditPlayer from './playerDetails/EditPlayer';

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.playerInfo,
      somethingChanged: false, // if changed made prompt to save
      savePrompt: false,
      editField: false
    }
  }

  exiting = () => {
    if (this.state.somethingChanged) {
      // ask if they want to save changes
      this.setState({ savePrompt: true })
    } else {
      this.closeWwithoutSaving();
    }
  }
  editPlayer = (event) => {
    console.log(event.target.id)
    this.setState({
      editField: true,
      editing: event.target.id
    })

  }
  savePlayer = (changes) => {
    console.log('Save changes to', changes)
    this.setState({
      editField: false,
      editing: ''
    })
  }
  cancelButton = () => {
    this.setState({
      editField: false,
      editing: ''
    })  
  }
  saveAndClose = () => {
    this.props.savePlayer(this.state.player)
    this.setState({ savePrompt: false })
    this.props.closeInfo()
  }
  closeWwithoutSaving = () => {
    this.setState({ savePrompt: false })
    this.props.closeInfo()
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      player: newProps.playerInfo
    })
  }

  // catch when user presses 'ESC'
  escPressed = (event) => {
    if(event.keyCode === 27) {
      if(this.state.editField) {
        this.cancelButton()
      } else {
        this.exiting();
      }
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escPressed, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escPressed, false);
  }

  render() {
    let showHideClassName = this.props.show ? 'infoModal display-block' : 'infoModal display-none';
    return (
      <div className={showHideClassName}>
        {this.state.savePrompt && <div className='savePrompt'>
          <div className='promptBox'>
            <h1>Save your changes?</h1>
            <br />
            <button onClick={this.closeWwithoutSaving}>Discard</button> <button onClick={this.saveAndClose}>Save changes</button>
          </div>
        </div>}
        {this.state.editField && <EditPlayer cancelButton={this.cancelButton} savePlayer={this.savePlayer} field={this.state.editing} />}
        
        <section className='modal-main'>
          <div className='playerInfo'>
            <div className='playerHeader'>
            <h1 className='charName' id='Character Name' onClick={this.editPlayer}>{this.state.player.charName}</h1>
            <h3 className='playerName' onClick={this.editPlayer}><em id='Player Name' >{this.state.player.playerName}</em></h3>
            </div>
            <div className='playerDetails'>
              <BaseStats playerInfo={this.state.player}/>
              <Abilities playerInfo={this.state.player} />
              <PlayerInfo playerInfo={this.state.player} />
              <Spells playerInfo={this.state.player} />
              <Notes playerInfo={this.state.player} />
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