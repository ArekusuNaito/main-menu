// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import routes from './routes.jsx'

export default class App extends React.Component
{

  render()
  {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }

  componentDidMount()
  {
    console.log('App did mount');
  }
}


ReactDOM.render(routes(),document.getElementById('root'))
