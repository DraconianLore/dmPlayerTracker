import React, { Component } from 'react';
class PlayerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.playerInfo,
      somethingChanged: false,
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
  render() {
    let showHideClassName = this.props.show ? 'infoModal display-block' : 'infoModal display-none';
    return (
      <div className={showHideClassName}>
        <div className='savePrompt'>
          <div className='promptBox'>
            <h1>Save your changes?</h1>
            <br />
            <button onClick={this.closeWwithoutSaving}>Discard</button> <button onClick={this.saveAndClose}>Save changes</button>
          </div>
        </div>
        <section className='modal-main'>
          <div className='playerInfo'>
            <h1>{this.state.player.charName}</h1>
            <h3><em>{this.state.player.playerName}</em></h3>
            <div className='playerDetails'>
              <div className='pdColumn'>
                <div className='playerStat'>
                  <h1>STR</h1>
                  <strong>12</strong> (+1)
                    <hr className='statHr' />
                  <p className='proficiencies'>
                    Saving Throws
                    <br />
                    Athletics
                    </p>
                </div>
                <div className='playerStat'>
                  <h1>DEX</h1>
                  <strong>17</strong>
                  <h3>(+3)</h3>
                </div>
                <div className='playerStat'>
                  <h1>CON</h1>
                  <strong>10</strong> (+0)
                </div>
                <div className='playerStat'>
                  <h1>INT</h1>
                  <strong>7</strong> (-2)
                </div>
                <div className='playerStat'>
                  <h1>WIS</h1>
                  <strong>13</strong> (+1)
                </div>
                <div className='playerStat'>
                  <h1>CHA</h1>
                  <strong>12</strong> (+1)
                </div>
              </div>
              <div className='pdColumn'>
                <h3>abilities</h3>
                <h3>abilities</h3>
                <h3>abilities</h3>
                <h3>abilities</h3>

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