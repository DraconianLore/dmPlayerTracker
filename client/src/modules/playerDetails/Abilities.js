import React, { Component } from 'react';

export default class Abilities extends Component {

  // TODO Abilities & Feats: get abilities from race and class, add FEAT search

  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }
  fetchAbilities = () => {

    let abilities = this.props.playerInfo.abilities.map((ability, index) => {
      ability = JSON.parse(ability)

      return (
        // eslint-disable-next-line
        <a href='#' title={ability.description} key={index}>
        <h3>
          {ability.name}
        </h3>
        </a>
      )
    })
    return abilities
  }
  render() {
    
    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
        {this.props.playerInfo.abilities && <span className='abilityList'>
        {this.fetchAbilities()}
        </span>}
        <button className='addItem' onClick={this.addAbility}>
          Add Ability
        </button>
      </div>
    )
  }
}