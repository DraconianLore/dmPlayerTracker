

import React, { Component } from 'react';

export default class Spells extends Component {


  addSpell = (event) => {
    event.preventDefault();
    this.props.addItem('Spell')

  }
  fetchSpells = (level) => {
    let added = false
    let spells = this.props.playerInfo.spells.map((spell) => {
      let desc = `${spell.level} - ${spell.school}\nCasting Time: ${spell.casting_time}\nDuration: ${spell.duration}\nRange: ${spell.range}\nComponents: ${spell.components}\nConcentration: ${spell.concentration}\nRitual: ${spell.ritual} \n\n${spell.description}`
      if (spell.level.charAt(0).toLowerCase() === level) {
        added = true;
        return (
          // eslint-disable-next-line
          <a href='#' title={desc} key={spell.id} onClick={this.showSpellDetails} >
            <h3>
              {spell.name}
            </h3>
          </a>
        )
      } else return false;
    })
    if(added){
      return spells
    } else return 0
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
        {this.props.playerInfo.spells && <>
          <hr className='spellBreak' />
          {this.fetchSpells('c') !== 0 && <><h3>Cantrips</h3>
            <span className='abilityList'>
              {this.fetchSpells('c')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('1') !== 0 && <><h3>Level 1</h3>
            <span className='abilityList'>
              {this.fetchSpells('1')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('2') !== 0 && <><h3>Level 2</h3>
            <span className='abilityList'>
              {this.fetchSpells('2')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('3') !== 0 && <><h3>Level 3</h3>
            <span className='abilityList'>
              {this.fetchSpells('3')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('4') !== 0 && <><h3>Level 4</h3>
            <span className='abilityList'>
              {this.fetchSpells('4')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('5') !== 0 && <><h3>Level 5</h3>
            <span className='abilityList'>
              {this.fetchSpells('5')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('6') !== 0 && <><h3>Level 6</h3>
            <span className='abilityList'>
              {this.fetchSpells('6')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('7') !== 0 && <><h3>Level 7</h3>
            <span className='abilityList'>
              {this.fetchSpells('7')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('8') !== 0 && <><h3>Level 8</h3>
            <span className='abilityList'>
              {this.fetchSpells('8')}
            </span>
            <hr className='spellBreak' />
          </>}
          {this.fetchSpells('9') !== 0 && <><h3>Level 9</h3>
            <span className='abilityList'>
              {this.fetchSpells('9')}
            </span>
            <hr className='spellBreak' />
          </>}

        </>}
        <button className='addItem' onClick={this.addSpell}>
          Add Spell
        </button>
      </div>
    )
  }
}