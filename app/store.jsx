import {createStore} from 'redux';
import allReducers from './reducers/combinedReducers.jsx'


const persistedState = localStorage.getItem('saveFile')?JSON.parse(localStorage.getItem('saveFile')): {}
export default createStore(allReducers,persistedState);
