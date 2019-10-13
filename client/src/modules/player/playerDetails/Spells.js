

import React, { Component } from 'react';

export default class Spells extends Component {
  
  // TODO Spell Display: show modal with spell details - need to change style of adding spells to allow all fields(range, components etc.)

  addSpell = (event) => {
    event.preventDefault();
    this.props.addItem('Spell')

  }
  fetchSpells = () => {
    // TODO tidy this up and add fields for casting time etc, perhaps add URL for existing spells instead of full details
    let spells = this.props.playerInfo.spells.map((spell, index) => {
     
      // remove this once restructuring is complete and old users updated
      if (typeof spell === 'string'){
        spell = JSON.parse(spell)
      }   
        
      return (
        // eslint-disable-next-line
        <a href='#' title={spell.description} key={index} onClick={this.showSpellDetails} >
        <h3>
          {spell.name}
        </h3>
        </a>
      )
    })
    return spells
  }
  showSpellDetails = (event) => {
    const spell = {
      itemType: 'Spell',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(spell)
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