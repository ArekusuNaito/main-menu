import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component
{
  render()
  {
    // console.log('~ Button Render ~');
    return (
      <button className='btn'>{this.props.name}</button>
    )
  }
}

module.exports = Button
