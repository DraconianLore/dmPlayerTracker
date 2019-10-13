import React, { Component } from 'react';
import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;


export default class Abilities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      abilities: false
    }
  }
  addAbility = (event) => {
    event.preventDefault();
    this.props.addItem('Ability')
  }
  fetchAbilities = async () => {

    // let abilities = this.props.playerInfo.abilities.map((ability, index) => {

  }
  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
  }
  loadData = (playerID) => {
    axios({
      method: 'get',
      url: `${baseURL}api/loadItems?type=Feat`,
      headers: {
        Authorization: this.props.JWT,
        player: playerID
      }
    }).then((res) => {

      let abilities = res.data.results.map( async(ability, index) => {
        let loadFeat = await axios({
          method: 'get',
          url: `${baseURL}api/feats?searchID=${ability.feat_id}`,
          headers: {
            Authorization: this.props.JWT
          }
        })
        ability = loadFeat
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
      this.setState({
        abilities: abilities
      })
   })
  }
  componentWillReceiveProps(newProps) {
    this.loadData(newProps.playerInfo.id)
  }
  componentDidMount() {
    this.loadData(this.props.playerInfo.id)
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