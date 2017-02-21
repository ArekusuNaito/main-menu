import * as React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from "./renderer.jsx"
import HomeContainer from "./HomeContainer.jsx"

export default function routes()
{
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
