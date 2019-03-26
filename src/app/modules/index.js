import { combineReducers } from 'redux';
import users from './user/reducer';

const rootReducer = combineReducers({ users });

export default rootReducer;
