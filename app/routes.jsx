import * as React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, createMemoryHistory} from 'react-router'
import store from "./store.jsx"

//
import App from "./renderer.jsx"
import HomeMenu from "./menus/HomeMenu.jsx"
import SettingsMenu from "./menus/SettingsMenu.jsx"

//actions
import {loadHomeMenu,loadSettingsMenu} from '~/actions/menuActions.jsx'


export default function routes()
{
  store.subscribe(()=>{
    localStorage.setItem('saveFile',JSON.stringify(store.getState()))
  })
  store.dispatch(loadSettingsMenu());
  const history = createMemoryHistory(store.getState().menu.path)
  return(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeMenu}/>
          <Route path="home" component={HomeMenu}/>
          <Route path="settings" component={SettingsMenu}/>
        </Route>
      </Router>
    </Provider>
  )
}
