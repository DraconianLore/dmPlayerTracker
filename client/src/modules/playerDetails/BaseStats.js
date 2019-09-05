import React, { Component } from 'react';

export default class BaseStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerInfo: this.props.playerInfo,
      proficiencies: {}
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps.playerInfo.proficiencies) {
      
      let proficiencies = newProps.playerInfo.proficiencies.reduce((obj, item) => {
        obj[item.id] = item.val
        return obj
      }, {})
      this.setState({ 
        playerInfo: newProps.playerInfo,
        proficiencies: proficiencies
      })

    } else {
      this.setState({ playerInfo: newProps.playerInfo })

    }
  }

  render() {

    return (
      <div className='pdColumn'>
        <div className='playerStat'>
          <h1>STR</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.STR}</strong> ({Math.floor((this.state.playerInfo.STR - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.strS && 'Saving Throws'}   
            {this.state.proficiencies.strAth && 'Athletics'}    
          </p>
        </div>
        <div className='playerStat'>
          <h1>DEX</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.DEX}</strong> ({Math.floor((this.state.playerInfo.DEX - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.dexS && 'Saving Throws'}
            {this.state.proficiencies.dexAcr && 'Acrobatics'}    
            {this.state.proficiencies.dexSli && 'Light of Hand'}    
            {this.state.proficiencies.dexSte && 'Stealth'}    
          </p>
        </div>
        <div className='playerStat'>
          <h1>CON</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.CON}</strong> ({Math.floor((this.state.playerInfo.CON - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.conS && 'Saving Throws'}    
          </p>
          </div>
        <div className='playerStat'>
          <h1>INT</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.INT}</strong> ({Math.floor((this.state.playerInfo.INT - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.intS && 'Saving Throws'}
            {this.state.proficiencies.intArc && 'Arcana'}    
            {this.state.proficiencies.intHis && 'History'}    
            {this.state.proficiencies.intInv && 'Investigation'}    
            {this.state.proficiencies.intNat && 'Nature'}    
            {this.state.proficiencies.intRel && 'Religion'}    
          </p>
         </div>
        <div className='playerStat'>
          <h1>WIS</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.WIS}</strong> ({Math.floor((this.state.playerInfo.WIS - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.wisS && 'Saving Throws'}
            {this.state.proficiencies.wisAni && 'Animal Handling'}    
            {this.state.proficiencies.wisIns && 'Insight'}    
            {this.state.proficiencies.wisMed && 'Medicine'}    
            {this.state.proficiencies.wisPer && 'Perception'}    
            {this.state.proficiencies.wisSur && 'Survival'}    
          </p>
          </div>
        <div className='playerStat'>
          <h1>CHA</h1>
          <span className='stat'>
          <strong>{this.state.playerInfo.CHA}</strong> ({Math.floor((this.state.playerInfo.CHA - 10) / 2) })
          </span>
          <hr className='statHr' />
          <p className='proficiencies'>
            {this.state.proficiencies.chaS && 'Saving Throws'}  
            {this.state.proficiencies.chaDec && 'Deception'}    
            {this.state.proficiencies.chaInt && 'Intimidation'}    
            {this.state.proficiencies.chaPerf && 'Performance'}    
            {this.state.proficiencies.chaPers && 'Persuasion'}    

          </p>
          </div>
      </div>
    )
  }
}