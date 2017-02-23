import {combineReducers} from 'redux';
import menu from './menuReducer.jsx'
import user from './userReducer.jsx'


export default combineReducers({menu,user})
