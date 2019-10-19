import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL

export default class EditSpells extends Component {
  constructor(props) {
    super(props)
    this.state = {
        description: this.props.spell.description,
        range: this.props.spell.range,
        duration: this.props.spell.duration,
        casting_time: this.props.spell.casting_time,
        level: this.props.spell.level,
        school: this.props.spell.school,
        components: this.props.spell.components,
        concentration: this.props.spell.concentration,
        ritual: this.props.spell.ritual
    }
  }
  concentrationToggle = () => {
    this.setState({ concentration: !this.state.concentration })
  }
  ritualToggle = () => {
    this.setState({ ritual: !this.state.ritual })
  }
  editSpell = (evt) => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }
  editDescription = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }
  saveSpell = () => {
    axios({
      method: 'put',
      url: `${baseURL}api/spells/${this.props.spell.id}`,
      headers: {
        Authorization: this.props.JWT
      },
      data: {
        description: this.state.description,
        range: this.state.range,
        duration: this.state.duration,
        casting_time: this.state.casting_time,
        level: this.state.level,
        school: this.state.school,
        components: this.state.components,
        concentration: this.state.concentration,
        ritual: this.state.ritual
      }
    })
      .then((response) => { 
        console.log(response)
        this.props.updatePlayer(response.data.item)
      })
      .catch(function (e) {
        console.log(e)
      })  }
  render() {

    return (
      <div className='newSpell'>
        <button className='editItem' name={this.props.spell.id} onClick={this.saveSpell} >
              SAVE
          </button>
        <p className='addItemP'>Range:
            <input className='editSpellText' type='text' name='range' onChange={this.editSpell} value={this.state.range} />
        </p>
        <p className='addItemP'>Duration:
            <input className='editSpellText' type='text' name='duration' onChange={this.editSpell} value={this.state.duration} />
        </p>
        <p className='addItemP'>Casting Time:
            <input className='editSpellText' type='text' name='casting_time' onChange={this.editSpell} value={this.state.casting_time} />
        </p>
        <p className='addItemP'>Level:
            <input className='editSpellText' type='text' name='level' onChange={this.editSpell} value={this.state.level} />
        </p>
        <p className='addItemP'>School:
            <input className='editSpellText' type='text' name='school' onChange={this.editSpell} value={this.state.school} />
        </p>
        <p className='addItemP'>Components:
            <input className='editSpellText' type='text' name='components'  onChange={this.editSpell} value={this.state.components} />
        </p>
        <p className='addItemP'>
          <span className={`spellCheckBox${this.state.ritual}`} onClick={this.ritualToggle}>
            Ritual
                </span>
          <span className={`spellCheckBox${this.state.concentration}`} onClick={this.concentrationToggle}>
            Concentration
                </span>
        </p>
        <br />

        <p className='addItemP'>{this.props.item} Description </p>
        <textarea className='editDescription' style={{ width: '80%' }} rows={8} name='name' onChange={this.editDescription} value={this.state.description} />
      </div>
    )
  }
}