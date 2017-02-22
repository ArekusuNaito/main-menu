// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import Navbar from '~/components/materialize/Navbar.jsx'


export default class HomeMenu extends React.Component
{
  constructor()
  {
    super();
    this.state =
    {
      menuName: "Home"
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
    console.log('HomeMenu did mount');
  }
}
