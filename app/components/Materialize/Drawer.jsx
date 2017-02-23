// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import {Link} from 'react-router'
import DrawerItem from '~/components/materialize/DrawerItem.jsx'
import {loadHomeMenu,loadSettingsMenu} from '~/actions/menuActions.jsx'
import * as menuActionCreators from '~/actions/menuActions.jsx'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

const styles=
{
  bgColorBlack: {backgroundColor:"black"}
}

class Drawer extends React.Component
{
  render()
  {
    //This way DrawerItem won't be aware of Redux
    let {dispatch} = this.props
    let boundActionCreators = bindActionCreators(menuActionCreators, dispatch)
    let loadHomeMenu = boundActionCreators.loadHomeMenu
    let loadSettingsMenu = boundActionCreators.loadSettingsMenu
    return(
      <ul id="slide-out" className="side-nav">
        <li>
          <div className="userView">
            <div className="background" style={styles.bgColorBlack}>
              {/* <img src={this.props.profilePic}/> */}
            </div>
            <img className="circle" src={this.props.profilePic}/>
            <span className="white-text name">{this.props.username}</span>
            <span className="white-text email">{this.props.email}</span>
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

const mapStateToProps = (store)=>
{
  // console.log(store);
  return {username: store.user.username, email:store.user.email,profilePic: store.user.profilePic}
}

export default connect(mapStateToProps)(Drawer)
