import {createStore} from 'redux';
import allReducers from './reducers/combinedReducers.jsx'

export default createStore(allReducers);
