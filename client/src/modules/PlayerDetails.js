import React, { Component } from 'react';
import BaseStats from './playerDetails/BaseStats';
import Abilities from './playerDetails/Abilities';

class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.playerInfo,
      somethingChanged: false, // if changed made prompt to save
      savePrompt: false
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
      this.exiting();
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
        <section className='modal-main'>
          <div className='playerInfo'>
            <h1>{this.state.player.charName}</h1>
            <h3><em>{this.state.player.playerName}</em></h3>
            <div className='playerDetails'>
              <BaseStats playerInfo={this.state.player}/>
              <Abilities playerInfo={this.state.player} />
              <div className='pdColumn'>
                <h1>Player Info</h1>
              </div>
              <div className='pdColumn'>
                <h1>Spells and Cantrips</h1>
              </div>
              <div className='pdColumn'>
                <h1>Important Items</h1>
                <hr className='pdSectionBreak' />
                <h1>Other Important Notes</h1>
              </div>
              
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