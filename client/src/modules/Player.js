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
            <h1>{this.props.info.charName}<br />({this.props.info.playerName})</h1>
            <p>
              {this.props.info.class} (subclass)<br />
              {this.props.info.race}<br />
              HP : {this.props.info.hp}/{this.props.info.maxHp}<br />
              Save DC : {this.props.info.saveDc}<br />
              Perception : {this.props.info.pPerception}<br />
              AC : {this.props.info.ac}
            </p>
          </a>
        </div>
      </li>
    )
  }
}
export default Player;