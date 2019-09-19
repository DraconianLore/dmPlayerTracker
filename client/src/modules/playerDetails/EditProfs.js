
import React, { Component } from 'react';

export default class EditProfs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderOptions: false,
      proficiencies: {}
    }
  }

  toggleProf = (event) => {
    let prof = event.target.id
    let profList = this.state.proficiencies
    if (profList[prof]) {
      profList[prof] = !profList[prof]
    } else {
      profList[prof] = true;
    }
    console.log(profList)
    console.log('#################')
    this.setState({
      proficiencies: profList
    })
    this.updateOptions(this.props.field, this.state.proficiencies)
  }

  updateOptions = (field, val) => {
    let rend = ''
   
    switch (field) {
      case 'Strength Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Dexterity Proficiencies':
        rend = (
          // MOVE THIS TO A NEW MODULE
          <span className='profList'>
            {this.state.proficiencies.dexS && <span className='proficiencies prof-have' id='dexS' onClick={this.toggleProf}>✔ Saving Throws <br /></span>}
            {this.state.proficiencies.dexS || <span className='proficiencies prof-need' id='dexS' onClick={this.toggleProf}>  Saving Throws <br /></span>}            
            {this.state.proficiencies.dexAcr && <span className='proficiencies prof-have' id='dexAcr' onClick={this.toggleProf}>✔ Acrobatics <br /></span>}
            {this.state.proficiencies.dexAcr || <span className='proficiencies prof-need' id='dexAcr' onClick={this.toggleProf}>  Acrobatics <br /></span>}            
            {this.state.proficiencies.dexSli && <span className='proficiencies prof-have' id='dexSli' onClick={this.toggleProf}>✔ Light of Hand <br /></span>}
            {this.state.proficiencies.dexSli || <span className='proficiencies prof-need' id='dexSli' onClick={this.toggleProf}>  Light of Hand <br /></span>}            
            {this.state.proficiencies.dexSte && <span className='proficiencies prof-have' id='dexSte' onClick={this.toggleProf}>✔ Stealth</span>}
            {this.state.proficiencies.dexSte || <span className='proficiencies prof-need' id='dexSte' onClick={this.toggleProf}>  Stealth</span>}            
          </span>
        )
        break;
      case 'Constitution Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Inteligence Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Wisdom Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      case 'Charisma Proficiencies':
        rend = (<h3>TO BE IMPLEMENTED</h3>)
        break;
      default:
        break;
    }

    this.setState({
      renderOptions: rend
    })
  }

  componentWillReceiveProps(newProps) {
    let proficiencies = {}
    if (newProps.proficiencies) {
      let proficiencyList = newProps.proficiencies.reduce((obj, item) => {
        obj[item.id] = item.val
        return obj
      }, {})
      proficiencies = proficiencyList
    }
    this.setState({proficiencies: proficiencies})
    setTimeout(() => {
      
      this.updateOptions(newProps.field, newProps.proficiencies)
    }, 10);
  }
  componentDidMount() {
    let proficiencies = {}
    if (this.props.proficiencies) {
      let proficiencyList = this.props.proficiencies.reduce((obj, item) => {
        obj[item.id] = item.val
        return obj
      }, {})
      proficiencies = proficiencyList
    }
    this.setState({proficiencies: proficiencies})
    setTimeout(() => {
      
      this.updateOptions(this.props.field, this.props.proficiencies)
    }, 10);
  }

  saveChanges = (event) => {
    event.preventDefault();
    let changes = {
      changeType: 'editProfs',
      field: this.props.field,
      newValue: this.state.proficiencies
    }
    this.props.savePlayer(changes)
  }
  render() {
    return (
      <div className='editProfs'>
        <div className='editProfBox'>
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