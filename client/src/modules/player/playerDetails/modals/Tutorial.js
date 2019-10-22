import React, { Component } from 'react';

export default class Tutorial extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
  }
  exiting = () => {
    let step = this.state.step + 1;
    if (step >= 5) {
      this.setState({ step: 0 })
      this.props.closeTutorial()
    } else {
      this.setState({ step: step })
    }
  }

  render() {

    return (
      <>
        {this.state.step && <>
          <div className='tutorial-container'>
            <div className='playerHeader'>

            </div>
            <div className='playerDetails'>
              {this.state.step === 1 ? <div className='pdColumn tut-active' /> : <div className='pdColumn' />}
              {this.state.step === 2 ? <div className='pdColumn tut-active' /> : <div className='pdColumn' />}
              {this.state.step === 4 ? <div className='pdColumn tut-active' /> : <div className='pdColumn' />}
              {this.state.step === 2 ? <div className='pdColumn tut-active' /> : <div className='pdColumn' />}
              {this.state.step === 3 ? <div className='pdColumn tut-active' /> : <div className='pdColumn' />}
            </div>
          </div>
          <div className='closeModal cm-top' onClick={this.exiting} />
          <div className='closeModal cm-right' onClick={this.exiting} />
          <div className='closeModal cm-bottom' onClick={this.exiting} />
          <div className='closeModal cm-left' onClick={this.exiting} />
        </>}
      </>
    )
  }
}