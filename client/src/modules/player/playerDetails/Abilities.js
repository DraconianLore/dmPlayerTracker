import React, { Component } from 'react';

export default class Abilities extends Component {
  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }
  fetchAbilities = () => {

    let abilities = this.props.playerInfo.abilities.map((ability, index) => {
      ability = JSON.parse(ability)

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
  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
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