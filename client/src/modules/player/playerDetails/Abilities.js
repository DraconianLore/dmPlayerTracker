import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;


export default class Abilities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }

  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
  }
  loadData = async (playerID) => {
    let res = await axios({
      method: 'get',
      url: `${baseURL}api/loadItems?type=Feat`,
      headers: {
        Authorization: this.props.JWT,
        player: playerID
      }
    })
    let abilities = await res.data.results.map(async (ability, index) => {
      let loadFeat = await axios({
        method: 'get',
        url: `${baseURL}api/feats?searchID=${ability.feat_id}`,
        headers: {
          Authorization: this.props.JWT
        }
      })
      ability = loadFeat.data.newFeat
      console.log(ability)
      return (
        // eslint-disable-next-line
        <a href='#' title={ability.description} key={index} onClick={this.showAbilityDetails} >
          <h3>
            {ability.name}
          </h3>
        </a>
      )
    })
    console.log(abilities)
    return abilities
  }

  showFeats = async (playerID) => {
   const abilities = await this.loadData(playerID)
   this.setState({
     abilities: abilities
   })
  }
  componentWillReceiveProps(newProps){
    this.showFeats(newProps.playerInfo.id)
  }
  componentDidMount() {
    this.showFeats(this.props.playerInfo.id)
  }
  render() {

    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
        {this.state.abilities && <span className='abilityList'>
          {this.state.abilities}
        </span>}
        <button className='addItem' onClick={this.addAbility}>
          Add Ability
        </button>
      </div>
    )
  }
}