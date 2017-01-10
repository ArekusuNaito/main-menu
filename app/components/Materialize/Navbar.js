import React from 'react'
import ReactDOM from 'react-dom'

function Navbar(props)
{
  console.log(props);
    return (
      <nav>
       <div className="nav-wrapper">
         <a className="brand-logo center">{props.menuName}</a>
       </div>
    </nav>
    )

}

module.exports = Navbar
