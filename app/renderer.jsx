// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import routes from './routes.jsx'
import Navbar from './components/materialize/Navbar.jsx'
import Drawer from './components/materialize/Drawer.jsx'
import {connect} from 'react-redux'


class App extends React.Component
{
  constructor()
  {
    super();

  }

  render()
  {
    return(
      <div>
        <Navbar/>
        <Drawer/>
        {this.props.children}
      </div>
    )
  }

  componentDidMount()
  {
    console.log('App did mount');
    $(".button-collapse").sideNav();
  }
}


const mapStateToProps = (store)=>
{
  // console.log(store);
  return {}
}

export default connect(mapStateToProps)(App)


ReactDOM.render(routes(),document.getElementById('root'))
