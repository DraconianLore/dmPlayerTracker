import React, { Component } from 'react';

export default class BaseStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerInfo: this.props.playerInfo,
      proficiencies: {}
    }
  }
  statUp = (e) => {
    e.preventDefault()
    let changes = {
      changeType: 'baseStat',
      stat: e.target.name,
      newValue: 1
    }
    this.props.changeBaseStats(changes)
  }
  statDown = (e) => {
    e.preventDefault()
    let changes = {
      changeType: 'baseStat',
      stat: e.target.name,
      newValue: -1
    }
    this.props.changeBaseStats(changes)
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
          <div className='baseStat-inner'>
            <span className='stat-header'>STR</span>
            <div className='baseStat'>
              <button className='statButton statDown' name='baseSTR' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseSTR}</strong>
              ({Math.floor((this.state.playerInfo.baseSTR - 10) / 2)})
              <button className='statButton statUp' name='baseSTR' onClick={this.statUp}>+</button>
            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Strength Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.strS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.strS >= 1 && '✔'}{this.state.proficiencies.strS === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.strAth ?
                <span className='proficiencies'>Athletics {this.state.proficiencies.strAth >= 1 && '✔'}{this.state.proficiencies.strAth === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <div className='baseStat-inner'>
            <span className='stat-header'>DEX</span>
            <div className='baseStat'>
              <button className='statButton statDown' name='baseDEX' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseDEX}</strong>
              ({Math.floor((this.state.playerInfo.baseDEX - 10) / 2)})
              <button className='statButton statUp' name='baseDEX' onClick={this.statUp}>+</button>

            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Dexterity Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.dexS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.dexS >= 1 && '✔'}{this.state.proficiencies.dexS === 2 && '✔'} <br /></span>
                : null}
              {this.state.proficiencies.dexAcr ?
                <span className='proficiencies'>Acrobatics {this.state.proficiencies.dexAcr >= 1 && '✔'}{this.state.proficiencies.dexAcr === 2 && '✔'} <br /></span>
                : null}
              {this.state.proficiencies.dexSli ?
                <span className='proficiencies'>Sleight of Hand {this.state.proficiencies.dexSli >= 1 && '✔'}{this.state.proficiencies.dexSli === 2 && '✔'} <br /></span>
                : null}
              {this.state.proficiencies.dexSte ?
                <span className='proficiencies'>Stealth {this.state.proficiencies.dexSte >= 1 && '✔'}{this.state.proficiencies.dexSte === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <div className='baseStat-inner'>
            <span className='stat-header'>CON</span>
            <div className='baseStat'>
              <button className='statButton statDown' name='baseCON' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseCON}</strong>
              ({Math.floor((this.state.playerInfo.baseCON - 10) / 2)})
              <button className='statButton statUp' name='baseCON' onClick={this.statUp}>+</button>
            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Constitution Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.conS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.conS >= 1 && '✔'}{this.state.proficiencies.conS === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <div className='baseStat-inner'>
            <span className='stat-header'>INT</span>
            <br />
            <div className='baseStat'>
              <button className='statButton statDown' name='baseINT' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseINT}</strong>
              ({Math.floor((this.state.playerInfo.baseINT - 10) / 2)})
              <button className='statButton statUp' name='baseINT' onClick={this.statUp}>+</button>
            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Inteligence Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.intS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.intS >= 1 && '✔'}{this.state.proficiencies.intS === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.intArc ?
                <span className='proficiencies'>Arcana {this.state.proficiencies.intArc >= 1 && '✔'}{this.state.proficiencies.intArc === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.intHis ?
                <span className='proficiencies'>History {this.state.proficiencies.intHis >= 1 && '✔'}{this.state.proficiencies.intHis === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.intInv ?
                <span className='proficiencies'>Investigation {this.state.proficiencies.intInv >= 1 && '✔'}{this.state.proficiencies.intInv === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.intNat ?
                <span className='proficiencies'>Nature {this.state.proficiencies.intNat >= 1 && '✔'}{this.state.proficiencies.intNat === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.intRel ?
                <span className='proficiencies'>Religion {this.state.proficiencies.intRel >= 1 && '✔'}{this.state.proficiencies.intRel === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <div className='baseStat-inner'>
            <span className='stat-header'>WIS</span>
            <div className='baseStat'>
              <button className='statButton statDown' name='baseWIS' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseWIS}</strong>
              ({Math.floor((this.state.playerInfo.baseWIS - 10) / 2)})
              <button className='statButton statUp' name='baseWIS' onClick={this.statUp}>+</button>
            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Wisdom Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.wisS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.wisS >= 1 && '✔'}{this.state.proficiencies.wisS === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.wisAni ?
                <span className='proficiencies'>Animal Handling {this.state.proficiencies.wisAni >= 1 && '✔'}{this.state.proficiencies.wisAni === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.wisIns ?
                <span className='proficiencies'>Insight {this.state.proficiencies.wisIns >= 1 && '✔'}{this.state.proficiencies.wisIns === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.wisMed ?
                <span className='proficiencies'>Medicine {this.state.proficiencies.wisMed >= 1 && '✔'}{this.state.proficiencies.wisMed === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.wisPer ?
                <span className='proficiencies'>Perception {this.state.proficiencies.wisPer >= 1 && '✔'}{this.state.proficiencies.wisPer === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.wisSur ?
                <span className='proficiencies'>Survival{this.state.proficiencies.wisSur >= 1 && '✔'}{this.state.proficiencies.wisSur === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
        <div className='playerStat'>
          <div className='baseStat-inner'>
            <span className='stat-header'>CHA</span>
            <div className='baseStat'>
              <button className='statButton statDown' name='baseCHA' onClick={this.statDown}>-</button>
              <strong>{this.state.playerInfo.baseCHA}</strong>
              ({Math.floor((this.state.playerInfo.baseCHA - 10) / 2)})
              <button className='statButton statUp' name='baseCHA' onClick={this.statUp}>+</button>
            </div>
          </div>
          <hr className='statHr' />
          <button className='player-proficiencies' onClick={this.props.editProfs} id='Charisma Proficiencies'>
            <span className='stat-profs'>Proficiencies<br /></span>
            <span className='profList'>
              {this.state.proficiencies.chaS ?
                <span className='proficiencies'>Saving Throws {this.state.proficiencies.chaS >= 1 && '✔'}{this.state.proficiencies.chaS === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.chaDec ?
                <span className='proficiencies'>Deception {this.state.proficiencies.chaDec >= 1 && '✔'}{this.state.proficiencies.chaDec === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.chaInt ?
                <span className='proficiencies'>Intimidation {this.state.proficiencies.chaInt >= 1 && '✔'}{this.state.proficiencies.chaInt === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.chaPerf ?
                <span className='proficiencies'>Performance {this.state.proficiencies.chaPerf >= 1 && '✔'}{this.state.proficiencies.chaPerf === 2 && '✔'}<br /></span>
                : null}
              {this.state.proficiencies.chaPers ?
                <span className='proficiencies'>Persuasion {this.state.proficiencies.chaPers >= 1 && '✔'}{this.state.proficiencies.chaPers === 2 && '✔'}</span>
                : null}
            </span>
          </button>
        </div>
      </div>
    )
  }
}