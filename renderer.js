// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import React from 'react'
import ReactDOM from 'react-dom'
import MainMenu from './app/Containers/Materialize/MainMenu'


class App extends React.Component
{
  render()
  {
    return(
      <div>
        <MainMenu/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
