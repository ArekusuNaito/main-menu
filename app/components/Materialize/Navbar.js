import React from 'react'
import ReactDOM from 'react-dom'

function Navbar(props)
{
    return (
    <header>
      <div className="navbar-fixed">
        <nav>
           <div className="nav-wrapper">
             <a  className="brand-logo center" data-activates="slide-out">{props.menuName}</a>
             <ul className='left'>
               <li><a href='#' className='sideBarTrigger' data-activates="slide-out"><i className="material-icons">reorder</i></a></li>
             </ul>
           </div>
        </nav>
      </div>
    </header>
    )

}

module.exports = Navbar
