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
                    <strong>17</strong> (+3)
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
                <h3>more stats</h3>
                <h3>more stats</h3>
                <h3>more stats</h3>
                <h3>more stats</h3>

              </div>
            </div>
          </div>
          <div className='closeModal cm-top' onClick={this.props.closeInfo} />
          <div className='closeModal cm-right' onClick={this.props.closeInfo} />
          <div className='closeModal cm-bottom' onClick={this.props.closeInfo} />
          <div className='closeModal cm-left' onClick={this.props.closeInfo} />

        </section>
      </div>
    )
  }
}

export default PlayerDetails;