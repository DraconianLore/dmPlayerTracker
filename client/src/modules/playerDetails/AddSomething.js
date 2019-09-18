import React, { Component } from 'react';

export default class AddSomething extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desctiption: ''
    }
  }

  editTitle = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }
  editDescription = (evt) => {
    this.setState({
      desctiption: evt.target.value
    })
  }
  saveChanges = () => {
    const change = { name: this.state.title, description: this.state.desctiption }
    let changes = {
      changeType: 'addItem',
      itemType: this.props.item,
      change: change
    }
    this.props.savePlayer(changes)
  }

  render() {

    return (
      <div className='editField'>
        <div className='addBox'>
          <h1 style={{ color: 'peru' }}>Add {this.props.item}</h1>
          <p className='addItemP'>{this.props.item} Name </p>
          <input className='addText' type='text' name='name' placeholder={'New ' + this.props.item} onChange={this.editTitle} value={this.state.title} />
          <br />
          <p className='addItemP'>{this.props.item} Description </p>
          <textarea className='addText' style={{ width: '80%' }} rows={8} name='name' placeholder={this.props.item + ' description'} onChange={this.editDescription} value={this.state.desctiption} />
            <br />
            <button className='cancel-btn' onClick={this.props.cancelButton}>Discard</button> <button className='accept-btn' onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>

        )
      }
    }
    
