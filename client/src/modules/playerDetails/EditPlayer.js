
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
      case 'Proficiency':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Strength':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Strength Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Dexterity':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Dexterity Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Constitution':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Constitution Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Inteligence':
        rend = (<input type='text' className='edit-input' name={field} placeholder={val} onChange={this.changing} defaultValue={this.state.currentValue} />)
        break;
      case 'Inteligence Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Wisdom':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Wisdom Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Charisma':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Charisma Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Level':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Race':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Class':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Background':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Speed':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Armour Class':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Save DC':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      case 'Hit Die':
        rend = (<input type='text' className='edit-input' name={field} onChange={this.changing} defaultValue={val} />)
        break;
      default:
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
    let changes = { field: this.props.field, newValue: this.state.currentValue}
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