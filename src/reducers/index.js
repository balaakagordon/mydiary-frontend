import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import writeEntryReducer from './createEntryReducer';
import getEntryReducer from './getEntryReducer';
import getEntriesReducer from './getEntriesReducer';
import getProfileReducer from './getProfileReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    getEntry: getEntryReducer,
    getEntries: getEntriesReducer,
    writeEntry: writeEntryReducer,
    profile: getProfileReducer,
});