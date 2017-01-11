import React from 'react'
import ReactDOM from 'react-dom'

function Navbar(props)
{
    return (
    <header>
      <div className="navbar-fixed">
        <nav>
           <div className="nav-wrapper">
             <a href='#' className="brand-logo center" data-activates="slide-out">{props.menuName}</a>
           </div>
        </nav>
      </div>
    </header>
    )

}

module.exports = Navbar
