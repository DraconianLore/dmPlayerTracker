import React from 'react';
import addPlayer from '../images/add.jpg';

export default function AddPlayer(props) {

  return (
    <li className="hex" onClick={props.newPlayer}>
      <div className="hexIn">
      {/* eslint-disable-next-line */}
        <a className="hexLink" href="#">
          <img src={addPlayer} alt="Add player" />
          <h1>Add</h1>
          <p>Player</p>
        </a>
      </div>
    </li>
  )
}
