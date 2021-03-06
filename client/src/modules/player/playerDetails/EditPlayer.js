
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
    if (changes.field === 'Class') {
      changes.changeType = 'changeClass'
    }
    this.props.savePlayer(changes)
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
      case 'Class':
        rend = (
          <>
            <input list="classes" name="class" className='edit-input' onChange={this.changing} placeholder={'Class'} defaultValue={''} />
            <datalist id="classes">
              <option value="Barbarian" />
              <option value="Bard" />
              <option value="Cleric" />
              <option value="Druid" />
              <option value="Fighter" />
              <option value="Monk" />
              <option value="Paladin" />
              <option value="Ranger" />
              <option value="Rogue" />
              <option value="Sorcerer" />
              <option value="Warlock" />
              <option value="Wizard" />
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