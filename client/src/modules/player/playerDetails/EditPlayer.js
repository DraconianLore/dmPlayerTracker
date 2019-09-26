
import React, { Component } from 'react';

export default class EditPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderOptions: false,
      proficiencies: false,
      currentValue: ''
    }
  }

  updateOptions = (field, val) => {
    let rend = ''
    switch (field) {
      case 'Profile Picture':
        rend = (<input type='text' className='edit-input' name={field} placeholder='Image URL' onChange={this.changing} />)
        break;
      case 'Player Name':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} placeholder='New Name' defaultValue={''} />)
        break;
      case 'Character Name':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} placeholder='New Name' defaultValue={''} />)
        break;
      case 'Race':
        // TODO Expended races - add to races as well as race seeds
        rend = (
          <>
          <input list="races" name="race" className='edit-input' onChange={this.changing} placeholder={'Race'} defaultValue={''} />
          <datalist id="races">
            <option value="Dwarf" />
            <option value="Elf" />
            <option value="Halfling" />
            <option value="Human" />
            <option value="Dragonborn" />
            <option value="Gnome" />
            <option value="Half-Elf" />
            <option value="Half-Orc" />
            <option value="Tiefling" />
          </datalist>
          </>
        )
        break;
      default:
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} placeholder={val} defaultValue={''} />)
        break;
    }
    this.setState({
      renderOptions: rend
    })
  }
  changing = (evt) => {
    this.setState({
      currentValue: evt.target.value
    })
  }
  componentWillReceiveProps(newProps) {
    this.updateOptions(newProps.field, newProps.currentValue)
  }
  componentDidMount() {
    this.updateOptions(this.props.field, this.props.currentValue)
  }

  saveChanges = (event) => {
    event.preventDefault();
    let changes = { field: this.props.field, newValue: this.state.currentValue }
    if (changes.field === 'Race') {
      changes.changeType = 'changeRace'
    }
    this.props.savePlayer(changes)
  }
  render() {

    return (
      <div className='editField'>
        <div className='editBox'>
          <h1>Change {this.props.field}</h1>
          <br />
          {this.state.renderOptions || <h3>ERROR - Invalid Field</h3>}
          <br />
          <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button> <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>

    )
  }
}