import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import signupReducer from './signupReducers';
import entriesReducer from './entriesReducers';
import userReducers from './userReducers';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    entries: entriesReducer,
    users: userReducers,
});