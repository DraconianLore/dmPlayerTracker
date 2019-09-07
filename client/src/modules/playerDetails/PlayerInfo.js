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
              <strong><a href=''  onClick={this.props.editStats} id='Level'>{this.props.playerInfo.level}</a></strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Race</h3>
            <span className='stat'>
              <strong className='info-string'><a href=''  onClick={this.props.editStats} id='Race'>{this.props.playerInfo.race}</a></strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Class</h3>
            <span className='stat'>
              <strong className='info-string'><a href=''  onClick={this.props.editStats} id='Class'>{this.props.playerInfo.classname}</a></strong>
            </span>
          </div>
          <div className='playerInfoBoxWide'>
            <h3>Background</h3>
            <span className='stat'>
              <strong className='info-string'><a href=''  onClick={this.props.editStats} id='Background'>{this.props.playerInfo.background}</a></strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Speed</h3>
            <span className='stat'>
              <strong><a href=''  onClick={this.props.editStats} id='Speed'>{this.props.playerInfo.speed}</a></strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>AC</h3>
            <span className='stat'>
              <strong><a href=''  onClick={this.props.editStats} id='Armour Class'>{this.props.playerInfo.AC}</a></strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Save DC</h3>
            <span className='stat'>
              <strong><a href=''  onClick={this.props.editStats} id='Save DC'>{this.props.playerInfo.saveDc || 0}</a></strong>
            </span>
          </div>
          <div className='playerInfoBox'>
            <h3>Hit Die</h3>
            <span className='stat'>
              <strong><a href=''  onClick={this.props.editStats} id='Hit Die'>{this.props.playerInfo.hitDie}</a></strong>
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