import React from 'react'
import ReactDOM from 'react-dom'
//Components
import Collection from '../../components/Materialize/Collection'


class Modal extends React.Component
{
  constructor()
  {
    super()
  }
  componentDidMount()
  {

  }
  render()
  {
    return(
        <div id={this.props.id} className="modal">
          <div className="modal-content">
            <h4>{this.props.header}</h4>
            {this.props.children}
          </div>
          <div className="modal-footer">
            <a href="#!" onClick={this.props.onOkButtonClick} className=" modal-action modal-close waves-effect waves-green btn-flat">OK</a>
          </div>
        </div>
    )
  }
}

module.exports = Modal
