import React, { Component } from 'react';

export default class TopBar extends Component {

  render () {
    return (
      <div className="topbar">
        <div className="topbar-section">
        <strong className="topbar-username">
          {this.props.user}
        </strong>
        </div>
        <div className="topbar-section">
        <em className="topbar-gamename">
        {this.props.gameName}
        </em>

        </div>
        <div className="topbar-section">
          <button className="logout-btn" onClick={this.props.logout}>Log out</button>
        </div>
      </div>
    )
  }
}