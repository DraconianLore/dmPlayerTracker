

import React, { Component } from 'react';

export default class Spells extends Component {
  
  // TODO Spell Display: show modal with spell details - change style of adding spells to allow all fields(range, components etc.)

  addSpell = (event) => {
    event.preventDefault();
    this.props.addItem('Spell')

  }
  fetchSpells = () => {

    let spells = this.props.playerInfo.spells.map((spell, index) => {
      spell = JSON.parse(spell)
      return (
        // eslint-disable-next-line
        <a href='#' title={spell.description} key={index}>

        <h3>
          {spell.name}
        </h3>
        </a>
      )
    })
    return spells
  }
  render() {
    
    return (
      <div className='pdColumn'>
        <h1>Spells</h1>
        <hr />
        {this.props.playerInfo.spells && <span className='abilityList'>
        {this.fetchSpells()}
        </span>}
        <button className='addItem' onClick={this.addSpell}>
          Add Spell
        </button>
      </div>
    )
  }
}