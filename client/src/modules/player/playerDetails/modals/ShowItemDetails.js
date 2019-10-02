import React, { Component } from 'react';

export default class ShowItemDetails extends Component {
  // TODO make it look better, add delete/edit buttons, split spells, abilities, notes and items if needed

  
  closeModal = () => {
    this.props.closeItemDetails()
  }
  
  render() {
    console.log(this.props.item)

    return (
      <>
        <div className='itemModal'>
          <h1>
            {this.props.item.name}
          </h1>
          <hr className='itemHr' />
          <p>
            {this.props.item.description}
          </p>
        </div>
        <div className='im-top' onClick={this.closeModal} />
        <div className='im-right' onClick={this.closeModal} />
        <div className='im-bottom' onClick={this.closeModal} />
        <div className='im-left' onClick={this.closeModal} />

      </>
    )
  }
}