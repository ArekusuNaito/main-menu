// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'



export default class HomeContainer extends React.Component
{
  render()
  {
    console.log("Arre");
    return(
      <div>

      </div>
    )
  }

  componentDidMount()
  {
    console.log('Home container did mount');
  }
}
