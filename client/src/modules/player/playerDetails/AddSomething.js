import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL

export default class AddSomething extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      range: '',
      duration: '',
      casting_time: '',
      level: '',
      school: '',
      components: '',
      concentration: false,
      ritual: false,
      itemID: null
    }
  }
  // Search in open5e API for matching spells(SRD only)
  searchSpells = () => {
    let query = this.state.title
    axios({
      method: 'get',
      url: `https://api.open5e.com/spells?search=${query}`,
    })
      .then((response) => {
        const results = response.data.results
        if (results.length === 0) {
          this.setState({
            description: `No spell found matching ${query} found in the SRD \nIf the spell is not in the Players Handbook, you will have to add the description manually. \nIf the spell should be in the Players Handbook, check your spelling`
          })
        } else {
          let newItem = results[0]
          // check if there is an exact match, if none found use first result
          for (const spell in results) {
            if (results[spell].name.toLowerCase() === query.toLocaleLowerCase()) {
              newItem = results[spell]
              break;
            }
          }
          let comp = newItem.components
          let rit = false
          let con = false
          if (newItem.material) {
            comp += ` (${newItem.material})`
          }
          if (newItem.ritual === 'yes') {
            rit = true
          }
          if (newItem.concentration === 'yes') {
            con = true
          }

          this.setState({
            title: newItem.name,
            description: `${newItem.desc}\n\n${newItem.higher_level}`,
            level: newItem.level,
            school: newItem.school,
            duration: newItem.duration,
            casting_time: newItem.casting_time,
            range: newItem.range,
            components: comp,
            ritual: rit,
            concentration: con
          })
        }
      })
      .catch(function (e) {
        console.log(e)
      })

  }
  searchAbilities = () => {
    let query = this.state.title
    axios({
      method: 'get',
      url: `${baseURL}api/feats?search=${query}`,
      headers: {
        Authorization: this.props.jwt
      }
    })
      .then((response) => {
        const result = response.data.result
        if (!result) {
          this.setState({
            description: `No ability found matching ${query} found in the SRD \nIf the ability is not in the Players Handbook, you will have to add the description manually. \nIf the ability should be in the Players Handbook, check your spelling`
          })
        } else {
          let newItem = result
          this.setState({
            title: newItem.name,
            description: newItem.description,
            itemID: newItem.id
          })
        }
      })
      .catch(function (e) {
        console.log(e)
      })


  }
  editTitle = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }
  editDescription = (evt) => {
    this.setState({
      description: evt.target.value
    })
  }
  editSpell = (evt) => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }
  concentrationToggle = () => {
    this.setState({ concentration: !this.state.concentration })
  }
  ritualToggle = () => {
    this.setState({ ritual: !this.state.ritual })
  }
  saveChanges = () => {
    let change = {};
    console.log(this.props.item)
    console.log(this.state)
    if (this.props.item === 'Spell') {
      change = {
        title: this.state.title,
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
      console.log(change)
    } else {
      change = { name: this.state.title, description: this.state.description, itemID: this.state.itemID }
    }
    let changes = {
      changeType: 'addItem',
      itemType: this.props.item,
      change: change
    }
    console.log(changes.change)
    this.props.savePlayer(changes)
  }
  render() {

    return (
      <div className='editField'>
        {this.props.item !== 'Spell' && <div className='addBox'>
          <h1 style={{ color: 'peru' }}>Add {this.props.item}</h1>
          <p className='addItemP'>{this.props.item} Name </p>
          <div>
            <input className='addText' type='text' name='name' placeholder={'New ' + this.props.item} onChange={this.editTitle} value={this.state.title} />
            {this.props.item === 'Ability' &&
              <button className='search-spells' onClick={this.searchAbilities}>Search</button>
            }
            <br />
            <p className='addItemP'>{this.props.item} Description </p>
            <textarea className='addText' style={{ width: '80%' }} rows={8} name='name' placeholder={this.props.item + ' description'} onChange={this.editDescription} value={this.state.description} />
            <br />
            <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button>
            <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
          </div>
        </div>}
        {this.props.item === 'Spell' && <div className='addSpell'>
          <h1 style={{ color: 'peru' }}>Add {this.props.item}</h1>
          <div className='newSpell'>
            <p className='addItemP'>Spell name:
            <input className='spellText' type='text' name='name' placeholder={'New ' + this.props.item} onChange={this.editTitle} value={this.state.title} />
              <button className='search-spells' onClick={this.searchSpells}>Search</button>
            </p>

            <p className='addItemP'>Range:
            <input className='spellText' type='text' name='range' placeholder={'Spell Range'} onChange={this.editSpell} value={this.state.range} />
            </p>
            <p className='addItemP'>Duration:
            <input className='spellText' type='text' name='duration' placeholder={'Duration'} onChange={this.editSpell} value={this.state.duration} />
            </p>
            <p className='addItemP'>Casting Time:
            <input className='spellText' type='text' name='casting_time' placeholder={'Casting Time'} onChange={this.editSpell} value={this.state.casting_time} />
            </p>
            <p className='addItemP'>Level:
            <input className='spellText' type='text' name='level' placeholder={'Spell Level'} onChange={this.editSpell} value={this.state.level} />
            </p>
            <p className='addItemP'>School:
            <input className='spellText' type='text' name='school' placeholder={'School of magic'} onChange={this.editSpell} value={this.state.school} />
            </p>
            <p className='addItemP'>Components:
            <input className='spellText' type='text' name='components' placeholder={'Components'} onChange={this.editSpell} value={this.state.components} />
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
            <textarea className='spellText' style={{ width: '80%' }} rows={8} name='name' placeholder={this.props.item + ' description'} onChange={this.editDescription} value={this.state.description} />
            <br />
            <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button>
            <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
          </div>
        </div>}
      </div>

    )
  }
}

