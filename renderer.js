// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
//Containers
import MainMenu from './app/Containers/Materialize/MainMenu'
import SettingsMenu from './app/Containers/Materialize/SettingsMenu'
//Components
import Navbar from './app/components/Materialize/Navbar'
import Bottombar from './app/components/Materialize/Bottombar'
import Sidebar from './app/components/Materialize/Sidebar'

class App extends React.Component
{
  constructor()
  {
    super()
    this.handleMainMenuSelect = this.handleMainMenuSelect.bind(this)
    this.handleSettingsMenuSelect = this.handleSettingsMenuSelect.bind(this)
    this.state =
    {
      menuName: 'Main Menu',
    }

  }
  render()
  {
    return(
      <div>
        <Navbar menuName={this.state.menuName}/>
        {this.state.menuName == 'Main Menu' && <MainMenu/>}
        {this.state.menuName == 'Settings' && <SettingsMenu/>}
        <Bottombar/>
        <Sidebar onMainMenuSelect={this.handleMainMenuSelect} onSettingsMenuSelect={this.handleSettingsMenuSelect}/>
      </div>
    )
  }
  handleMainMenuSelect()
  {
    this.setState(
      {
        menuName: 'Main Menu'
      }
    )
    $('.sideBarTrigger').sideNav('hide');
  }
  handleSettingsMenuSelect()
  {
    this.setState(
      {
        menuName: 'Settings'
      }
    )
    $('.sideBarTrigger').sideNav('hide');
  }
  componentDidMount()
  {
    $(".sideBarTrigger").sideNav();

  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
