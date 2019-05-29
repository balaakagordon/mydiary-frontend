import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import signupReducer from './signupReducers';
import getEntriesReducer from './getEntriesReducer';
import userReducers from './userReducers';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    getEntries: getEntriesReducer,
    users: userReducers,
});