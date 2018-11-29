import {
    GET_ENTRIES,
    GET_ENTRY,
    CREATE_ENTRY,
    UPDATE_ENTRY,
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
      
        case CREATE_ENTRY:
        return {
            ...state, 
            entry: action.payload };
        
        case UPDATE_ENTRY:
        return { 
            ...state, 
            entry: action.payload.entry };

      default:
        return state;
    }
  };
  export default entriesReducer;