import React, { Component } from 'react';

export default class Notes extends Component {


  addNote = (event) => {
    event.preventDefault();
    this.props.addItem('Note')
  }
  addItem = (event) => {
    event.preventDefault();
    this.props.addItem('Item')
  }
  fetchNotes = () => {

    let notes = this.props.playerInfo.notes.map((note) => {
      note = JSON.parse(note)
      return (
        // eslint-disable-next-line
        <a href='' title={note.description} key={note.id}>
        <h3>
          {note.name}
        </h3>
        </a>
      )
    })
    return notes
  }
  fetchItems = () => {

    let items = this.props.playerInfo.items.map((item, index) => {
      item = JSON.parse(item)
      return (
        // eslint-disable-next-line
        <a href='' title={item.description} key={index}>
        <h3>
          {item.name}
        </h3>
        </a>
      )
    })
    return items
  }

  render() {

    return (
      <div className='pdColumn'>
        <h1>Information</h1>
        <hr />
        <h3>Important Items</h3>
        {this.props.playerInfo.items && <span className='abilityList'>
        {this.fetchItems()}
        </span>}
        <button className='addItem' onClick={this.addItem}>
          Add Item
        </button>
        <hr className='pdSectionBreak' />
        <h3>Notes</h3>
        {this.props.playerInfo.notes && <span className='abilityList'>
        {this.fetchNotes()}
        </span>}
        <button className='addItem' onClick={this.addNote}>
          Add Note
        </button>
      </div>
    )
  }

}
