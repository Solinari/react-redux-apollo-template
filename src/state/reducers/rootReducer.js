import { combineReducers } from 'redux';
import baseReducer from './baseReducer';
import gridReducer from './gridReducer';

export default combineReducers({baseReducer, gridReducer});