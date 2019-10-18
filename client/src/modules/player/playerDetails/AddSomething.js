import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL

export default class AddSomething extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
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
          this.setState({
            title: newItem.name,
            description: `${newItem.level} - ${newItem.school}\nCasting Time: ${newItem.casting_time}\nRange: ${newItem.range}\nComponents: ${newItem.components}\nConcentration: ${newItem.concentration} \n\n${newItem.desc} \n\n${newItem.higher_level}`
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
  saveChanges = () => {
    const change = { name: this.state.title, description: this.state.description, itemID: this.state.itemID }
    let changes = {
      changeType: 'addItem',
      itemType: this.props.item,
      change: change
    }
    this.props.savePlayer(changes)
  }
  render() {

    return (
      <div className='editField'>
        <div className='addBox'>
          <h1 style={{ color: 'peru' }}>Add {this.props.item}</h1>
          <p className='addItemP'>{this.props.item} Name </p>
          <div>
            <input className='addText' type='text' name='name' placeholder={'New ' + this.props.item} onChange={this.editTitle} value={this.state.title} />
            {this.props.item === 'Spell' &&
              <button className='search-spells' onClick={this.searchSpells}>Search</button>
            }
            {this.props.item === 'Ability' &&
              <button className='search-spells' onClick={this.searchAbilities}>Search</button>
            }

            <br />
            <p className='addItemP'>{this.props.item} Description </p>
            <textarea className='addText' style={{ width: '80%' }} rows={8} name='name' placeholder={this.props.item + ' description'} onChange={this.editDescription} value={this.state.description} />
            <br />
            <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button> 
            {this.props.item !== 'Spell' &&<button className='accept-btn' onClick={this.saveChanges}>Save changes</button>}
            {this.props.item === 'Spell' &&<p style={{color: 'navajowhite'}}>Saving spells currently unavilable while upgrading</p>}
          </div>

        </div>
      </div>

    )
  }
}

