import React, { Component } from 'react';
import BaseStats from './playerDetails/BaseStats';
import Abilities from './playerDetails/Abilities';
import PlayerInfo from './playerDetails/PlayerInfo';
import Spells from './playerDetails/Spells';
import Notes from './playerDetails/Notes';
import EditPlayer from './playerDetails/EditPlayer';
import AddSomething from './playerDetails/AddSomething';
import EditProfs from './playerDetails/EditProfs';
import updateHelper from './Helpers/updateHelper';
import itemHelper from './Helpers/itemHelper';
import raceHelper from './Helpers/raceHelper';
import levelHelper from './Helpers/levelHelper';
import DeletePrompt from './playerDetails/modals/DeletePrompt';
import SavePrompt from './playerDetails/modals/SavePrompt';
import ShowItemDetails from './playerDetails/modals/ShowItemDetails.js';

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
      showItem: false
    }
  }
  addItem = (type) => {
    this.setState({
      addSomething: true,
      addThis: type,
      editField: false,
      editCurrent: '',
      addProfs: false
    })
  }
  editProficiencies = (event) => {
    this.setState({
      editField: false,
      editing: event.target.id,
      addSomething: false,
      addThis: false,
      addProfs: true,
      currentValue: null
    })
  }

  exiting = () => {
    if (this.state.editField || this.state.showItem || this.state.addSomething || this.state.deletePrompt || this.state.addProfs) {
      this.cancelButton()
    } else {
      if (this.state.somethingChanged) {
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
    } else {
      currentValue = null
    }
    this.setState({
      editField: true,
      editing: event.target.id,
      editCurrent: currentValue,
      addSomething: false,
      addThis: false,
      addProfs: false
    })

  }
  // FIXME - Section needs to be refactored or put into a helper
  savePlayer = async(changes) => {
    if (changes.changeType === 'addItem') {
      const updatedPlayer = itemHelper(changes, this.state.player, this.props.jwt)
      this.setState({
        editField: false,
        editing: '',
        editCurrent: false,
        somethingChanged: true,
        player: updatedPlayer,
        addThis: '',
        addSomething: false,
        addProfs: false
      })
    } else if (changes.changeType === 'editProfs') {
      let updatedPlayer = this.state.player
      updatedPlayer.proficiencies = changes.newValue
      this.setState({
        editField: false,
        editCurrent: false,
        somethingChanged: true,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    } else if (changes.changeType === 'baseStat') {
      let updatedPlayer = this.state.player
      updatedPlayer[changes.stat] += changes.newValue
      this.setState({
        editField: false,
        editCurrent: false,
        somethingChanged: true,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    } else if (changes.changeType === 'changeRace') {
      const updatedPlayer = await raceHelper(changes, this.state.player, this.props.jwt)
      this.setState({
        editField: false,
        editCurrent: false,
        somethingChanged: true,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    } else if (changes.changeType === 'changeClass') {
      const updater = await updateHelper(this.state.changedDetails, changes, this.state.player)
      const updatedDetails = updater.details
      let updatedPlayer = await levelHelper(updater.player, 0, this.props.jwt)
      this.setState({
        editField: false,
        editing: '',
        editCurrent: false,
        somethingChanged: true,
        changedDetails: updatedDetails,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    } else if (changes.changeType === 'level') {
      let updatedPlayer = await levelHelper(this.state.player, changes.newValue, this.props.jwt)
      this.setState({
        editField: false,
        editCurrent: false,
        somethingChanged: true,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    } else {
      const updater = updateHelper(this.state.changedDetails, changes, this.state.player)
      const updatedDetails = updater.details
      const updatedPlayer = updater.player
      this.setState({
        editField: false,
        editing: '',
        editCurrent: false,
        somethingChanged: true,
        changedDetails: updatedDetails,
        player: updatedPlayer,
        addSomething: false,
        addProfs: false
      })
    }

  }

  cancelButton = () => {
    this.setState({
      editField: false,
      editing: '',
      editCurrent: false,
      addSomething: false,
      addThis: '',
      deletePrompt: false,
      addProfs: false,
      showItem: false
    })
  }
  saveAndClose = async () => {
    let player = this.state.player
    let profs = JSON.stringify(player.proficiencies)
    player.proficiencies = profs
    await this.props.savePlayer(player)
    this.setState({
      savePrompt: false,
      somethingChanged: false
    })
    this.props.closeInfo()
  }
  closeWwithoutSaving = () => {
    this.setState({
      savePrompt: false,
      somethingChanged: false,
      player: this.state.originalPlayer
    })
    this.props.closeInfo()
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      player: newProps.playerInfo,
      originalPlayer: newProps.playerInfo,
      changedDetails: []
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
    this.setState({ deletePrompt: false })
    this.props.deletePlayer(this.state.player.id)
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
        {this.state.deletePrompt && <DeletePrompt yesDeletePlayer={this.yesDeletePlayer} cancelButton={this.cancelButton} player={this.state.player} />}
        {this.state.savePrompt && <SavePrompt saveAndClose={this.saveAndClose} closeWwithoutSaving={this.closeWwithoutSaving} />}
        {this.state.editField && <EditPlayer cancelButton={this.cancelButton} savePlayer={this.savePlayer} field={this.state.editing} currentValue={this.state.editCurrent} />}
        {this.state.addSomething && <AddSomething cancelButton={this.cancelButton} savePlayer={this.savePlayer} item={this.state.addThis} jwt={this.props.jwt} />}
        {this.state.addProfs && <EditProfs cancelButton={this.cancelButton} savePlayer={this.savePlayer} field={this.state.editing} proficiencies={this.state.player.proficiencies} />}
        {this.state.showItem && <ShowItemDetails player={this.state.player} closeItemDetails={this.closeItemDetails} item={this.state.currentItem} />}
        <section className='modal-main'>
          <div className='playerInfo'>
            <div className='playerHeader'>
              <button className='deletePlayer' onClick={this.deletePlayer}>
                DELETE
              </button>
              <button className='close-modal' onClick={this.exiting}>
                &times;
              </button>

              <h1 className='charName' id='Character Name' onClick={this.editPlayer}>{this.state.player.charName}</h1>
              <h3 className='playerName' onClick={this.editPlayer}><em id='Player Name' >{this.state.player.playerName}</em></h3>
            </div>
            <div className='playerDetails'>
              <BaseStats editProfs={this.editProficiencies} editStats={this.editPlayer} playerInfo={this.state.player} changeBaseStats={this.savePlayer} />
              <Abilities showItem={this.showItem} addItem={this.addItem} playerInfo={this.state.player} />
              <PlayerInfo changeLevel={this.savePlayer} editStats={this.editPlayer} playerInfo={this.state.player} />
              <Spells showItem={this.showItem} addItem={this.addItem} playerInfo={this.state.player} />
              <Notes showItem={this.showItem} addItem={this.addItem} playerInfo={this.state.player} />
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