import * as React from 'react'
import {Link} from 'react-router'


export default class DrawerItem extends React.Component
{

  render()
  {
    return(
      <li><Link onClick={this.handleOnClick.bind(this)} to={this.props.path}><i className="material-icons">{this.props.icon}</i>{this.props.name}</Link></li>
    )
  }

  handleOnClick()
  {
    $('.button-collapse').sideNav('hide');
    this.props.action()
  }
}
