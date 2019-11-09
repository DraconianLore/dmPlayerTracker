import React, { Component } from 'react';

export default class Abilities extends Component {

  showAbilityDetails = (event) => {
    const ability = {
      itemType: 'Ability',
      name: event.target.innerText,
      description: event.target.parentNode.title
    }
    this.props.showItem(ability)
  }
  showFeats = () => {
    let abilities = this.props.playerInfo.feats.map((ability, index) => {
      return (
        // eslint-disable-next-line
        <a href='#' title={ability.description} key={index} onClick={this.showAbilityDetails} >
          <h3>
            {ability.name}
          </h3>
        </a>
      )
    })
    return abilities
  }

  render() {
    return (
      <div className='pdColumn'>
        <h1>Abilities</h1>
        <hr />
        {this.props.playerInfo.feats && <span className='abilityList'>
          {this.showFeats()}
        </span>}
        <br className='mobileFix' />

      </div>
    )
  }
}