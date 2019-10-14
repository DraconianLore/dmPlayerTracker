import React, { Component } from 'react';

export default class Abilities extends Component {

  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }

  showFeats = (playerID) => {
    let abilities = this.props.playerInfo.playerfeats.map(async (ability, index) => {
  
      console.log(ability)
      return (
        // eslint-disable-next-line
        <a href='#' title={ability.description} key={index} onClick={this.showAbilityDetails} >
          <h3>
            {ability.name}
          </h3>
        </a>
      )
    })
    return abilities
  }

  render() {
    console.log(this.props.playerInfo)
    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
        {this.props.playerInfo.playerFeats && <span className='abilityList'>
          {this.showFeats()}
        </span>}
        <button className='addItem' onClick={this.addAbility}>
          Add Ability
        </button>
      </div>
    )
  }
}