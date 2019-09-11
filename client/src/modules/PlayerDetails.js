import React, { Component } from 'react';
import BaseStats from './playerDetails/BaseStats';
import Abilities from './playerDetails/Abilities';
import PlayerInfo from './playerDetails/PlayerInfo';
import Spells from './playerDetails/Spells';
import Notes from './playerDetails/Notes';
import EditPlayer from './playerDetails/EditPlayer';
import AddSomething from './playerDetails/AddSomething';

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.playerInfo,
      somethingChanged: false, // if changed made prompt to save
      savePrompt: false,
      editField: false,
      addSomething: false,
      addThis: ''
    }
  }
  addItem = (type) => {
    this.setState({
      addSomething: true,
      addThis: type,
      editField: false,
      editCurrent: ''
    })
  }
  exiting = () => {
    if (this.state.editField || this.state.addSomething || this.state.deletePrompt) {
      this.cancelButton()
    } else {
      if (this.state.somethingChanged) {
        // TODO check and fix
        this.setState({ savePrompt: true })
      } else {
        this.closeWwithoutSaving();
      }
    }
  }
  editPlayer = (event) => {
    event.preventDefault();
    let currentValue = ''
    if (event.target.querySelector('strong')) {
      currentValue = event.target.querySelector('strong').innerText
    } else if (event.target.querySelector('.profList')) {
      currentValue = this.state.player.proficiencies
    } else {
      currentValue = null
    }
    this.setState({
      editField: true,
      editing: event.target.id,
      editCurrent: currentValue,
      addSomething: false,
      addThis: false
    })

  }
  savePlayer = (changes) => {
    // TODO save changes
    console.log('Save changes to', changes)
    this.setState({
      editField: false,
      editing: '',
      editCurrent: false
    })
  }
  cancelButton = () => {
    this.setState({
      editField: false,
      editing: '',
      editCurrent: false,
      addSomething: false,
      addThis: '',
      deletePrompt: false
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
    if (event.keyCode === 27) {

      this.exiting();

    }
  }

  deletePlayer = () => {
    this.setState({
      deletePrompt: true
    })
  }
  yesDeletePlayer = () => {
    this.setState({deletePrompt: false})
    this.props.deletePlayer(this.state.player.id)
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
        {this.state.deletePrompt && <div className='savePrompt'>
        <div className='promptBox' >
            <h1>Delete {this.state.player.charName}</h1>
            <button style={{marginRight: '5px', backgroundColor: 'black'}} className='accept-btn' onClick={this.yesDeletePlayer}>
              DELETE
              </button>
            <button className='cancel-btn' onClick={this.cancelButton}>Cancel</button> 
        </div>
          
          </div>}
        {this.state.savePrompt && <div className='savePrompt'>
          <div className='promptBox'>
            <h1>Save your changes?</h1>
            <br />
            <button onClick={this.closeWwithoutSaving}>Discard</button> <button onClick={this.saveAndClose}>Save changes</button>
          </div>
        </div>}
        {this.state.editField && <EditPlayer cancelButton={this.cancelButton} savePlayer={this.savePlayer} field={this.state.editing} currentValue={this.state.editCurrent}/>}
        {this.state.addSomething && <AddSomething cancelButton={this.cancelButton} savePlayer={this.savePlayer} item={this.state.addThis} />}
        <section className='modal-main'>
          <div className='playerInfo'>
            <div className='playerHeader'>
              <button className='deletePlayer' onClick={this.deletePlayer}>
                DELETE
              </button>
              <h1 className='charName' id='Character Name' onClick={this.editPlayer}>{this.state.player.charName}</h1>
              <h3 className='playerName' onClick={this.editPlayer}><em id='Player Name' >{this.state.player.playerName}</em></h3>
            </div>
            <div className='playerDetails'>
              <BaseStats editStats={this.editPlayer} playerInfo={this.state.player} />
              <Abilities addItem={this.addItem} playerInfo={this.state.player} />
              <PlayerInfo editStats={this.editPlayer} playerInfo={this.state.player} />
              <Spells addItem={this.addItem} playerInfo={this.state.player} />
              <Notes addItem={this.addItem} playerInfo={this.state.player} />
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