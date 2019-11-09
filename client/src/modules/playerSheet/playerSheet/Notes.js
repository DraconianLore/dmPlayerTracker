import React, { Component } from 'react';

export default class Notes extends Component {

  fetchNotes = () => {

    let notes = this.props.playerInfo.playerNotes.map((note, index) => {
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
  
  showNoteDetails = (event) => {
    const note = {
      itemType: 'PNote',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(note)
  }
  
  
  render() {

    return (
      <div className='pdColumn'>
        <h1>Notes</h1>
        <hr />
        {this.props.playerInfo.notes && <span className='abilityList'>
        {/* {this.fetchNotes()} */}
        </span>}
        <br />
        <span className='abilityList'>
        TO BE IMPLEMENTED 
        </span>
        <br className='mobileFix' />

      </div>
    )
  }

}
