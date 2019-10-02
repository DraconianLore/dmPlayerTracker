import React from 'react';

export default function SavePrompt(props) {

  return (
    <div className='savePrompt'>
      <div className='promptBox'>
        <h1>Save your changes?</h1>
        <button className='cancel-btn' onClick={props.closeWwithoutSaving}>Discard</button>
        <button className='accept-btn' onClick={props.saveAndClose}>Save changes</button>
      </div>
    </div>
  )
}