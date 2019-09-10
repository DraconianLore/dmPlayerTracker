import React, { Component } from 'react';

export default class AddSomething extends Component {
  
  
  
  
  
  render() {

    return (
      <div className='editField'>
        <div className='addBox'>
          <h1 style={{color: 'peru'}}>Add {this.props.item}</h1>
            <p className='addItemP'>{this.props.item} Name </p>
            <input  className='addText' type='text' name='name' placeholder={'New ' + this.props.item} />
          <br />
          <p className='addItemP'>{this.props.item} Description </p>
          <textarea  className='addText' style={{width: '80%'}} rows={8} name='name' placeholder={this.props.item + ' description'} />
          <br />
          <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button> <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>

    )
  }
}

