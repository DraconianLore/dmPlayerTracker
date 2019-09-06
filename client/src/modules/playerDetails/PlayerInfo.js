import React, { Component } from 'react';

export default class PlayerInfo extends Component {

  calculatePerception = () => {
    let perception = 10 + Math.floor((this.props.playerInfo.baseWIS - 10) / 2)
    if (this.props.playerInfo.proficiencies) {
      if (this.props.playerInfo.proficiencies['perception']) {

        perception += this.props.playerInfo.proficiency
      }
    }
    return perception
  }
  render() {

    return (
      <div className='pdColumn'>
        <h1>Player Info</h1>
        <hr />
        <div className='playerInfoContainer'>
        <div className='playerInfoBoxWide'>
            <h3>Level</h3>
            <span className='stat'>
              <strong>{this.props.playerInfo.level || 1}</strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Race</h3>
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.race || 'NO RACE'}</strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Class</h3>
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.classname || 'NO CLASS'}</strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Background</h3>
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.background || 'NONE'}</strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Speed</h3>
            <span className='stat'>
              <strong>{this.props.playerInfo.speed || 30}</strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>AC</h3>
            <span className='stat'>
              <strong>{this.props.playerInfo.AC || 10}</strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Save DC</h3>
            <span className='stat'>
              <strong>{this.props.playerInfo.saveDc || 0}</strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Hit Die</h3>
            <span className='stat'>
              <strong>{this.props.playerInfo.hitDie || 0}</strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Passive Perception</h3>
            <span className='stat'>
              <strong>{this.calculatePerception().toString()}</strong>
            </span>
          </div>
          
        </div>

      </div>
    )
  }
}