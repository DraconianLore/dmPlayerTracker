

import React, { Component } from 'react';

export default class Spells extends Component {

  addSpell = (event) => {
    event.preventDefault();
    this.props.addItem('Spell')

  }
  fetchSpells = () => {

    let spells = this.props.playerInfo.spells.map((spell) => {
      return (
        // eslint-disable-next-line
        <a href='' title={spell.description} key={spell.id}>

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