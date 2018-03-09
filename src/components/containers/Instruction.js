import React, { Component } from 'react'
import style from './style.js'
import Button from '../presentation/Button'
class Instruction extends Component{

  render(){
    if (this.props.instruction === false){
      var text = <div>
        <h3>How to Play</h3>
        <p>the instructions</p>
        <Button text="Pick Opponents" onClick={this.props.onClick}></Button>
      </div>
    }
    return(
      <div style={style.instructions} className='instruction'>
        <div className='instHeader'>{text}</div>
      </div>
    )
  }
}

export default Instruction
