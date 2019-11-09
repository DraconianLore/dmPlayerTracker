import React, { Component } from 'react';


export default class PlayerInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      warning: false
    }
  }
  
  calculatePerception = () => {
    let perception = 10 + Math.floor((this.props.playerInfo.baseWIS - 10) / 2)
    if (this.props.playerInfo.proficiencies) {
      if (this.props.playerInfo.proficiencies.wisPer) {
        perception += (this.props.playerInfo.proficiency * this.props.playerInfo.proficiencies.wisPer)
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
          {this.state.warning}

          <div className='playerInfoBoxWide'>
            <div className='baseStat-inner'>
              <span className='info-header'>Level</span>
              <div className='stat'>
                <strong>{this.props.playerInfo.level}</strong>
              </div>
            </div>
          </div>
          <button className='playerInfoBoxWide'>
            <span className='info-header'>Race</span>
            <br />
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.race}</strong>
            </span>
          </button>
          <button className='playerInfoBoxWide'>
            <span className='info-header'>Class</span>
            <br />
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.classname}</strong>
            </span>
          </button>
          <button className='playerInfoBoxWide'>
            <span className='info-header'>Background</span>
            <br />
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.background}</strong>
            </span>
          </button>
          <button className='playerInfoBox'>
            <span className='info-header'>Speed</span>
            <br />
            <span className='stat'>
              <strong>{this.props.playerInfo.speed}</strong>
            </span>
          </button>
          <button className='playerInfoBox'>
            <span className='info-header'>AC</span>
            <br />
            <span className='stat'>
              <strong>{this.props.playerInfo.AC}</strong>
            </span>
          </button>
          <button className='playerInfoBox'>
            <span className='info-header'>Save DC</span>
            <br />
            <span className='stat'>
              <strong>{this.props.playerInfo.saveDC || 0}</strong>
            </span>
          </button>
          <button className='playerInfoBox'>
            <span className='info-header'>Hit Die</span>
            <br />
            <span className='stat'>
              <strong>{this.props.playerInfo.hitDie}</strong>
            </span>
          </button>
          <button className='playerInfoBoxWide'>
            <span className='info-header'>Max HP</span>
            <br />
            <span className='stat'>
              <strong className='info-string'>{this.props.playerInfo.maxHP}</strong>
            </span>
          </button>
          <div className='playerInfoBoxWide'>
            <span className='info-header'>Passive Perception</span>
            <br />
            <span className='stat'>
              <strong>{this.calculatePerception().toString()}</strong>
            </span>
          </div>

        <div className='playerInfoBoxWide'>
        <img id='Profile Picture' className='profilePic' src={this.props.playerInfo.portrait} alt={this.props.playerInfo.charName} />
          </div>
        </div>

      </div>
    )
  }
}