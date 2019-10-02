import React from 'react';

export default function DeletePrompt(props) {

  return (
    <div className='savePrompt'>
      <div className='promptBox' >
        <h1>Delete {this.state.player.charName}</h1>
        <button style={{ marginRight: '5px', backgroundColor: 'black' }} className='accept-btn' onClick={props.yesDeletePlayer}>
          DELETE
              </button>
        <button className='cancel-btn' onClick={props.cancelButton}>Cancel</button>
      </div>

    </div>
  )
}
