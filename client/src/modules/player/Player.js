import React, { Component } from 'react';



class Player extends Component {

  calculatePerception = () => {
    let perception = 10 + Math.floor((this.props.info.baseWIS - 10) / 2)
    if (this.props.info.proficiencies) {
      if (this.props.info.proficiencies.wisPer) {
        perception += (this.props.info.proficiency * this.props.info.proficiencies.wisPer)
      }
    }
    return perception
  }

  playerClick = (e) => {
    this.props.showPlayer(this.props.info)
  }
  render() {

    return (
      <li className="hex" onClick={this.playerClick}>
        <div className="hexIn">
          {/* eslint-disable-next-line */}
          <a className="hexLink" href="#">
            <img src={this.props.info.portrait} alt="" />
            <h1 className="lineBreaks">{this.props.info.charName} {'\n'} ({this.props.info.playerName})</h1>
            <p className="lineBreaks">
              {this.props.info.classname || "NO CLASS"} {'\n'}
              {this.props.info.race || "NO RACE"} {'\n'}
              Max HP : {this.props.info.maxHP || "0"} {'\n'}
              {this.props.info.saveDc && `Save DC : ${this.props.info.saveDc} ${'\n'}`}
              Perception : {this.calculatePerception().toString()} {'\n'}
              AC : {this.props.info.AC}
            </p>
          </a>
        </div>
      </li>
    )
  }
}
export default Player;