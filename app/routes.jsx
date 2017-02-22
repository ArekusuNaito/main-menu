import * as React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import store from "./store.jsx"

//
import App from "./renderer.jsx"
import HomeMenu from "./menus/HomeMenu.jsx"
import SettingsMenu from "./menus/SettingsMenu.jsx"



export default function routes()
{
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeMenu}/>
          <Route path="home" component={HomeMenu}/>
          <Route path="settings" component={SettingsMenu}/>
        </Route>
      </Router>
    </Provider>
  )
}
