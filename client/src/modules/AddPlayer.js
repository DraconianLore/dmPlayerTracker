import React from 'react';

export default function AddPlayer(props) {

  return (
    <li className="hex" onClick={props.newPlayer}>
      <div className="hexIn">
      {/* eslint-disable-next-line */}
        <a className="hexLink" href="#">
          <img src='./images/add.jpg' alt="Add player" />
          <h1>Add</h1>
          <p>Player</p>
        </a>
      </div>
    </li>
  )
}
