// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import {Link} from 'react-router'
import DrawerItem from '~/components/materialize/DrawerItem.jsx'



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
          <DrawerItem to="/" icon="account_circle" name="Home" />
          <DrawerItem to="/settings" icon="settings" name="Settings"/>
        </ul>
    )
  }

  handleDrawerItemClick(event)
  {
    console.log('Click')
  }
  componentDidMount()
  {
    $(".button-collapse").sideNav();
  }

}
