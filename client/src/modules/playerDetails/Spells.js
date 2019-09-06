

import React, { Component } from 'react';

export default class Spells extends Component {

  addSpell = (event) => {
    event.preventDefault();
    console.log('Add Spell Clicked')
  }

  render() {

    return (
      <div className='pdColumn'>
        <h1>Spells</h1>
        <hr />

        <button className='addItem' onClick={this.addSpell}>
          Add Spell
        </button>
      </div>

    )
  }




}