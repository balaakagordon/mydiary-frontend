import {
    CREATE_ENTRY_REQUEST,
    CREATE_ENTRY_SUCCESS,
    CREATE_ENTRY_FAILURE
} from '../actions/types';
import initialState from './initialState';

export default function (state = initialState.writeEntry, action) {
  switch (action.type) {
    case CREATE_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    case CREATE_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        status: action.payload.status,
        message: action.payload.message
      };

    default:
      return state;
  }
}
