import React from 'react'
import styleAll from '../containers/style'
const style = styleAll.oppOpt
function OppOpt(props) {
  return(
    <form id={"opt"+props.i+1} style={style.container}>
      <span>{props.i+1}. Robot </span><input style={style.checkbox} value='robot' type='radio'/>
      <span> Human </span><input value='human' type='radio' />
    </form>
  )
}

export default OppOpt
