
import React, { Component } from 'react';

export default class EditPlayer extends Component {

saveChanges = (event) => {
  event.preventDefault();
  let changes = this.props.field
  this.props.savePlayer(changes)
}
  render() {

    return (
      <div className='editField'>
        <div className='editBox'>
          <h1>Change {this.props.field}</h1>
          <br />
          <button onClick={this.props.cancelButton}>Discard</button> <button onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>

    )
  }
}