import React from "react"

import TextLoop from "react-text-loop"

import "./rolltext.scss"

const Rolltext = props => {
  var rollelements = []
  props.items.forEach(e => {
    rollelements.push(<div className={`rollelement`}>{e}</div>)
  })
  for (var i = 0; i < props.items.length; i++) {}
  return (
    <TextLoop interval={2000} delay={1000}>
      {rollelements}
    </TextLoop>
  )
}

export default Rolltext
