import {
    GET_ENTRIES_REQUEST,
    GET_ENTRIES_SUCCESS,
    GET_ENTRIES_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.entries, action) {
  switch (action.type) {
    case GET_ENTRIES_REQUEST:
      return {
        ...state,
        status: "loading",
        loading: true,
      };

    case GET_ENTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload.data,
        status: action.payload.status,
      };

    case GET_ENTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        message: `Unable to load entries`,
        status: action.payload.status,
        token: action.payload.data.token
      };

    default:
      return state;
  }
}
