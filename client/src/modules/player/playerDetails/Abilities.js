import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;


export default class Abilities extends Component {
constructor(props){
  super(props)
  this.state = {
    abilities: ''
  }
}

  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }
  fetchAbilities = async () => {
    const res = await axios({
      method: 'get',
      url: `${baseURL}api/loadItems`,
      headers: {
        Authorization: this.props.JWT,
        player: this.props.playerInfo.id
      }
    })
    // let abilities = this.props.playerInfo.abilities.map((ability, index) => {
      let abilities = res.data.results.map((ability, index) => {
        console.log(ability)
      // remove this once restructuring is complete and old users updated
      if (typeof ability === 'string'){
        ability = JSON.parse(ability)
      }

      return (
        // eslint-disable-next-line
        <a href='#' title={ability.description} key={index} onClick={this.showAbilityDetails} >
        <h3>
          {ability.name}
        </h3>
        </a>
      )
    })
    this.setState({
      abilities
    }) 
  }
  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
  }
  componentDidMount(){
    this.fetchAbilities()
  }
  render() {
    
    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
        <span className='abilityList'>
        {this.state.abilities}
        </span>
        <button className='addItem' onClick={this.addAbility}>
          Add Ability
        </button>
      </div>
    )
  }
}