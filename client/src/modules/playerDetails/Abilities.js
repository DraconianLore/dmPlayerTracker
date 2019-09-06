import React, { Component } from 'react';

export default class Abilities extends Component {

  addAbility = (event) => {
    event.preventDefault();
    console.log('Add Ability Clicked')
  }
  fetchAbilities = () => {

    let abilities = this.props.playerInfo.abilities.map((ability) => {
      return (
        // eslint-disable-next-line
        <a href='' title={ability.description}>

        <h3 key={ability.id}>
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