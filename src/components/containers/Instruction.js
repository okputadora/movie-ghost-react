import React, { Component } from 'react'
import style from './style.js'
import Button from '../presentation/Button'
class Instruction extends Component{
  render(){
    const instruction1 = {
      title: "Instructions",
      text: `Movie Ghost is a game to test your knowledge of movies
        and actors. To begin, one player says the name of either a movie or an actor.
        Let's say player one said 'Forrest Gump. The next player would then have to
        say the name of an actor in Forrest Gump. Player two says 'Tom Hanks', and now
        player 3 (or player 1 if there are only two players) has to say a different movie
        that Tom Hanks is in. Players go around in a circle in this fashion without repeating
        any movies or actors already said that round. If you can't come up with a movie or
        an actor you can challenge the player before you. If they can think of one then
        you get a letter (like HORSE, except we're spelling GHOST)`,
      buttonText: "Select Opponents"
    }
    const instruction2 = {
      title: "Select Opponents",
      text: `Pick some opponents. We recommend having an odd number
        of opponents so that on each turn you're alternating between having to come
        up with a movie and an actor`,
      buttonText: "Start"
    }
    // if settingUp is false give the first instruction
    console.log('instruction')
    console.log(this.props.instruction)
    var currentInstruction = !this.props.instruction ? instruction1 : instruction2
    return(
      <div style={style.instructions} className='instruction'>
        <h3>{currentInstruction.title}</h3>
        <p>{currentInstruction.text}</p>
        <Button text={currentInstruction.buttonText} onClick={this.props.onClick}></Button>
      </div>
    )
  }
}

export default Instruction
