import {
    GET_ENTRIES,
} from '../actions/types';


const initialState = {
    entries: [],
    entry: [],
    errors: [],
    message: [],
  };

  const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ENTRIES:
      console.log("REDUCER", action.payload)
        return { 
            ...state, 
            entries: action.payload.entries };

      default:
        return state;
    }
  };
  export default entriesReducer;