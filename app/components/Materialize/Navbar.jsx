// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import {connect} from 'react-redux'



class Navbar extends React.Component
{
  constructor()
  {
    super()

  }
  render()
  {
    return(
      <div className="navbar-fixed">
         <nav>
           <div className="nav-wrapper">
             <span className="brand-logo center">{this.props.menuName}</span>
             <ul className="left">
               <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
             </ul>
           </div>
         </nav>
       </div>
    )
  }

}

const mapStateToProps = (store)=>
{
  return {menuName: store.menu.name}
}

export default connect(mapStateToProps)(Navbar)
