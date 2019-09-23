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
      this.setState({
        playerInfo: newProps.playerInfo,
        proficiencies: newProps.playerInfo.proficiencies
      })

    } else {
      this.setState({
        playerInfo: newProps.playerInfo,
        proficiencies: {}
      })

    }
  }
  // TODO add (+) and (-) buttons instead of having a modal to change number stats
  // TODO add expertise option to proficiencies

  render() {
    
    return (
      <div className='pdColumn'>
        <h1>Statistics</h1>
        <hr />
        <button onClick={this.props.editStats} id='Proficiency' className='playerStat' style={{ marginTop: '0.5em' }}>
          <span className='stat-header'>Proficiency</span>
          <br />
          <span className='stat'>
            <strong>{this.state.playerInfo.proficiency}</strong>
          </span>
        </button>
        <div className='playerStat'>
          <button onClick={this.props.editStats} id='Strength' className='playerStat-inner'>
            <span className='stat-header'>STR</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseSTR}</strong>
              ({Math.floor((this.state.playerInfo.baseSTR - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Strength Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.strS && <span className='proficiencies'>✔ Saving Throws<br /></span>}
              {this.state.proficiencies.strAth && <span className='proficiencies'>✔ Athletics</span>}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <button onClick={this.props.editStats} id='Dexterity' className='playerStat-inner'>
            <span className='stat-header'>DEX</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseDEX}</strong>
              ({Math.floor((this.state.playerInfo.baseDEX - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Dexterity Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.dexS && <span className='proficiencies'>✔ Saving Throws <br /></span>}
              {this.state.proficiencies.dexAcr && <span className='proficiencies'>✔ Acrobatics <br /></span>}
              {this.state.proficiencies.dexSli && <span className='proficiencies'>✔ Light of Hand <br /></span>}
              {this.state.proficiencies.dexSte && <span className='proficiencies'>✔ Stealth</span>}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <button onClick={this.props.editStats} id='Constitution' className='playerStat-inner'>
            <span className='stat-header'>CON</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseCON}</strong>
              ({Math.floor((this.state.playerInfo.baseCON - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Constitution Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.conS && <span className='proficiencies'>✔ Saving Throws</span>}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <button onClick={this.props.editStats} id='Inteligence' className='playerStat-inner'>
            <span className='stat-header'>INT</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseINT}</strong>
              ({Math.floor((this.state.playerInfo.baseINT - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Inteligence Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.intS && <span className='proficiencies'>✔ Saving Throws<br /></span>}
              {this.state.proficiencies.intArc && <span className='proficiencies'>✔ Arcana<br /></span>}
              {this.state.proficiencies.intHis && <span className='proficiencies'>✔ History<br /></span>}
              {this.state.proficiencies.intInv && <span className='proficiencies'>✔ Investigation<br /></span>}
              {this.state.proficiencies.intNat && <span className='proficiencies'>✔ Nature<br /></span>}
              {this.state.proficiencies.intRel && <span className='proficiencies'>✔ Religion</span>}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <button className='playerStat-inner' onClick={this.props.editStats} id='Wisdom'>
            <span className='stat-header'>WIS</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseWIS}</strong>
              ({Math.floor((this.state.playerInfo.baseWIS - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Wisdom Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.wisS && <span className='proficiencies'>✔ Saving Throws<br /></span>}
              {this.state.proficiencies.wisAni && <span className='proficiencies'>✔ Animal Handling<br /></span>}
              {this.state.proficiencies.wisIns && <span className='proficiencies'>✔ Insight<br /></span>}
              {this.state.proficiencies.wisMed && <span className='proficiencies'>✔ Medicine<br /></span>}
              {this.state.proficiencies.wisPer && <span className='proficiencies'>✔ Perception<br /></span>}
              {this.state.proficiencies.wisSur && <span className='proficiencies'>✔ Survival</span>}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <button onClick={this.props.editStats} id='Charisma' className='playerStat-inner'>
            <span className='stat-header'>CHA</span>
            <br />
            <span className='stat'>
              <strong>{this.state.playerInfo.baseCHA}</strong>
              ({Math.floor((this.state.playerInfo.baseCHA - 10) / 2)})
          </span>
          </button>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Charisma Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.chaS && <span className='proficiencies'>✔ Saving Throws<br /></span>}
              {this.state.proficiencies.chaDec && <span className='proficiencies'>✔ Deception<br /></span>}
              {this.state.proficiencies.chaInt && <span className='proficiencies'>✔ Intimidation<br /></span>}
              {this.state.proficiencies.chaPerf && <span className='proficiencies'>✔ Performance<br /></span>}
              {this.state.proficiencies.chaPers && <span className='proficiencies'>✔ Persuasion</span>}
            </span>
          </button>
        </div>
      </div>
    )
  }
}