import {
    GET_ENTRIES,
    GET_ENTRY,
} from '../actions/types';


const initialState = {
    entries: [],
    entry: null,
    errors: [],
    message: [],
  };

  const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ENTRIES:
        return { 
            ...state, 
            entries: action.payload.entries };
      
      case GET_ENTRY:
        return { 
            ...state, 
            entry: action.payload.getEntry };

      default:
        return state;
    }
  };
  export default entriesReducer;