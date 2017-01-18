import React from 'react'
import ReactDOM from 'react-dom'

function FixedActionButton(props)
{

    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light red" href={"#"+props.opens}>
          <i className="large material-icons">add</i>
        </a>
        <ul>
          {props.children}
        </ul>
      </div>
    )

}
module.exports = FixedActionButton
