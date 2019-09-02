import React, { Component } from 'react';

export default class TopBar extends Component {

  render () {

    return (
      <div className="topbar">
        <div className="topbar-section">
          <button className="settings-btn" onClick={this.openSettings}>
            MENU
          </button>
        </div>
        <h1 className="topbar-username">
          {this.props.user}
        </h1>
        <div className="topbar-section">
          <button className="logout-btn" onClick={this.props.logout}>Log out</button>
        </div>
      </div>
    )
  }
}