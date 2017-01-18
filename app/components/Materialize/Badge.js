import React from 'react'
import ReactDOM from 'react-dom'

function Badge(props)
{
  console.log(props);
    return (
      <span key={props.id} id={props.id} className="badge">{props.children}</span>
    )

}

module.exports = Badge
