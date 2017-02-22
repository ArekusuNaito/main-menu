import {LOAD_MENU} from '~/actions/menuActions.jsx';

//menu.name
//menu.path
const initialState =
{
  name: "Home",
  path: "/home"
}
export default function menuReducer(state  = initialState,action)
{
  switch(action.type)
  {
    case LOAD_MENU:
    {

      return Object.assign({},state,{name: action.name,path:action.path})
      // return { ...state, name: action.name , path:action.path }
    }
    default: return state;
  }
}
