import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;


export default class Abilities extends Component {
  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }
  fetchAbilities = () => {
    
    // console.log(res)

    // let abilities = this.props.playerInfo.abilities.map((ability, index) => {
    // let abilities = res.data.results.map((ability, index) => {
    //   console.log(ability)
    //   // remove this once restructuring is complete and old users updated
    //   // if (typeof ability === 'string') {
    //   //   ability = JSON.parse(ability)
    //   // }

    //   return (
    //     // eslint-disable-next-line
    //     <a href='#' title={ability.description} key={index} onClick={this.showAbilityDetails} >
    //       <h3>
    //         {ability.name}
    //       </h3>
    //     </a>
    //   )
    // })
    // return abilities
    return (<h1>WTF</h1>)
  }
  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
  }
  loadData = (player) => {
    console.log(player)
    axios({
      method: 'get',
      url: `${baseURL}api/loadItems`,
      headers: {
        Authorization: this.props.JWT,
        player: player
      }
    }).then((res) => {
      console.log(res)
    })
  
  }
  componentWillReceiveProps(newProps){

    this.loadData(newProps.playerInfo.id)
  }
componentDidMount(){
  this.loadData(this.props.playerInfo.id)
}

  render() {

    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
          <span className='abilityList'>
          {this.fetchAbilities()}
        </span>
        <button className='addItem' onClick={this.addAbility}>
          Add Ability
        </button>
      </div>
    )
  }
}