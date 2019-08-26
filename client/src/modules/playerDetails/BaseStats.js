import React, { Component } from 'react';

export default class BaseStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerInfo: this.props.playerInfo
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ playerInfo: newProps.playerInfo })
  }

  render() {

    return (
      <div className='pdColumn'>
        <div className='playerStat'>
          <h1>STR</h1>
          <strong>12</strong> (+1)
                    <hr className='statHr' />
          <p className='proficiencies'>
            Saving Throws
                    <br />
            Athletics
                    </p>
        </div>
        <div className='playerStat'>
          <h1>DEX</h1>
          <strong>17</strong>
          <h3>(+3)</h3>
        </div>
        <div className='playerStat'>
          <h1>CON</h1>
          <strong>10</strong> (+0)
                </div>
        <div className='playerStat'>
          <h1>INT</h1>
          <strong>7</strong> (-2)
                </div>
        <div className='playerStat'>
          <h1>WIS</h1>
          <strong>13</strong> (+1)
                </div>
        <div className='playerStat'>
          <h1>CHA</h1>
          <strong>12</strong> (+1)
                </div>
      </div>
    )
  }
}