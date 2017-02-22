// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import {Link} from 'react-router'
import DrawerItem from '~/components/materialize/DrawerItem.jsx'
import {loadHomeMenu,loadSettingsMenu} from '~/actions/menuActions.jsx'


export default class Drawer extends React.Component
{
  render()
  {
    return(
      <ul id="slide-out" className="side-nav">
        <li>
          <div className="userView">
            <div className="background">
              <img src="../app/images/c.jpg"/>
            </div>
            <img className="circle" src="../app/images/2.jpg"/>
            <span className="white-text name">John Doe</span>
            <span className="white-text email">jdandturk@gmail.com</span>
          </div>
        </li>
          <DrawerItem name="Home" action={loadHomeMenu} path="/home" icon="account_circle"/>
          <DrawerItem name="Settings" action={loadSettingsMenu} path="/settings" icon="settings"/>
        </ul>
    )
  }

  componentDidMount()
  {

  }

}
