import React from 'react'
import style from '../containers/style'
const buttonStyle = style.button
function Character(props) {
  return(
    <button style={buttonStyle} onClick={props.onClick}>{props.text}</button>
  )
}

export default Character
