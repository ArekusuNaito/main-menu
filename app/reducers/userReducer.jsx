import {SAVE_PROFILE_DATA} from '~/actions/userActions.jsx';

//menu.name
//menu.path
const initialState =
{
  username: "Guest",
  email: "youremail@foo.bar",
  profilePic: ""
}
export default function userReducer(state  = initialState,action)
{
  switch(action.type)
  {
    case SAVE_PROFILE_DATA:
    {
      console.log(Object.assign({},state,{username: action.username,email:action.email, profilePic: action.profilePic}));
      return Object.assign({},state,{username: action.username,email:action.email, profilePic: action.profilePic})
      // return { ...state, name: action.name , path:action.path }
    }
    default: return state;
  }
}
