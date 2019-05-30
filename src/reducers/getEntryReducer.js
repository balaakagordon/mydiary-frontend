import {
    GET_ENTRY_REQUEST,
    GET_ENTRY_SUCCESS,
    GET_ENTRY_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.getEntries, action) {
  switch (action.type) {
    case GET_ENTRY_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case GET_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        message: `Unable to load entry`,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case GET_ENTRY_SUCCESS:
      return {
        ...state,
        entry: {
            title: action.payload,
            body: action.payload,
            lastEdited: action.payload
        },
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
