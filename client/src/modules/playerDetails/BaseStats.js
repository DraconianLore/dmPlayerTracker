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
    if (newProps.playerInfo.proficiencies) {

      let proficiencies = newProps.playerInfo.proficiencies.reduce((obj, item) => {
        obj[item.id] = item.val
        return obj
      }, {})
      this.setState({
        playerInfo: newProps.playerInfo,
        proficiencies: proficiencies
      })

    } else {
      this.setState({
        playerInfo: newProps.playerInfo,
        proficiencies: {}
      })

    }
  }

  render() {

    return (
      <div className='pdColumn'>
         <h1>Statistics</h1>
        <hr />
        <div className='playerStat' style={{marginTop: '0.5em'}}>
          <h1>Proficiency</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.proficiency || 2}</strong>
          </span>
        </div>
        <div className='playerStat'>
          <h1>STR</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseSTR}</strong> ({Math.floor((this.state.playerInfo.baseSTR - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.strS && <p>✔ Saving Throws</p>}
            {this.state.proficiencies.strAth && <p>✔ Athletics</p>}
          </div>
        </div>
        <div className='playerStat'>
          <h1>DEX</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseDEX}</strong> ({Math.floor((this.state.playerInfo.baseDEX - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.dexS && <p>✔ Saving Throws</p>}
            {this.state.proficiencies.dexAcr && <p>✔ Acrobatics</p>}
            {this.state.proficiencies.dexSli && <p>✔ Light of Hand</p>}
            {this.state.proficiencies.dexSte && <p>✔ Stealth</p>}
          </div>
        </div>
        <div className='playerStat'>
          <h1>CON</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseCON}</strong> ({Math.floor((this.state.playerInfo.baseCON - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.conS && <p>✔ Saving Throws</p>}
          </div>
        </div>
        <div className='playerStat'>
          <h1>INT</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseINT}</strong> ({Math.floor((this.state.playerInfo.baseINT - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.intS && <p>✔ Saving Throws</p>}
            {this.state.proficiencies.intArc && <p>✔ Arcana</p>}
            {this.state.proficiencies.intHis && <p>✔ History</p>}
            {this.state.proficiencies.intInv && <p>✔ Investigation</p>}
            {this.state.proficiencies.intNat && <p>✔ Nature</p>}
            {this.state.proficiencies.intRel && <p>✔ Religion</p>}
          </div>
        </div>
        <div className='playerStat'>
          <h1>WIS</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseWIS}</strong> ({Math.floor((this.state.playerInfo.baseWIS - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.wisS && <p>✔ Saving Throws</p>}
            {this.state.proficiencies.wisAni && <p>✔ Animal Handling</p>}
            {this.state.proficiencies.wisIns && <p>✔ Insight</p>}
            {this.state.proficiencies.wisMed && <p>✔ Medicine</p>}
            {this.state.proficiencies.wisPer && <p>✔ Perception</p>}
            {this.state.proficiencies.wisSur && <p>✔ Survival</p>}
          </div>
        </div>
        <div className='playerStat'>
          <h1>CHA</h1>
          <span className='stat'>
            <strong>{this.state.playerInfo.baseCHA}</strong> ({Math.floor((this.state.playerInfo.baseCHA - 10) / 2)})
          </span>
          <hr className='statHr' />
          <div className='proficiencies'>
            {this.state.proficiencies.chaS && <p>✔ Saving Throws</p>}
            {this.state.proficiencies.chaDec && <p>✔ Deception</p>}
            {this.state.proficiencies.chaInt && <p>✔ Intimidation</p>}
            {this.state.proficiencies.chaPerf && <p>✔ Performance</p>}
            {this.state.proficiencies.chaPers && <p>✔ Persuasion</p>}
          </div>
        </div>
      </div>
    )
  }
}