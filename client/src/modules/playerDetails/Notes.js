import React, { Component } from 'react';

export default class Notes extends Component {


  addNote = (event) => {
    event.preventDefault();
    console.log('Add Note Clicked')
  }
  addItem = (event) => {
    event.preventDefault();
    console.log('Add Item Clicked')
  }
  render() {

    return (
      <div className='pdColumn'>
        <h1>Information</h1>
        <hr />
        <h3>Important Items</h3>
        <button className='addItem' onClick={this.addItem}>
          Add Item
        </button>
        <hr className='pdSectionBreak' />
        <h3>Notes</h3>
        <button className='addItem' onClick={this.addNote}>
          Add Note
        </button>
      </div>
    )
  }

}