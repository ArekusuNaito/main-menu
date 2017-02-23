import * as React from 'react'


export default class InputField extends React.Component
{
  constructor()
  {
    super()
  }



  render()
  {

    let className = "input-field col "+this.props.cols
    return(
          <div className={className}>
            {this.props.icon && <i className="material-icons prefix">{this.props.icon}</i>}
            <input name={this.props.name} value={this.props.value} onChange={this.props.onChange} placeholder={this.props.placeholder} type={this.props.type}/>
          </div>
    )
  }


}
