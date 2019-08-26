import React, { Component } from 'react';



class Player extends Component {


  getImage = () => {
    return `/images/original_(${this.props.info.id}).png`

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
            <img src={this.getImage()} alt="" />
            <h1 className="lineBreaks">{this.props.info.charName} {'\n'} ({this.props.info.playerName})</h1>
            <p className="lineBreaks">
              {this.props.info.class} (subclass) {'\n'}
              {this.props.info.race} {'\n'}
              HP : {this.props.info.hp}/{this.props.info.maxHp} {'\n'}
              Save DC : {this.props.info.saveDc} {'\n'}
              Perception : {this.props.info.pPerception} {'\n'}
              AC : {this.props.info.ac}
            </p>
          </a>
        </div>
      </li>
    )
  }
}
export default Player;