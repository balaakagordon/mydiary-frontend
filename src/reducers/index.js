import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import createEntryReducer from './createEntryReducer';
import updateEntryReducer from './updateEntryReducer';
import getEntryReducer from './getEntryReducer';
import getEntriesReducer from './getEntriesReducer';
import getProfileReducer from './getProfileReducer';
import navbarReducer from './navbarReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    getEntry: getEntryReducer,
    getEntries: getEntriesReducer,
    newEntry: createEntryReducer,
    updateEntry: updateEntryReducer,
    profile: getProfileReducer,
    navbar: navbarReducer,
});