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
    if (step >= 6) {
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
              {this.state.step === 1 ? <>
                <div className='pdColumn tut-active' />
                <div className='step1'>
                  <h1 style={{ color: '#000099' }}>This is the players base stats</h1>
                  <p>
                    You can change them up/down and clicking on proficiencies will allow you to add/remove proficiencies and expertise
                  </p>
                  <button className='continue-btn' onClick={this.exiting}>OK</button>
                </div>
              </>
                : <div className='pdColumn' />}
              {this.state.step === 2 ? <>
                <div className='pdColumn tut-active' />
                <div className='step2'>
                  <h1 style={{ color: '#000099' }}>These are the abilities and spells</h1>
                  <p>
                    To view spells/abilities you can hover over them, or click them to have options to edit/delete.
                  </p>
                  <br />
                  <p>
                    To add abilities/spells you can search the 5E-SRD for spells and abilities/feats or create your own
                  </p>
                  <button className='continue-btn' onClick={this.exiting}>OK</button>
                </div>
              </>
                : <div className='pdColumn' />}
              {this.state.step === 4 ? <>
                <div className='pdColumn tut-active' />
                <div className='step4'>
                  <h1 style={{ color: '#000099' }}>Player information</h1>
                  <p>
                    Changing the characters level will modify their stats and add abilities if a class is selected.
                  </p>
                  <p>
                    Setting a race or class will fill some fields such as speed and hit-die, and will also add race/class based abilities to the ability list.
                  </p>
                  <p>
                    Passive perception is calculated based on the characters base stats and proficiencies.
                  </p>
                  <p>
                    You can change the characters portrait by clicking on it and giving a image URL.
                  </p>
                  <button className='continue-btn' onClick={this.exiting}>OK</button>
                </div>
              </>
                : <div className='pdColumn' />}
              {this.state.step === 2 ? <>
                <div className='pdColumn tut-active' />
              </>
                : <div className='pdColumn' />}
              {this.state.step === 3 ? <>
                <div className='pdColumn tut-active' />
                <div className='step3'>
                  <h1 style={{ color: '#000099' }}>Player items and notes</h1>
                  <p>
                    To view items/notes you can hover over them, or click them to have options to edit/delete.
                  </p>
                  <button className='continue-btn' onClick={this.exiting}>OK</button>
                </div>
              </>
                : <div className='pdColumn' />}
            </div>
          </div>
          {this.state.step === 5 && <div className='step5'>
            <h1 style={{ color: '#000099' }}>Final notes</h1>
            <p>
              Most screens you can press the ESC key to close
            </p>
            <p>
              I hope you enjoy playing around with this, if you would like to set it up to manage your game check the github repository for instructions:
            </p>
            <br />
            <a style={{ color: '#000099' }} href='https://github.com/DraconianLore/dmPlayerTracker' target="_blank" rel="noopener noreferrer" >View on Github</a>
            <br />
            <button className='continue-btn' onClick={this.exiting}>OK</button>

          </div>}
          <div className='closeModal cm-top' onClick={this.exiting} />
          <div className='closeModal cm-right' onClick={this.exiting} />
          <div className='closeModal cm-bottom' onClick={this.exiting} />
          <div className='closeModal cm-left' onClick={this.exiting} />
        </>}
      </>
    )
  }
}