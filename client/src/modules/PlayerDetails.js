import React, { Component } from 'react';
class PlayerDetails extends Component {


  
  render() {
    let showHideClassName = this.props.show ? 'infoModal display-block' : 'infoModal display-none';
    return (
      <div className={showHideClassName}>
      <section className='modal-main'>
        <div className='playerInfo'>
          <h1>{this.props.playerInfo.charName}</h1>
          <h3><em>{this.props.playerInfo.playerName}</em></h3>
          <button className='closePlayerInfo'
            onClick={this.props.closeInfo}
            >
            Close
          </button>
        </div>
      </section>
    </div>
    )
  }
}

export default PlayerDetails;