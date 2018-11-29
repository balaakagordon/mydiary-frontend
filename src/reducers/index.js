import { combineReducers } from 'redux';
import loginReducer from './loginReducers';
import signupReducer from './signupReducers';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
});