// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import MainMenu from './app/Containers/Materialize/MainMenu'
import Navbar from './app/components/Materialize/Navbar'

class App extends React.Component
{
  constructor()
  {
    super()
    this.state =
    {
      menuName: 'Main Menu'
    }
  }
  render()
  {
    return(
      <div>
        <Navbar menuName={this.state.menuName}/>
        <MainMenu/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
