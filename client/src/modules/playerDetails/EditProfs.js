
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
      if (profList[prof] < 2) {
        profList[prof] = profList[prof] + 1
      } else {
        profList[prof] = 0
      }
    } else {
      profList[prof] = 1;
    }
    this.setState({
      proficiencies: profList
    })
    this.updateOptions(this.props.field)
  }

  updateOptions = (field) => {
    let rend = ''

    switch (field) {
      case 'Strength Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.strS ?
              <span className='proficiencies prof-have' id='strS' onClick={this.toggleProf}>{this.state.proficiencies.strS >= 1 && '✔'}{this.state.proficiencies.strS === 2 && '✔'} Saving Throws <br /></span>
              : <span className='proficiencies prof-need' id='strS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
            {this.state.proficiencies.strAth ?
              <span className='proficiencies prof-have' id='strAth' onClick={this.toggleProf}>{this.state.proficiencies.strAth >= 1 && '✔'}{this.state.proficiencies.strAth === 2 && '✔'} Athletics <br /></span>
              : <span className='proficiencies prof-need' id='strAth' onClick={this.toggleProf}>  Athletics <br /></span>}
          </span>
        )
        break;
      case 'Dexterity Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.dexS ?
              <span className='proficiencies prof-have' id='dexS' onClick={this.toggleProf}>{this.state.proficiencies.dexS >= 1 && '✔'}{this.state.proficiencies.dexS === 2 && '✔'} Saving Throws <br /></span>
              : <span className='proficiencies prof-need' id='dexS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
            {this.state.proficiencies.dexAcr ?
              <span className='proficiencies prof-have' id='dexAcr' onClick={this.toggleProf}>{this.state.proficiencies.dexAcr >= 1 && '✔'}{this.state.proficiencies.dexAcr === 2 && '✔'} Acrobatics <br /></span>
              : <span className='proficiencies prof-need' id='dexAcr' onClick={this.toggleProf}>  Acrobatics <br /></span>}
            {this.state.proficiencies.dexSli ?
              <span className='proficiencies prof-have' id='dexSli' onClick={this.toggleProf}>{this.state.proficiencies.dexSli >= 1 && '✔'}{this.state.proficiencies.dexSli === 2 && '✔'} Light of Hand <br /></span>
              : <span className='proficiencies prof-need' id='dexSli' onClick={this.toggleProf}>  Light of Hand <br /></span>}
            {this.state.proficiencies.dexSte ?
              <span className='proficiencies prof-have' id='dexSte' onClick={this.toggleProf}>{this.state.proficiencies.dexSte >= 1 && '✔'}{this.state.proficiencies.dexSte === 2 && '✔'} Stealth</span>
              : <span className='proficiencies prof-need' id='dexSte' onClick={this.toggleProf}>  Stealth</span>}
          </span>
        )
        break;
      case 'Constitution Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.conS ?
              <span className='proficiencies prof-have' id='conS' onClick={this.toggleProf}>{this.state.proficiencies.conS >= 1 && '✔'}{this.state.proficiencies.conS === 2 && '✔'} Saving Throws <br /></span>
              : <span className='proficiencies prof-need' id='conS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
          </span>
        )
        break;
      case 'Inteligence Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.intS ?
              <span className='proficiencies prof-have' id='intS' onClick={this.toggleProf}>{this.state.proficiencies.intS >= 1 && '✔'}{this.state.proficiencies.intS === 2 && '✔'} Saving Throws <br /></span>
              : <span className='proficiencies prof-need' id='intS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
            {this.state.proficiencies.intArc ?
              <span className='proficiencies prof-have' id='intArc' onClick={this.toggleProf}>{this.state.proficiencies.intArc >= 1 && '✔'}{this.state.proficiencies.intArc === 2 && '✔'} Arcana <br /></span>
              : <span className='proficiencies prof-need' id='intArc' onClick={this.toggleProf}>  Arcana <br /></span>}
            {this.state.proficiencies.intHis ?
              <span className='proficiencies prof-have' id='intHis' onClick={this.toggleProf}>{this.state.proficiencies.intHis >= 1 && '✔'}{this.state.proficiencies.intHis === 2 && '✔'} History <br /></span>
              : <span className='proficiencies prof-need' id='intHis' onClick={this.toggleProf}>  History <br /></span>}
            {this.state.proficiencies.intInv ?
              <span className='proficiencies prof-have' id='intInv' onClick={this.toggleProf}>{this.state.proficiencies.intInv >= 1 && '✔'}{this.state.proficiencies.intInv === 2 && '✔'} Investigation <br /></span>
              : <span className='proficiencies prof-need' id='intInv' onClick={this.toggleProf}>  Investigation <br /></span>}
            {this.state.proficiencies.intNat ?
              <span className='proficiencies prof-have' id='intNat' onClick={this.toggleProf}>{this.state.proficiencies.intNat >= 1 && '✔'}{this.state.proficiencies.intNat === 2 && '✔'} Nature <br /></span>
              : <span className='proficiencies prof-need' id='intNat' onClick={this.toggleProf}>  Nature <br /></span>}
            {this.state.proficiencies.intRel ?
              <span className='proficiencies prof-have' id='intRel' onClick={this.toggleProf}>{this.state.proficiencies.intRel >= 1 && '✔'}{this.state.proficiencies.intRel === 2 && '✔'} Religion <br /></span>
              : <span className='proficiencies prof-need' id='intRel' onClick={this.toggleProf}>  Religion <br /></span>}
          </span>
        )
        break;
      case 'Wisdom Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.wisS ?
              <span className='proficiencies prof-have' id='wisS' onClick={this.toggleProf}>{this.state.proficiencies.wisS >= 1 && '✔'}{this.state.proficiencies.wisS === 2 && '✔'} Saving Throws <br /></span>
              : <span className='proficiencies prof-need' id='wisS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
            {this.state.proficiencies.wisAni ?
              <span className='proficiencies prof-have' id='wisAni' onClick={this.toggleProf}>{this.state.proficiencies.wisAni >= 1 && '✔'}{this.state.proficiencies.wisAni === 2 && '✔'} Animal Handling <br /></span>
              : <span className='proficiencies prof-need' id='wisAni' onClick={this.toggleProf}>  Animal Handling <br /></span>}
            {this.state.proficiencies.wisIns ?
              <span className='proficiencies prof-have' id='wisIns' onClick={this.toggleProf}>{this.state.proficiencies.wisIns >= 1 && '✔'}{this.state.proficiencies.wisIns === 2 && '✔'} Insight <br /></span>
              : <span className='proficiencies prof-need' id='wisIns' onClick={this.toggleProf}>  Insight <br /></span>}
            {this.state.proficiencies.wisMed ?
              <span className='proficiencies prof-have' id='wisMed' onClick={this.toggleProf}>{this.state.proficiencies.wisMed >= 1 && '✔'}{this.state.proficiencies.wisMed === 2 && '✔'} Medicine <br /></span>
              : <span className='proficiencies prof-need' id='wisMed' onClick={this.toggleProf}>  Medicine <br /></span>}
            {this.state.proficiencies.wisPer ?
              <span className='proficiencies prof-have' id='wisPer' onClick={this.toggleProf}>{this.state.proficiencies.wisPer >= 1 && '✔'}{this.state.proficiencies.wisPer === 2 && '✔'} Perception <br /></span>
              : <span className='proficiencies prof-need' id='wisPer' onClick={this.toggleProf}>  Perception <br /></span>}
            {this.state.proficiencies.wisSur ?
              <span className='proficiencies prof-have' id='wisSur' onClick={this.toggleProf}>{this.state.proficiencies.wisSur >= 1 && '✔'}{this.state.proficiencies.wisSur === 2 && '✔'} Survival <br /></span>
              : <span className='proficiencies prof-need' id='wisSur' onClick={this.toggleProf}>  Survival <br /></span>}
          </span>
        )
        break;
      case 'Charisma Proficiencies':
        rend = (
          <span className='profList'>
            {this.state.proficiencies.chaS ?
             <span className='proficiencies prof-have' id='chaS' onClick={this.toggleProf}>{this.state.proficiencies.chaS >= 1 && '✔'}{this.state.proficiencies.chaS === 2 && '✔'} Saving Throws <br /></span>
            : <span className='proficiencies prof-need' id='chaS' onClick={this.toggleProf}>  Saving Throws <br /></span>}
            {this.state.proficiencies.chaDec ?
               <span className='proficiencies prof-have' id='chaDec' onClick={this.toggleProf}>{this.state.proficiencies.chaDec >= 1 && '✔'}{this.state.proficiencies.chaDec === 2 && '✔'} Deception <br /></span>
            : <span className='proficiencies prof-need' id='chaDec' onClick={this.toggleProf}>  Deception <br /></span>}
            {this.state.proficiencies.chaInt ?
               <span className='proficiencies prof-have' id='chaInt' onClick={this.toggleProf}>{this.state.proficiencies.chaInt >= 1 && '✔'}{this.state.proficiencies.chaInt === 2 && '✔'} Intimidation <br /></span>
            : <span className='proficiencies prof-need' id='chaInt' onClick={this.toggleProf}>  Intimidation <br /></span>}
            {this.state.proficiencies.chaPerf ?
               <span className='proficiencies prof-have' id='chaPerf' onClick={this.toggleProf}>{this.state.proficiencies.chaPerf >= 1 && '✔'}{this.state.proficiencies.chaPerf === 2 && '✔'} Performance <br /></span>
            : <span className='proficiencies prof-need' id='chaPerf' onClick={this.toggleProf}>  Performance <br /></span>}
            {this.state.proficiencies.chaPers ?
               <span className='proficiencies prof-have' id='chaPers' onClick={this.toggleProf}>{this.state.proficiencies.chaPers >= 1 && '✔'}{this.state.proficiencies.chaPers === 2 && '✔'} Persuasion <br /></span>
            : <span className='proficiencies prof-need' id='chaPers' onClick={this.toggleProf}>  Persuasion <br /></span>}
          </span>
        )
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
      proficiencies = newProps.proficiencies
    }
    this.setState({ proficiencies: proficiencies })
    setTimeout(() => {

      this.updateOptions(newProps.field)
    }, 10);
  }
  componentDidMount() {
    let proficiencies = {}
    if (this.props.proficiencies) {
      proficiencies = this.props.proficiencies
    }
    this.setState({ proficiencies: proficiencies })
    setTimeout(() => {

      this.updateOptions(this.props.field)
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
          <div>
            {this.state.renderOptions || <h3>ERROR - Invalid Field</h3>}
          </div>
          <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button> <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>

    )
  }
}