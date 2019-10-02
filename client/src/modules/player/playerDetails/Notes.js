import React, { Component } from 'react';

export default class Notes extends Component {
  // TODO add modal - show item/note details and have option of deleting/editing


  addNote = (event) => {
    event.preventDefault();
    this.props.addItem('Note')
  }
  addItem = (event) => {
    event.preventDefault();
    this.props.addItem('Item')
  }
  fetchNotes = () => {

    let notes = this.props.playerInfo.notes.map((note, index) => {
      note = JSON.parse(note)
      return (
        // eslint-disable-next-line
        <a href='#' title={note.description} key={index} onClick={this.showNoteDetails} >
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
        <a href='#' title={item.description} key={index} onClick={this.showItemDetails} >
        <h3>
          {item.name}
        </h3>
        </a>
      )
    })
    return items
  }
  showNoteDetails = (event) => {
    const note = {
      type: 'Note',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(note)
  }
  showItemDetails = (event) => {
    const item = {
      type: 'Item',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(item)
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
        <h3>Notes</h3>
        <hr className='pdSectionBreak' />
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
