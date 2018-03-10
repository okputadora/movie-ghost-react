import React, { Component } from 'react'
import style from '../containers/style.js'
import Instruction from '../containers/Instruction'
import AtBat from '../containers/AtBat'
import OnDeck from '../containers/OnDeck'
import BreadCrumbs from '../containers/BreadCrumbs'

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      oppSelected: false,
      gameOn: false,
    }
    console.log(this)
  }

  startGame(param){
    console.log(param)
    // first click -- will display the opponent selection UI
    if (this.state.oppSelected === false){
      var oppSelected = true
      this.setState({
        oppSelected: oppSelected,
      })
    }
    // second click -- will display the game UI
    else if(this.state.gameOn === false){
      var gameOn = true;
      this.setState({
        gameOn: gameOn,
      })
    }
    console.log(this.state.oppSelected)

  }
  render(){
    // if we're not playing then we're starting the Game
    // pass oppSelected to Instruction so it knows which
    // instruction to give...if opponents have not been selected we render
    // the opponent selection scree, else we render the game
    if (this.state.gameOn === false){
      var content = <Instruction
        instruction={this.state.oppSelected}
        onClick={(param) => this.startGame(param)}>
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
