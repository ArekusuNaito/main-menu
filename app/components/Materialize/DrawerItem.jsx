import * as React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {menuChange} from '~/actions/menuActions.jsx'

export class DrawerItem extends React.Component
{

  render()
  {
    return(
      <li><Link onClick={this.handleOnClick.bind(this)} to={this.props.path}><i className="material-icons">{this.props.icon}</i>{this.props.name}</Link></li>
    )
  }

  handleOnClick()
  {
    // console.log(this.props);
    $('.button-collapse').sideNav('hide');
    this.props.dispatch(this.props.action())
  }
}



export default connect()(DrawerItem)
