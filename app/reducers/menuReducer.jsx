import {MENU_CHANGE} from '~/actions/menuActions.jsx';

const initialState =
{
  name: "Home",
  path: "/home"
}
export default function menuReducer(state  = initialState,action)
{
  switch(action.type)
  {
    case MENU_CHANGE:
    return Object.assign({},state,{name: action.name})
    // return { ...state, menuName: action.menuName }
    // return {menuName: "Foobar"}

    default: return state;
  }
}
