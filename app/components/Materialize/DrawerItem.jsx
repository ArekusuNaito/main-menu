import * as React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {menuChange} from '~/actions/menuActions.jsx'

export class DrawerItem extends React.Component
{

  render()
  {
    return(
      <li><Link onClick={this.handleOnClick.bind(this)} to={this.props.to}><i className="material-icons">{this.props.icon}</i>{this.props.name}</Link></li>
    )
  }

  handleOnClick()
  {

    $('.button-collapse').sideNav('hide');
    this.props.dispatch(menuChange(this.props.name,this.props.to))
  }
}

const mapStateToProps = (store)=>
{
  return {menuName: store.menu.name, path: store.menu.path}
}

export default connect(mapStateToProps)(DrawerItem)
