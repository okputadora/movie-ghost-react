import React, { Component } from 'react'
import style from '../containers/style.js'
import Instruction from '../containers/Instruction'
import AtBat from '../containers/AtBat'
import OnDeck from '../containers/OnDeck'
import BreadCrumbs from '../containers/BreadCrumbs'

class Game extends Component {
  constructor(props){
    super(props)
    this.state
    this.settingUp = false
    this.gameOn = false
    console.log(this)
  }

  startGame(){
    console.log(this.settingUp)
    if (this.settingUp === false){
      this.settingUp = true
    }
    else if(this.gameOn === false){
      this.gameOn = true;
    }
    this.setState({})
  }
  render(){
    // if we're not playing then we're starting the Game
    // pass settingUp to Instruction so it knows which
    // instruction to give
    if (this.gameOn === false){
      var content = <Instruction
        instruction={this.settingUp}
        onClick={() => this.startGame()}>
      </Instruction>
    }
    else{
      content = [
        <AtBat></AtBat>,
        <OnDeck></OnDeck>,
        <BreadCrumbs></BreadCrumbs>
      ]
    }

    return (
        <div style={style.flexCol} className='main-content'>
          {content}
        </div>
    )
  }
}
export default Game
