import React from 'react'
// import style from '../containers/style'
function Character(props) {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default Character
