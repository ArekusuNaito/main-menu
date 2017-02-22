import * as React from 'react'
import Navbar from '~/components/materialize/Navbar.jsx'


export default class SettingsMenu extends React.Component
{
  constructor()
  {
    super()
    this.state =
    {
      menuName: 'Settings'
    }
  }
  render()
  {
    return(
      <div>
        
      </div>
    )
  }

  componentDidMount()
  {
    console.log('SettingsMenu did mount');
  }
}
